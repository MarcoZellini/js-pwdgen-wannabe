/*
    Descrizione problema:
    Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
    che va formattato in questo modo: nomecognomecolorepreferito23 
    Esempio: fabiopacificiblue23

    Strumenti:
        prompt
        const
        getElementById
        console.log

    Pseudo Codice:
        - Richiedo all'utente il suo nome
        - Richiedo all'utente il suo cognome
        - Richiedo all'utente il suo colore preferito
        - Concateno le stringhe aggiungendo '23' alla fine
        - Scrivo in console la password generata
        - Scrivo in pagina la password generata
*/

const userName = prompt("Inserisci il tuo nome: ");
const userSurname = prompt("Inserisci il tuo cognome: ");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito: ");
const passwordElement = document.getElementById('password');

const password = `${userName}${userSurname}${userFavoriteColor}23`

console.log(password);
passwordElement.innerHTML = `La tua nuova password è: <strong>${password}</strong>`;




