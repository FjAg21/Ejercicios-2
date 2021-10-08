// Ejercicio 01
// Escribir un programa que dado un número N
// Devuelve la suma de los números 1 + 2 + ... + N

const N = 5

let resultado = 0;
// Aquí tu programa

for( let i = N; i > 0; i--){
    resultado += i;

}

console.log("El resultado de sumar los " + N + " primeros números es " + resultado);