// Variabile fissa
var pswEnding = '21';

// Recuperiamo i dati dell'utente
var firstName = prompt('What is your first name?', 'Thomas');
var lastName = prompt('What is your last name?', 'Edison');
var favColour = prompt('What is your favourite colour?', 'Red');

// Password generata dagli input dell'utente
var generatedPsw = firstName + lastName + favColour + pswEnding;

// Creiamo una variabile per recuperare l'elemento HTML
var passwordPlacheholder = document.getElementById('password');

// Inseriamo la password generata nell'elemento HTML selezionato
passwordPlacheholder.innerHTML = generatedPsw;

// console.log(firstName);
// console.log(lastName);
// console.log(favColour);
// console.log(generatedPsw);