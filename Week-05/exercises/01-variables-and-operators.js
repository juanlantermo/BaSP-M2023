console.log('Bloque 1: Variables y Operadores');
/*a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la 
 suma de ambos números en una 3er variable.*/
console.log('Ejercicio 1) a)');

var num1, num2, suma;
num1 = 10;
num2 = 8;
suma = num1 + num2;

console.log(suma);
// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('Ejercicio 1) b)');

var text1, text2, response;
text1 = 'Hello';
text2 = 'world!';
response = text1 +" "+ text2;

console.log(response);
// c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
console.log('Ejercicio 1) c)');

var text3, text4;
text3 = 'storm';
text4 = 'strong';
calculateWords = text3.length + text4.length;

console.log(calculateWords);