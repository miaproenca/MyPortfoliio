/* ==========================================================
   Home — cargo que alterna (efeito de digitação) e cartas que viram
   ========================================================== */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Cartas: clique/toque (ou Enter/Espaço) vira a carta ----
  document.querySelectorAll('.flip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const flipped = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!flipped));
    });
  });

  // ---- Cargo que alterna ----
  const el = document.querySelector('[data-roles]');
  if (!el || reduceMotion) return;

  const roles = el.dataset.roles.split('|').map((r) => r.trim()).filter(Boolean);
  if (roles.length < 2) return;

  let roleIndex = 0;
  let charIndex = roles[0].length; // começa com o primeiro cargo já escrito
  let deleting = true;             // e apaga antes de digitar o próximo

  function tick() {
    const word = roles[roleIndex];
    el.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex === word.length) {
      deleting = true;
      return setTimeout(tick, 1800);          // pausa com a palavra completa
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(tick, 300);
    }

    charIndex += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 40 : 80);
  }

  setTimeout(tick, 2200); // dá tempo de ler o primeiro cargo
})();
