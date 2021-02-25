// richiesta nome
var nome = prompt('Qual è il tuo nome?');
document.getElementById('nome').innerHTML = nome;

// richiesta cognome
var cognome = prompt('Qual è il tuo cognome?');
document.getElementById('cognome').innerHTML = cognome;

// richiesta colore preferito
var colore = prompt('Qual è il tuo colore preferito?');

// generazione password
document.getElementById('password').innerHTML = nome + cognome + colore + "27";
