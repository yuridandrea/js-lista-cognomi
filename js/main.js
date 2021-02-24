var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var nuovoCognome = prompt("inserisci il tuo cognome");
cognomi.push(nuovoCognome);

// cognomi.sort(function(a, b){
//   if(a.firstname < b.firstname) { return -1; }
//   if(a.firstname > b.firstname) { return 1; }
//   return 0;
// })

var cognomiOrdinati = cognomi.sort();
console.log(cognomiOrdinati);

console.log(cognomi.indexOf(nuovoCognome) + 1);