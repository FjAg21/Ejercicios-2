// Ejercicio 02
// Escribir un programa que dado un número N
// Devuelve la suma de los números 1^2 + 2^2 + ... + N^2
// (los N primeros cuadrados)

let N = 5;

// Aquí tu programa

let resultado = 0;
// Aquí tu programa

for( let i = N; i > 0; i--){
    resultado += Math.pow(i, 2)

}
console.log("El resultado de sumar los " + N + " primeros cuadrados es " + resultado);



