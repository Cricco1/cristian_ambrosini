document.addEventListener("DOMContentLoaded", () => {
  // Rileva tutti i bottoni di cambio lingua presenti nella pagina
  const toggleButtons = document.querySelectorAll("[id^='toggleLang']");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.id.replace("toggleLang", "").toLowerCase(); // es: PCTO -> pcto
      const elements = document.querySelectorAll(`#${sectionId} [data-it]`);
      const isEnglish = button.textContent === "English";

      elements.forEach(el => {
        const newText = el.getAttribute(isEnglish ? "data-en" : "data-it");
        if (newText !== null) {
          el.textContent = newText;
        }
      });

      button.textContent = isEnglish ? "Italiano" : "English";
    });
  });
});
