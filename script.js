// Funzione per il toggle della lingua su ogni pagina
function setupLanguageToggle(buttonId, selector) {
  const toggleBtn = document.getElementById(buttonId);
  const elements = document.querySelectorAll(selector);

  if (!toggleBtn) return; // Se non esiste il bottone, esci

  toggleBtn.addEventListener('click', () => {
    if(toggleBtn.textContent === 'English') {
      elements.forEach(el => {
        el.textContent = el.getAttribute('data-en');
      });
      toggleBtn.textContent = 'Italiano';
    } else {
      elements.forEach(el => {
        el.textContent = el.getAttribute('data-it');
      });
      toggleBtn.textContent = 'English';
    }
  });
}

// Setup toggle lingua per le tre pagine
setupLanguageToggle('toggleLangBiografia', '#biografia [data-it]');
setupLanguageToggle('toggleLangPCTO', '#pcto [data-it]');
setupLanguageToggle('toggleLangMaterie', '#materie [data-it]');
