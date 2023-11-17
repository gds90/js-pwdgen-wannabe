let nome = prompt('Inserisci il tuo nome:')
let surname = prompt('Inserisci il tuo cognome:')
let fav_color = prompt('Inserisci il tuo colore preferito:')
let password = `${nome}${surname}${fav_color}23`;
document.getElementById('passw').innerHTML = password;