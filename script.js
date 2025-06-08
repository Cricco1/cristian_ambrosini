document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("lang-btn");
  const translatableElements = document.querySelectorAll("[data-it][data-en]");

  langBtn.addEventListener("click", function () {
    const isEnglish = langBtn.innerText === "EN";
    translatableElements.forEach((el) => {
      el.innerText = isEnglish ? el.getAttribute("data-en") : el.getAttribute("data-it");
    });
    langBtn.innerText = isEnglish ? "IT" : "EN";
  });
});
