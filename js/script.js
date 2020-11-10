var nome = prompt("Qual è il tuo nome?");
console.log(nome);

var cognome = prompt("Qual è il tuo cognome?")
console.log(cognome);

var colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

var password = nome + cognome + colore + 19;
console.log(password);


document.getElementById("nome").innerHTML = nome;

document.getElementById("cognome").innerHTML = cognome;

document.getElementById("colore").innerHTML = colore;

document.getElementById("password").innerHTML = password;
