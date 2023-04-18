console.log('Bloque 2: Strings');
/*a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('Ejercicio: 2) a)');

var longWord, longWordToUpper;
longWord = 'Unimaginatively';
longWordToUpper = longWord.toUpperCase();

console.log(longWordToUpper);

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/
console.log('Ejercicio: 2) b)');

var anotherLongWord = 'Uncopyrightable';
var cutLongWord = anotherLongWord.substring(0,5);

console.log(cutLongWord);
/*c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/
console.log('Ejercicio: 2) c)');

var moreLongWords = 'Incomprehensibilities'
var resultLongWord = moreLongWords.substring(moreLongWords.length - 3);

console.log(resultLongWord);

/*d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado 
en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Ejercicio: 2) d)');

var wordToModify = 'supercalifragilisticexpialidocious';

var wordToModifyToLower = wordToModify.toLowerCase();
var firstLetter = wordToModifyToLower.substring(0,1);
var firstLetter = firstLetter.toUpperCase();
var finalOfWord = wordToModifyToLower.substring(1);

console.log(firstLetter + finalOfWord);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable
(utilizar indexOf).*/
console.log('Ejercicio: 2) e)');

var lookTheSpace = 'Im going to look for the first space'
var indexOfSpace = lookTheSpace.indexOf(' ');

console.log(indexOfSpace);

/*f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Ejercicio: 2) f)');

var theWords = 'BECOME DEVELOPER';

var firstSpace = theWords.indexOf(' ');
var firstWord = theWords.substring(0, firstSpace);
var firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();

var secondWord = theWords.substring(firstSpace + 1);
secondWord = secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();
var newWords = firstWord + " " + secondWord;
console.log(newWords);
