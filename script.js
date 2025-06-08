// Sezioni e navigazione
const sections = {
  biografia: document.getElementById('biografia'),
  materie: document.getElementById('materie'),
  pcto: document.getElementById('pcto')
};

const navButtons = document.querySelectorAll('.nav-menu button');
const toggleLangBtn = document.getElementById('toggleLang');
let currentLang = 'it';

// Materie da mostrare (escludendo fisica, chimica, diritto, economia e tecnologie)
const materieList = [
  "Intelligenza Artificiale",
  "Scienze Motorie",
  "Sistemi e Reti",
  "GPOI",
  "Storia",
  "Italiano",
  "TPSIT",
  "Educazione Civica"
];

// Funzione per mostrare solo una sezione
function showSection(sectionId) {
  for (const key in sections) {
    if (sections.hasOwnProperty(key)) {
      if (key === sectionId) {
        sections[key].classList.remove('hidden');
        navButtons.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.section === sectionId);
        });
      } else {
        sections[key].classList.add('hidden');
      }
    }
  }
}

// Genera i bottoni materie
const materieContainer = document.querySelector('.materie-container');
materieList.forEach(materia => {
  const btn = document.createElement('button');
  btn.classList.add('materia-btn');
  btn.textContent = materia;
  btn.addEventListener('click', () => {
    openMateria(materia);
  });
  materieContainer.appendChild(btn);
});

// Funzione per mostrare contenuto materia (testo da codice)
const contenutiMaterie = {
  "Intelligenza Artificiale": {
    it: "L'intelligenza artificiale (IA) è una branca dell'informatica che si occupa di sviluppare sistemi in grado di simulare l'intelligenza umana.",
    en: "Artificial intelligence (AI) is a branch of computer science focused on developing systems capable of simulating human intelligence."
  },
  "Scienze Motorie": {
    it: "Le scienze motorie studiano il movimento umano, la salute e l'allenamento fisico.",
    en: "Motor sciences study human movement, health, and physical training."
  },
  "Sistemi e Reti": {
    it: "Sistemi e reti si occupano dell'infrastruttura hardware e software per la comunicazione tra computer.",
    en: "Systems and networks deal with the hardware and software infrastructure for communication between computers."
  },
  "GPOI": {
    it: "GPOI riguarda la gestione e progettazione di oggetti informatici.",
    en: "GPOI concerns the management and design of IT objects."
  },
  "Storia": {
    it: "La storia è lo studio degli eventi passati e del loro impatto sulla società.",
    en: "History is the study of past events and their impact on society."
  },
  "Italiano": {
    it: "Italiano studia la lingua, la letteratura e la cultura italiana.",
    en: "Italian studies the Italian language, literature, and culture."
  },
  "TPSIT": {
    it: "TPSIT riguarda le tecnologie e i processi per lo sviluppo di sistemi informatici e telematici.",
    en: "TPSIT concerns technologies and processes for developing IT and telematic systems."
  },
  "Educazione Civica": {
    it: "L'educazione civica promuove la consapevolezza dei diritti e doveri del cittadino.",
    en: "Civic education promotes awareness of citizens' rights and duties."
  }
};

const materieSection = sections.materie;

// Funzione per aprire materia e mostrare contenuto
function openMateria(nomeMateria) {
  // Sostituisci contenuto della sezione materie con testo della materia
  materieSection.innerHTML = `
    <button id="backMaterie" class="materia-btn" style="margin-bottom: 25px;">← Torna alle Materie</button>
    <h2>${nomeMateria}</h2>
    <p>${contenutiMaterie[nomeMateria][currentLang]}</p>
  `;

  // Mostra la sezione materie se nascosta
  showSection('materie');

  // Gestisci click su torna indietro
  document.getElementById('backMaterie').addEventListener('click', () => {
    // Ripristina lista materie
    materieSection.innerHTML = '';
    materieList.forEach(materia => {
      const btn = document.createElement('button');
      btn.classList.add('materia-btn');
      btn.textContent = materia;
      btn.addEventListener('click', () => openMateria(materia));
      materieSection.appendChild(btn);
    });
  });
}

// Switch lingua per biografia e materie
function toggleLanguage() {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  toggleLangBtn.textContent = currentLang.toUpperCase();

  // Aggiorna testo biografia
  document.querySelectorAll('#biografia p').forEach(p => {
    p.textContent = p.dataset[currentLang];
  });

  // Se materia aperta, aggiorna testo contenuto
  const h2 = materieSection.querySelector('h2');
  const p = materieSection.querySelector('p');
  if (h2 && p) {
    const nomeMateria = h2.textContent;
    if (contenutiMaterie[nomeMateria]) {
      p.textContent = contenutiMaterie[nomeMateria][currentLang];
    }
  }
}

// Event listeners
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Quando si torna a Materie, ricostruisci lista materie se si stava leggendo un testo
    if (btn.dataset.section === 'materie') {
      materieSection.innerHTML = '';
      materieList.forEach(materia => {
        const btnMateria = document.createElement('button');
        btnMateria.classList.add('materia-btn');
        btnMateria.textContent = materia;
        btnMateria.addEventListener('click', () => openMateria(materia));
        materieSection.appendChild(btnMateria);
      });
    }
    showSection(btn.dataset.section);
  });
});

toggleLangBtn.addEventListener('click', toggleLanguage);

// Inizializza lista materie
materieList.forEach(materia => {
  const btn = document.createElement('button');
  btn.classList.add('materia-btn');
  btn.textContent = materia;
  btn.addEventListener('click', () => openMateria(materia));
  materieContainer.appendChild(btn);
});
