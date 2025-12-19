// ? Genero numero casuale per l'utente
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log("userNumber:", userNumber); // ? stampo

// ? Genero numero casuale per il pc
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log("pcNumber:", pcNumber); // ? Stampo

// ? Devo mettere a confronto i due numeri
// ? SE l'utente ha il numero più piccolo
if (pcNumber > userNumber) {
  console.log("Il computer ha vinto");
  alert("Il computer ha vinto :( , ritenta");
}

// ? ALTRIMENTI SE l'utente ha il numero più grande
else if (userNumber > pcNumber) {
  console.log("Hai vinto!!");
  alert("Congratulazioni!! Hai vinto");
}

// ? ALTRIMENTI SE utente e pc sorteggiano lo stesso numero
else if (pcNumber === userNumber) {
  console.log("Pareggio");
  alert("Pareggio");
}
