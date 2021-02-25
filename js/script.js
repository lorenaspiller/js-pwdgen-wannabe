// richiesta nome
var nome = prompt('Ciao! \nPronto a generare una password sicurissima? \nRispondi a queste domande! \nQual è il tuo nome?');
document.getElementById('nome').innerHTML = nome;

// richiesta cognome
var cognome = prompt('Bene, ' + nome + ', qual è il tuo cognome?');
document.getElementById('cognome').innerHTML = cognome;

// richiesta colore preferito
var colore = prompt('Ottimo ' + nome + ' ' + cognome + '! Qual è il tuo colore preferito?');

// generazione password
document.getElementById('password').innerHTML = nome + cognome + colore + "27";
