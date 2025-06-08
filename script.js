const toggleBtn = document.getElementById('toggleLang');

if (toggleBtn) {
  let lang = 'it'; // lingua di default

  toggleBtn.addEventListener('click', () => {
    lang = lang === 'it' ? 'en' : 'it';
    toggleBtn.textContent = lang === 'it' ? 'English' : 'Italiano';

    document.querySelectorAll('[data-it]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'it' ? 'data-it' : 'data-en');
    });

    // Cambia anche il titolo della pagina (h1) se presente
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.textContent = h1.getAttribute(lang === 'it' ? 'data-it' : 'data-en');
    }
  });
}
