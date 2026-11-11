/* ==========================================================
   Galeria de projetos — filtros por categoria
   Cada card tem data-tags="ui-ux product ..." e cada botão
   tem data-filter="ui-ux" (ou "all").
   ========================================================== */

(() => {
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('[data-tags]');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));

      cards.forEach((card) => {
        const tags = card.dataset.tags.split(' ');
        card.hidden = !(filter === 'all' || tags.includes(filter));
      });
    });
  });
})();
