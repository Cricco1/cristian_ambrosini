// Gestione cambio sezione
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Reset dettaglio materia se torno su materie
  if(sectionId === 'materie') {
    document.getElementById('materia-title').textContent = "Seleziona una materia per vedere i dettagli";
    document.getElementById('materia-description').textContent = "";
  }
}

// Biografia originale (ripristinata)
const bioTextIT =  `Mi chiamo Cristian Ambrosini, ho 19 anni, e oggi mi ritrovo alla fine di un viaggio che, pur durato cinque anni, sembra essere passato in un battito di ciglia. Frequentare l’indirizzo Informatica all’IIS “Marconi Pieralisi” di Jesi è stata una scelta che nasce dalla mia passione per la tecnologia e il desiderio di capire come funziona il mondo digitale che ci circonda. Durante questi anni ho potuto scoprire, passo dopo passo, non solo il linguaggio delle macchine, ma anche quello del problem solving e della creatività applicata all’informatica.`;

// Inserisco testo biografia nella pagina
document.getElementById('bio-text').textContent = bioTextIT;

// Testo originale PCTO (ripristinato)
const pctoText = `
Durante il PCTO ho avuto l'opportunità di immergermi nel mondo lavorativo con due periodi distinti. Nel primo, ho studiato a fondo l’azienda, comprendendone struttura e funzioni, e ho iniziato l'elaborazione del compito affidatomi. Nel secondo periodo, mi sono dedicato alla realizzazione pratica del lavoro, sviluppando un software con esportazione automatica in Excel, che ho presentato con successo in ufficio.

Giudizio personale: Il PCTO è stata un’esperienza formativa che mi ha permesso di mettere in pratica le competenze informatiche e relazionali acquisite, rafforzando il mio approccio professionale e il lavoro in team.
`;

// Inserisco testo PCTO nella pagina
// Nel file HTML il testo PCTO è fisso, quindi non serve inserirlo da JS

// Testi dettagli materie (come li avevi)
const materieDetails = {
  "Italiano": `In Italiano ho approfondito autori come Italo Svevo e Gabriele D'Annunzio, studiando le loro opere principali e il contesto storico-culturale in cui hanno scritto. Ho analizzato tematiche chiave come il modernismo, la psicanalisi applicata alla letteratura, e l'estetismo. Ho riflettuto su come le tecniche narrative influenzino la percezione del lettore e su come questi autori abbiano anticipato movimenti letterari successivi.`,

  "TPSIT": `La materia TPSIT (Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni) mi ha permesso di studiare i sistemi informatici, l’architettura del computer, i protocolli di rete e la sicurezza informatica. Ho realizzato un progetto software che consente l’esportazione automatica di dati in Excel, integrando competenze di programmazione, database e interfacce utente.

Inoltre, ho approfondito lo sviluppo di applicazioni per dispositivi mobili Android, comprendendo la storia e diffusione di questa tecnologia, e l'architettura di Android con i suoi principali livelli: Application Layer, Application Framework Layer, Libraries Layer, Android Runtime Layer e Linux Kernel Layer. Ho studiato il processo di avvio di un'app e la gestione dei processi e della memoria centrale.

Infine, ho esaminato i meccanismi di protezione e sicurezza, come quelli offerti da Linux e specifici dell’ambiente Android, fondamentali per garantire l’integrità e la privacy delle applicazioni e degli utenti.`,

  "Sistemi e Reti": `In Sistemi e Reti ho approfondito la struttura e il funzionamento delle reti informatiche, con particolare attenzione ai protocolli TCP/IP, alla configurazione di server e client, e alla sicurezza nelle comunicazioni. Ho imparato a configurare dispositivi di rete, analizzare traffico dati e risolvere problemi di connettività, acquisendo una visione pratica e teorica delle infrastrutture digitali.`,

  "Storia": `In Storia ho studiato l’Unità 1: Dalla belle époque alla Grande guerra, analizzando:

- Capitolo 1: All’alba del Novecento tra euforia e inquietudini
- Capitolo 3: L’Italia nell’età giolittiana
- Capitolo 4: La Grande guerra
- Capitolo 5: I fragili equilibri del dopoguerra

Questo percorso mi ha permesso di comprendere i grandi cambiamenti sociali, politici ed economici che hanno caratterizzato l’inizio del XX secolo, nonché le cause e le conseguenze di eventi storici fondamentali.`  
};

// Funzione per mostrare i dettagli della materia sotto la griglia
function showMateriaDetail(materia) {
  document.getElementById('materia-title').textContent = materia;
  document.getElementById('materia-description').textContent = materieDetails[materia] || "Dettagli non disponibili.";
}
