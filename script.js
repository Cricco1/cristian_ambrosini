// Traduzione biografia Italiano <-> Inglese

const translateBtn = document.getElementById('translateBtn');
const bioText = document.getElementById('bio-text');

const bioItaliano = `Mi chiamo Cristian Ambrosini, ho 19 anni, e oggi mi ritrovo alla fine di un viaggio che, pur durato cinque anni, sembra essere passato in un battito di ciglia. Frequentare l’indirizzo Informatica all’IIS “Marconi Pieralisi” di Jesi è stata una scelta che nasce dalla mia passione per la tecnologia, i videogiochi e il mondo digitale. Ma quello che non potevo immaginare il primo giorno, seduto su quei banchi con lo zaino ancora rigido e la testa piena di sogni, era quanto questa scuola mi avrebbe cambiato..

In questi anni non ho solo imparato a programmare, ma ho imparato a conoscermi. Ho scoperto il valore delle relazioni, il senso profondo della collaborazione, e quanto possa essere potente il sentirsi parte di qualcosa. Le gite scolastiche, i momenti di condivisione e persino le difficoltà ci hanno unito come classe, trasformandoci da semplici compagni in una famiglia vera e propria. Oggi porto con me legami che sanno di affetto sincero, costruiti giorno dopo giorno, sorriso dopo sorriso.

Sono entrato come un ragazzo forse un po' ingenuo, incerto su chi fosse e su cosa volesse diventare. Esco come una persona che ha imparato a credere in sé stessa, che ha imparato ad ascoltare gli altri, a lavorare in gruppo, ad essere più aperta, più empatica, più consapevole dei propri limiti e delle proprie forze.

Fuori dalla scuola, mi lascio ispirare da tutto ciò che stimola la mia creatività: la palestra, i momenti con gli amici, il mondo dell’arte e del disegno digitale. Sono passioni che mi aiutano a esprimere ciò che a volte le parole non sanno dire. Amo il confronto, le idee che si incrociano, le energie che si sommano. Forse è questo che mi ha insegnato davvero la scuola: che insieme siamo più forti.

Chiudo questo capitolo con gratitudine, con il cuore pieno di ricordi e con la voglia di affrontare ciò che verrà, portando con me tutto quello che questi cinque anni mi hanno insegnato.`;

const bioEnglish = `My name is Cristian Ambrosini, I am 19 years old, and today I find myself at the end of a journey that, although lasting five years, seems to have passed in the blink of an eye. Attending the Computer Science course at IIS “Marconi Pieralisi” in Jesi was a choice born from my passion for technology, video games, and the digital world. But what I couldn’t imagine on the first day, sitting on those benches with a still rigid backpack and a head full of dreams, was how much this school would change me..

In these years I have not only learned to program, but I have learned to know myself. I discovered the value of relationships, the deep meaning of collaboration, and how powerful it can be to feel part of something. School trips, moments of sharing, and even difficulties united us as a class, turning us from simple classmates into a true family. Today I carry with me bonds that know sincere affection, built day after day, smile after smile.

I entered as a perhaps somewhat naive boy, uncertain of who he was and what he wanted to become. I leave as a person who has learned to believe in herself, who has learned to listen to others, to work in a group, to be more open, more empathetic, more aware of her own limits and strengths.

Outside of school, I am inspired by everything that stimulates my creativity: the gym, moments with friends, the world of art and digital drawing. These are passions that help me express what words sometimes cannot say. I love confrontation, ideas that intersect, energies that add up. Maybe this is what school really taught me: that together we are stronger.

I close this chapter with gratitude, with a heart full of memories, and with the desire to face what is to come, carrying with me everything these five years have taught me.`;

let isItalian = true;

translateBtn.addEventListener('click', () => {
  if (isItalian) {
    bioText.textContent = bioEnglish;
    translateBtn.textContent = "Traduci in Italiano";
  } else {
    bioText.textContent = bioItaliano;
    translateBtn.textContent = "Translate to English";
  }
  isItalian = !isItalian;
});

// Materie cliccabili: fai scroll nella sezione corrispondente o mostra alert

document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    alert(`Hai cliccato su: ${materia.querySelector('h3').textContent}`);
  });
  materia.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      materia.click();
    }
  });
});
