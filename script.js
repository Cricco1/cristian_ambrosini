function openMateria(nome) {
  window.location.href = `materia.html?nome=${encodeURIComponent(nome)}`;
}

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

document.addEventListener("DOMContentLoaded", () => {
  const btnIt = document.getElementById("btnIt");
  const btnEn = document.getElementById("btnEn");
  if (btnIt) btnIt.addEventListener("click", () => setLanguage("it"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

  if (document.body.classList.contains("materia-page")) {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome") || "Materia";
    document.getElementById("nomeMateria").textContent = nome;

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

    document.getElementById("testoMateria").textContent = contenutiMaterie[nome] || "Contenuto non disponibile.";
  }
});
