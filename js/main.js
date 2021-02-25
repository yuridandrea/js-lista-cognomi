var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var nuovoCognome = prompt("inserisci il tuo cognome");
nuovoCognome = nuovoCognome.charAt(0).toUpperCase() + nuovoCognome.slice(1).toLowerCase();
cognomi.push(nuovoCognome);
console.log(nuovoCognome);


var cognomiOrdinati = cognomi.sort();
console.log(cognomiOrdinati);

console.log(cognomi.indexOf(nuovoCognome) + 1);