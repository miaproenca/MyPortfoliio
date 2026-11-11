/* ==========================================================
   Playground de ícones (seção Software)
   Os ícones podem ser arrastados, jogados e colidem entre si
   e com as bordas do quadrado.
   Usa Matter.js (carregado por CDN no about.html).
   ========================================================== */

(() => {
  // ---- Ajustes rápidos ---------------------------------
  const CONFIG = {
    gravityY: 0.5,       // 0 = flutuam sem gravidade; 1 = caem forte
    bounce: 0.55,        // elasticidade das colisões (0 a 1)
    airFriction: 0.012,  // resistência do ar: maior = param mais rápido
    hitboxScale: 0.44,   // raio da colisão em relação ao tamanho da imagem
    dragStiffness: 0.2,  // firmeza ao arrastar (0 a 1)
  };
  // ------------------------------------------------------

  const container = document.querySelector('[data-playground]');
  if (!container || typeof Matter === 'undefined') return; // sem JS/Matter, os ícones ficam em grade

  const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rand = (min, max) => Math.random() * (max - min) + min;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // O mouse é criado uma única vez (evita acumular listeners a cada rebuild)
  const mouse = Mouse.create(container);
  mouse.element.removeEventListener('mousewheel', mouse.mousewheel);      // não roubar a rolagem da página
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

  let engine = null;
  let runner = null;
  let running = false;
  let inView = true;
  let items = [];
  let builtWidth = 0;

  function start() {
    if (!running && engine && inView) {
      Runner.run(runner, engine);
      running = true;
    }
  }

  function stop() {
    if (running) {
      Runner.stop(runner);
      running = false;
    }
  }

  function destroy() {
    stop();
    if (engine) {
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    }
    engine = runner = null;
    items = [];
  }

  function build() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    const nodes = [...container.querySelectorAll('.ball')];
    if (!nodes.length || !width || !height) return;

    destroy();
    builtWidth = width;

    engine = Engine.create({ gravity: { x: 0, y: reduceMotion ? 0 : CONFIG.gravityY } });
    runner = Runner.create();

    // Paredes grossas ao redor do quadrado (evita que um arremesso rápido atravesse)
    const t = 200;
    const walls = [
      Bodies.rectangle(width / 2, -t / 2, width + t * 2, t, { isStatic: true }),          // topo
      Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, { isStatic: true }),  // base
      Bodies.rectangle(-t / 2, height / 2, t, height + t * 2, { isStatic: true }),        // esquerda
      Bodies.rectangle(width + t / 2, height / 2, t, height + t * 2, { isStatic: true }), // direita
    ];

    // Um corpo circular para cada ícone
    const size = nodes[0].offsetWidth;
    const radius = size * CONFIG.hitboxScale;
    const cols = Math.max(2, Math.floor(width / (size * 1.25)));

    items = nodes.map((el, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = (col + 0.5) * (width / cols) + rand(-8, 8);
      const y = radius + 12 + row * size * 1.2 + rand(-6, 6);

      const body = Bodies.circle(x, y, radius, {
        restitution: CONFIG.bounce,
        friction: 0.05,
        frictionAir: CONFIG.airFriction,
        density: 0.002,
      });
      Body.setAngle(body, rand(-0.5, 0.5));
      Body.setVelocity(body, { x: rand(-3, 3), y: rand(-2, 2) });

      return { el, body, size, radius };
    });

    // Arrastar com o mouse/dedo
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: CONFIG.dragStiffness, render: { visible: false } },
    });
    Events.on(mouseConstraint, 'startdrag', () => container.classList.add('is-dragging'));
    Events.on(mouseConstraint, 'enddrag', () => container.classList.remove('is-dragging'));

    Composite.add(engine.world, [...walls, ...items.map((i) => i.body), mouseConstraint]);

    // A cada passo da física, posiciona as imagens no lugar dos corpos
    Events.on(engine, 'afterUpdate', sync);

    container.classList.add('is-live');
    sync();
    start();
  }

  function sync() {
    const w = container.clientWidth;
    const h = container.clientHeight;

    for (const { el, body, size, radius } of items) {
      // Segurança: se algum ícone escapar, traz de volta para dentro do quadrado
      const { x, y } = body.position;
      if (x < radius || x > w - radius || y < radius || y > h - radius) {
        Body.setPosition(body, {
          x: clamp(x, radius, w - radius),
          y: clamp(y, radius, h - radius),
        });
      }

      el.style.transform =
        `translate(${body.position.x - size / 2}px, ${body.position.y - size / 2}px) rotate(${body.angle}rad)`;
    }
  }

  // Pausa a física quando o quadrado sai da tela (economiza bateria)
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    inView ? start() : stop();
  }).observe(container);

  // Recria o mundo se o tamanho do quadrado mudar (ex.: girar o celular)
  let resizeTimer;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (Math.abs(container.clientWidth - builtWidth) > 1) build();
    }, 200);
  }).observe(container);

  build();
})();
