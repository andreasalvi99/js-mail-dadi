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

// ? Effettuo un controllo per verificare che la mail inserita dall'utente corrisponda a una di quelle in elenco
for (let i = 0; i < mails.length; i++) {
  currentMail = mails[i]; // ? Per covnenienza rinomino i singoli items dell'array

  // ? SE la mail dell'user corrisponde a una di quelle nell'array
  if (userMail === currentMail) {
    console.log("Benvenuto!!"); // ? Stampo il messaggio di benvenuto (esito positivo)
  }

  // ? ALTRIMENTI, informo l'utente che l'indirizzo non è presente
  else {
    console.log(
      "Spiacente, il tuo indirizzo email non risulta essere tra quelli autorizzati" // ? Stampo il messaggio di accesso negato (esito negativo)
    );
  }
}
