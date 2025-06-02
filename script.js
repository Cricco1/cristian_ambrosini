const italianText = `Mi chiamo Cristian Ambrosini, ho 19 anni, e oggi mi ritrovo alla fine di un viaggio che, pur durato cinque anni, sembra essere passato in un battito di ciglia. Frequentare l’indirizzo Informatica all’IIS “Marconi Pieralisi” di Jesi è stata una scelta che nasce dalla mia passione per la tecnologia, i videogiochi e il mondo digitale. Ma quello che non potevo immaginare il primo giorno, seduto su quei banchi con lo zaino ancora rigido e la testa piena di sogni, era quanto questa scuola avrebbe cambiato me.

In questi anni non ho solo imparato a programmare o a capire i sistemi: ho imparato a conoscermi. Ho scoperto il valore delle relazioni, il senso profondo della collaborazione, e quanto possa essere potente il sentirsi parte di qualcosa. Le gite scolastiche, i momenti di condivisione e persino le difficoltà ci hanno unito come classe, trasformandoci da semplici compagni in una famiglia vera e propria. Oggi porto con me legami che sanno di affetto sincero, costruiti giorno dopo giorno, sorriso dopo sorriso.

Sono entrato come un ragazzo forse un po' ingenuo, incerto su chi fosse e su cosa volesse diventare. Esco come una persona che ha imparato a credere in sé stessa, che ha imparato ad ascoltare gli altri, a lavorare in gruppo, ad essere più aperta, più empatica, più consapevole dei propri limiti e delle proprie forze.

Fuori dalla scuola, mi lascio ispirare da tutto ciò che stimola la mia creatività: la palestra, i momenti con gli amici, il mondo dell’arte e del disegno digitale. Sono passioni che mi aiutano a esprimere ciò che a volte le parole non sanno dire. Amo il confronto, le idee che si incrociano, le energie che si sommano. Forse è questo che mi ha insegnato davvero la scuola: che insieme siamo più forti.

Chiudo questo capitolo con gratitudine, con il cuore pieno di ricordi e con la voglia di affrontare ciò che verrà, portando con me tutto quello che questi cinque anni mi hanno insegnato.`;

const englishText = `My name is Cristian Ambrosini, I’m 19 years old, and today I find myself at the end of a journey that, although it lasted five years, feels like it passed in the blink of an eye. Attending the IT program at IIS "Marconi Pieralisi" in Jesi was a choice born from my passion for technology, video games, and the digital world. But what I couldn’t imagine on that very first day — backpack still stiff, head full of dreams — was how much this school would shape who I am.

Over these years, I haven’t only learned how to code or understand systems. I’ve learned how to understand myself. I’ve discovered the value of friendship, the deep meaning of teamwork, and how powerful it is to feel truly part of something. School trips, shared laughter, and even the struggles bonded our class — turning us from classmates into a real family. Today, I carry with me sincere bonds built day after day, smile after smile.

I started this journey as a boy who was maybe a little naive, unsure of who he was or what he wanted to become. I leave now as someone who believes in himself, who listens to others, who knows how to work as a team, and who’s more open, more empathetic, more aware of both his strengths and his limits.

Outside of school, I find inspiration in everything that sparks my creativity: going to the gym, hanging out with friends, and my love for art and digital drawing. These are passions that help me express what words sometimes can't. I love sharing ideas, exchanging perspectives — maybe that’s the most valuable thing school has taught me: that together, we are stronger.

I close this chapter with gratitude, my heart full of memories, and the desire to embrace what’s next — carrying with me everything these five years have taught me.`;

let isItalian = true;

function toggleLanguage() {
  const textElement = document.getElementById("bio-text");
  const newText = isItalian ? englishText : italianText;
  const button = document.querySelector("button");

  textElement.classList.remove("show");
  setTimeout(() => {
    textElement.textContent = newText;
    textElement.classList.add("show");
    button.textContent = isItalian ? "🇮🇹 Traduci in italiano" : "🌍 Translate to English";
    isItalian = !isItalian;
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("bio-text");
  textElement.textContent = italianText;
  textElement.classList.add("show");
});
