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
// Funzione per il toggle della lingua su ogni pagina
setupLanguageToggle('toggleLangEnvironment', '#environment [data-it]');

// Accordion per Materie
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle classe active al bottone
    button.classList.toggle('active');

    // Toggle display del pannello associato (il div subito dopo il bottone)
    const panel = button.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
document.querySelectorAll('.accordion').forEach((accordionBtn, index) => {
  accordionBtn.addEventListener('click', () => {
    const allAccordions = document.querySelectorAll('.accordion');
    const allPanels = document.querySelectorAll('.panel');

    allAccordions.forEach((btn, i) => {
      if (i === index) {
        // Toggle corrente
        btn.classList.toggle("active");
        allPanels[i].style.display = btn.classList.contains("active") ? "block" : "none";
      } else {
        // Chiudi gli altri
        btn.classList.remove("active");
        allPanels[i].style.display = "none";
      }
    });
  });
});
