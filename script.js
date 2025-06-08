// script.js
function openMateria(nome) {
  window.location.href = `materia.html?nome=${encodeURIComponent(nome)}`;
}
// --- Cambio lingua per Biografia ---
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

// Eventi per i bottoni lingua (se ci sono, es. con id "btnIt" e "btnEn")
document.addEventListener("DOMContentLoaded", () => {
  const btnIt = document.getElementById("btnIt");
  const btnEn = document.getElementById("btnEn");

  if (btnIt) btnIt.addEventListener("click", () => setLanguage("it"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
});

// --- Gestione testo dinamico per materia.html ---
function caricaMateriaTesto() {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("nome") || "Materia";

  // Titolo pagina
  const titolo = document.getElementById("nomeMateria");
  if (titolo) titolo.textContent = nome;

  // Oggetto contenuti statici per esempio (da sostituire con vero contenuto o backend)
  const contenutiMaterie = {
    "Intelligenza Artificiale": "Testo di esempio per Intelligenza Artificiale...",
    "Scienze Motorie": "Testo di esempio per Scienze Motorie...",
    "Sistemi e Reti": "Testo di esempio per Sistemi e Reti...",
    "GPOI": "Testo di esempio per GPOI...",
    "Storia": "Testo di esempio per Storia...",
    "Italiano": "Testo di esempio per Italiano...",
    "TPSIT": "Testo di esempio per TPSIT...",
    "Educazione Civica": "Testo di esempio per Educazione Civica..."
  };

  const testoArea = document.querySelector("main.materia-page textarea");
  if (testoArea) {
    testoArea.value = contenutiMaterie[nome] || "Scrivi qui il testo della materia...";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("materia-page")) {
    caricaMateriaTesto();
  }
});
