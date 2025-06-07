// Funzione per mostrare una sezione
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Nascondo area materia testo se aperta
  closeMateria();
}

// Funzione per toggle lingua biografia
function toggleLanguage() {
  const ita = document.getElementById('bio-ita');
  const eng = document.getElementById('bio-eng');
  if (ita.style.display !== 'none') {
    ita.style.display = 'none';
    eng.style.display = 'block';
  } else {
    ita.style.display = 'block';
    eng.style.display = 'none';
  }
}

// Funzione per mostrare testo materia
function showMateria(nomeMateria) {
  const materiaText = document.getElementById('materia-text');
  const materiaContent = document.getElementById('materia-content');

  let testo = '';

  switch(nomeMateria) {
    case 'italiano':
      testo = `<h3>Italiano</h3>
        <p>Analisi di Svevo e D’Annunzio, studio dei testi principali, riflessioni sullo stile e l’epoca storica.</p>`;
      break;
    case 'storia':
      testo = `<h3>Storia</h3>
        <p>Unità 1 – Dalla belle époque alla Grande guerra</p>
        <ul>
          <li>Cap. 1 – All’alba del Novecento tra euforia e inquietudini</li>
          <li>Cap. 3 – L’Italia nell’età giolittiana</li>
          <li>Cap. 4 – La Grande guerra</li>
          <li>Cap. 5 – I fragili equilibri del dopoguerra</li>
        </ul>`;
      break;
    case 'matematica':
      testo = `<h3>Matematica</h3><p>Numeri, funzioni, logica, algebra e geometria.</p>`;
      break;
    case 'inglese':
      testo = `<h3>Inglese</h3><p>Lingua e cultura inglese, grammatica e conversazione.</p>`;
      break;
    case 'informatica':
      testo = `<h3>Informatica</h3><p>Programmazione, algoritmi e basi di dati.</p>`;
      break;
    case 'sistemi':
      testo = `<h3>Sistemi e Reti</h3><p>Architetture hardware, protocolli di rete e sicurezza.</p>`;
      break;
    case 'intelligenza':
      testo = `<h3>Intelligenza Artificiale</h3><p>Machine Learning, reti neurali e automazione.</p>`;
      break;
    case 'tipsit':
      testo = `<h3>TPSIT</h3>
        <p><strong>Sviluppo di applicazioni per dispositivi mobili Android:</strong></p>
        <ul>
          <li>Storia e diffusione</li>
          <li>Architettura: Applications Layer, Application Framework Layer, Libraries Layer, Android Runtime Layer, Linux Kernel Layer</li>
          <li>Avvio di un'app, gestione dei processi e della memoria centrale</li>
          <li>Protezione: meccanismi di sicurezza di Linux, caratteristiche dell’ambiente Android, meccanismi di sicurezza di Android</li>
        </ul>`;
      break;
    case 'gpoi':
      testo = `<h3>GPOI</h3><p>Gestione progetti, metodologie e strumenti.</p>`;
      break;
    case 'scienze':
      testo = `<h3>Scienze Motorie</h3><p>Attività fisica, salute e benessere.</p>`;
      break;
    case 'civica':
      testo = `<h3>Educazione Civica</h3><p>Diritti, doveri e cittadinanza attiva.</p>`;
      break;
    default:
      testo = `<p>Contenuto non disponibile.</p>`;
  }

  materiaContent.innerHTML = testo;
  materiaText.style.display = 'block';
  window.scrollTo({ top: materiaText.offsetTop, behavior: 'smooth' });
}

// Funzione per chiudere area testo materia
function closeMateria() {
  const materiaText = document.getElementById('materia-text');
  materiaText.style.display = 'none';
}
