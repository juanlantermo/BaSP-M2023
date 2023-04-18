console.log('Bloque 6: Funciones')
/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.*/
console.log('Ejercicio 6) a)');

var  num1, num2,result,newResult;

function sumar(num1,num2) {
    return num1 + num2;
}
result = sumar(23,37);

console.log(result);

/* b) Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que
uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
console.log('Ejercicio 6) b)');

function sumar(num1,num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        alert('some of the data entered are not numbers');
        return NaN;}
        else {
        return num1 + num2;
        }
}
newResult = sumar(452,28);
console.log(newResult);

/* 3) Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.*/
console.log('Ejercicio 6) c)');

function validateInteger(num) {
    if(num % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(validateInteger(47));

/*d) Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que
haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/
console.log('Ejercicio 6) d)');


function sumarValidate(num1,num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
        alert("some of the data entered are not numbers");
        return NaN;}
        else if (!validateInteger(num1)) {
            num1 = Math.round(num1);
            alert("The number entered was not an integer"+" "+ num1);
        }else if(!validateInteger(num2)){
            num2 = Math.round(num2);
            alert("The number entered was not an integer"+" "+ num2);
        }
        var otherResult=num1+num2;
        return otherResult;
    }
console.log(sumarValidate(3.8,4));

/* e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.*/
console.log('Ejercicio 6) e)');

function verifyNumber(num){
    if(typeof num != 'number') {
            alert("some of the data entered are not numbers");
            return NaN;
        } else {
        return true;
        }
}
function verifyInteger(num){
    if(!validateInteger(num)) {
        num = Math.round(num)
        alert("The number entered was not an integer" + " " +num);
        return num;
    } else {
        return num;
        }
    }

function numberAndInteger(num){
    if(verifyNumber(num)) {
        return verifyInteger(num);
        } else {
            return NaN;
    }
}
function finalSum(num1, num2){
    var summableNum1=numberAndInteger(num1);
    var summableNum2=numberAndInteger(num2);
    return summableNum1 + summableNum2;
}
console.log(finalSum(45.2,13));

