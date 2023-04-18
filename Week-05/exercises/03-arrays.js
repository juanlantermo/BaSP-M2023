console.log('Bloque 3: Arrays');
/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('Ejercicio: 3) a)');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('Ejercicio: 3) b)');

months.sort();
console.log(months);

/*c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('Ejercicio: 3) c)');

months.push('osvaldo');
months.unshift('isabel');
console.log(months);

/*d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log('Ejercicio: 3) d)');

months.pop();
months.shift();
console.log(months);

/* e) Invertir el orden del array (utilizar reverse).*/
console.log('Ejercicio: 3) e)');

months.reverse();
console.log(months);
/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log('Ejercicio: 3) f)');

monthsToString = months.join('-');
console.log(monthsToString);

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('Ejercicio: 3) g)');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
copyOfMonths = months.slice(4, 11);

console.log(copyOfMonths);