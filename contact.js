/* ==========================================================
   Página de contato
   >>> EDITE SÓ AQUI: seus dados de contato <<<
   Todos os links são gerados a partir deste bloco.
   ========================================================== */

const CONTACT = {
  email: 'mirela.proenca025@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mirela-proen%C3%A7a-63314328a/',
};

/* ---------------------------------------------------------- */

(() => {
  // Quais valores ainda são os de exemplo?
  const isPlaceholder =
    CONTACT.email.includes('exemplo.com') ||
    CONTACT.linkedin.includes('seu-usuario');

  // ---- E-mail ----
  document.querySelectorAll('[data-contact="email"]').forEach((el) => {
    el.href = `mailto:${CONTACT.email}`;
  });
  document.querySelectorAll('[data-contact-text="email"]').forEach((el) => {
    el.textContent = CONTACT.email;
  });

  // ---- LinkedIn ----
  document.querySelectorAll('[data-contact="linkedin"]').forEach((el) => {
    el.href = CONTACT.linkedin;
  });
  document.querySelectorAll('[data-contact-text="linkedin"]').forEach((el) => {
    el.textContent = decodeURI(CONTACT.linkedin).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  });

  // ---- Aviso enquanto os dados ainda são de exemplo (some sozinho ao editar) ----
  document.querySelectorAll('[data-placeholder-note]').forEach((el) => {
    el.hidden = !isPlaceholder;
  });

  // ---- Copiar e-mail ----
  document.querySelectorAll('[data-copy-email]').forEach((btn) => {
    const label = btn.querySelector('span');
    const original = label.textContent;

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CONTACT.email);
      } catch {
        // alternativa para quando o navegador bloqueia a área de transferência (ex.: arquivo local)
        const area = document.createElement('textarea');
        area.value = CONTACT.email;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      label.textContent = window.t('Copied ✓');
      setTimeout(() => { label.textContent = original; }, 1800);
    });
  });
})();
