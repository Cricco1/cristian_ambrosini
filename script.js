// --- Apertura pagina materia ---
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

// --- Gestione testo dinamico per materia.html ---
function caricaMateriaTesto() {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("nome") || "Materia";

  // Titolo
  const titolo = document.getElementById("nomeMateria");
  if (titolo) titolo.textContent = nome;

  // Testo dinamico
  const contenutiMaterie = {
    "Intelligenza Artificiale": "Questa materia tratta gli algoritmi, il machine learning, e le reti neurali.",
    "Scienze Motorie": "Comprende attività sportive, anatomia del corpo umano e benessere fisico.",
    "Sistemi e Reti": "Analizza l'infrastruttura di rete, i protocolli, e i sistemi operativi.",
    "GPOI": "Gestione Progetto Organizzazione Impresa: studio delle dinamiche aziendali e gestione.",
    "Storia": "Analisi degli eventi storici principali, guerre, rivoluzioni e sviluppo della società.",
    "Italiano": "Letteratura italiana, analisi del testo e produzione scritta.",
    "TPSIT": "Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni.",
    "Educazione Civica": "Diritti, doveri, Costituzione Italiana, cittadinanza digitale."
  };

  const contenuto = document.getElementById("contenutoMateria");
  if (contenuto) {
    contenuto.textContent = contenutiMaterie[nome] || "Contenuto in aggiornamento.";
  }
}

// --- Eventi comuni DOM ---
document.addEventListener("DOMContentLoaded", () => {
  // Lingua
  const btnIt = document.getElementById("btnIt");
  const btnEn = document.getElementById("btnEn");
  if (btnIt) btnIt.addEventListener("click", () => setLanguage("it"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

  // Materia
  if (document.body.classList.contains("materia-page")) {
    caricaMateriaTesto();
  }
});
