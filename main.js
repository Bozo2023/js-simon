const domaniHtml= document.getElementById("Domani")
// Imposta la data di fine conto alla rovescia
let Domani = new Date("Jan 19, 2024 09:30:00").getTime();

// Aggiorna il conto alla rovescia ogni secondo
let rovescia = setInterval(function() {

  // Ottieni la data e l'ora corrente
  let adesso = new Date("Jan 18, 2024 22:50:00").getTime();

  // Trova la distanza tra ora corrente e la data di fine conto alla rovescia
  let distance = Domani - adesso;
  

  // Calcola i giorni, le ore, i minuti e i secondi rimanenti
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Visualizza il risultato in un elemento con id="countdown"
  domaniHtml.innerHTML = days + " giorni " + hours + " ore "
  + minutes + " minuti " + seconds + " secondi ";

  // Se il conto alla rovescia è terminato, visualizza un messaggio
  if (distance < 0) {
    clearInterval(rovescia);
    domaniHtml.innerHTML = "È ora di correggere!";
  }
}, 1000);