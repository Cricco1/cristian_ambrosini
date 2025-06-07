// Funzione per mostrare solo la sezione selezionata
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    if(sec.id === id) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}

// Testi dettagli materie
const materieDetails = {
  "Italiano": `In Italiano ho approfondito autori come Italo Svevo e Gabriele D'Annunzio, studiando le loro opere principali e il contesto storico-culturale in cui hanno scritto. Ho analizzato tematiche chiave come il modernismo, la psicanalisi applicata alla letteratura, e l'estetismo. Ho riflettuto su come le tecniche narrative influenzino la percezione del lettore e su come questi autori abbiano anticipato movimenti letterari successivi.`,
  
  "TPSIT": `La materia TPSIT (Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni) mi ha permesso di studiare i sistemi informatici, l’architettura del computer, i protocolli di rete e la sicurezza informatica. Ho realizzato un progetto software che consente l’esportazione automatica di dati in Excel, integrando competenze di programmazione, database e interfacce utente.`,

  "Sistemi e Reti": `In Sistemi e Reti ho approfondito la struttura e il funzionamento delle reti informatiche, con particolare attenzione ai protocolli TCP/IP, alla configurazione di server e client, e alla sicurezza nelle comunicazioni. Ho imparato a configurare dispositivi di rete, analizzare traffico dati e risolvere problemi di connettività, acquisendo una visione pratica e teorica delle infrastrutture digitali.`
};

// Apertura modal con testo materia
function showMateriaDetail(materia) {
  const modal = document.getElementById('materiaModal');
  const title = document.getElementById('modal-title');
  const text = document.getElementById('modal-text');

  title.textContent = materia;
  text.textContent = materieDetails[materia] || 'Contenuto non disponibile.';
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Chiusura modal
function closeModal() {
  const modal = document.getElementById('materiaModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Chiude modal cliccando fuori contenuto
window.onclick = function(event) {
  const modal = document.getElementById('materiaModal');
  if(event.target === modal) {
    closeModal();
  }
};

// Caricamento testo biografia al caricamento pagina
document.addEventListener('DOMContentLoaded', () => {
  const bioText = `Sono Cristian Ambrosini, studente presso l'IIS Marconi Pieralisi di Jesi, indirizzo Informatica. Sono appassionato di tecnologia e programmazione, con particolare interesse per lo sviluppo software e le reti. Durante il mio percorso scolastico ho partecipato a diversi progetti che mi hanno permesso di mettere in pratica le competenze acquisite e di crescere sia a livello tecnico che personale. In vista dell'esame di maturità, ho deciso di realizzare questo sito per presentare il mio percorso e le materie studiate.`;
  document.getElementById('bio-text').textContent = bioText;
});
