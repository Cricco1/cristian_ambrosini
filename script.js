// script.js

// Funzione per aprire la pagina materia.html con il nome materia passato in querystring
function openMateria(nome) {
  window.location.href = `materia.html?nome=${encodeURIComponent(nome)}`;
}

// Cambio lingua biografia
function setLanguage(lang) {
  const bioParagraphs = document.querySelectorAll(".bio-content p");
  bioParagraphs.forEach(p => {
    const textIt = p.getAttribute("data-it");
    const textEn = p.getAttribute("data-en");
    if (lang === "en" && textEn) {
      p.textContent = textEn;
    } else if (lang === "it" && textIt) {
      p.textContent = textIt;
    }
  });
}

// Carica testo dinamico in materia.html
function caricaMateriaTesto() {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("nome") || "Materia";

  const titolo = document.getElementById("nomeMateria");
  if (titolo) titolo.textContent = nome;

  const contenutiMaterie = {
    "Intelligenza Artificiale": "Testo di esempio per Intelligenza Artificiale...",
    "Scienze Motorie": "Testo di esempio per Scienze Motorie...",
    "Sistemi e Reti": "Testo di esempio per Sistemi e Reti...",
    "GPOI": "Testo di esempio per GPOI...",
    "Storia": "Testo di esempio per Storia...",
    "Italiano": "Testo di esempio per Italiano...",
    "TPSIT": "Testo di esempio per TPSIT...",
    "Educazione Civica": "Testo di esempio per Educazione Civica...",
    "Informatica": "Testo di esempio per Informatica...",
    "Inglese": "Testo di esempio per Inglese...",
    "Matematica": "Testo di esempio per Matematica..."
  };

  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value = contenutiMaterie[nome] || "";
  }
}

// Event listeners per cambio lingua
document.addEventListener("DOMContentLoaded", () => {
  // Solo se siamo in index.html per la biografia
  if (document.querySelector(".bio-content")) {
    setLanguage("it"); // default italiano
  }

  // Carica materia testo in materia.html
  if (document.body.classList.contains("materia-page")) {
    caricaMateriaTesto();
  }

  document.getElementById("btnIt").addEventListener("click", () => {
    setLanguage("it");
  });

  document.getElementById("btnEn").addEventListener("click", () => {
    setLanguage("en");
  });
});
