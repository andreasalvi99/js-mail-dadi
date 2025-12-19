// ? Prima di tutto creo un array contenente alcune mail random
// ? Queste sono le mail degli invitati all'evento
const mails = [
  "vateyeiyoike-3792@yopmail.com",
  "brukennavoija-9080@yopmail.com",
  "quannowouyoummei-3299@yopmail.com",
  "guffoimuwoilla-9729@yopmail.com",
  "briquadetouma-5131@yopmail.com",
  "leuttasofruxu-7488@yopmail.com",
  "kicabrevauno-8082@yopmail.com",
  "deifoubrecrefrou-3526@yopmail.com",
];

// ? Chiedo all'utente di inserire la sua mail
const userMail = prompt("Inserisci il tuo indirizzo email...");
console.log("userMail:", userMail);

let userMailCheck = false; // ? Definisco una variabile switch con valore falso

// ? Effettuo un controllo per verificare che la mail inserita dall'utente corrisponda a una di quelle in elenco
for (let i = 0; i < mails.length; i++) {
  currentMail = mails[i]; // ? Per covnenienza rinomino i singoli items dell'array
  console.log(currentMail);

  // ? SE la mail dell'user corrisponde a una di quelle nell'array
  if (userMail === currentMail) {
    userMailCheck = true; // ? Faccio lo switch della variabile
    console.log(userMailCheck);
  }
}

// ? SE la variabile è vera
if (userMailCheck === true) {
  alert("Benvenuto, procedi per accedere al gioco");

  // ? ALTRIMENTI
} else {
  alert("Spiacenti, l'indirizzo email non è valido");
}
