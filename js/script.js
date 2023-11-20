// creo la variabile contenente il nome inserito dall'utente
let nome = prompt('Inserisci il tuo nome:');

// creo la variabile contenente il cognome inserito dall'utente
let surname = prompt('Inserisci il tuo cognome:');

// creo la variabile contenente il colore preferito inserito dall'utente
let fav_color = prompt('Inserisci il tuo colore preferito:');

// generazione della password
let password = `${nome}${surname}${fav_color}23`;

// inserisco la password generata nell'elemento HTML con id #passw tramite la proprietà innerHTML
document.getElementById('passw').innerHTML = password;
