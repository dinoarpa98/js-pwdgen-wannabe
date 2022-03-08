const nome = prompt("Inserisci il tuo nome");
console.log(nome);


const surname = prompt("Inserisci il tuo cognome")
console.log(surname)

const color = prompt("Inserisci Colore preferito");
console.log(color)
document.getElementById("contenitore_target").innerHTML = ` la tua password è ${nome}${surname}${color}21 `;