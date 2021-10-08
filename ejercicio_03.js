// Ejercicio 03
// Escribir un programa que dado un número N
// Devuelve la suma de los números pares menores que o iguales a N
// Ejemplos:
//   Si N = 7, devuelve la suma 2 + 4 + 6
//   Si N = 8, devuelve la suma 2 + 4 + 6 + 8

const N = 6;
let  resultado = 0

// Aquí tu programa
for(let i = 0; i <= N; i++){
    if( i % 2 == 0 ){
        resultado += i;
    }
}

console.log("El resultado de sumar los pares hasta " + N + " es " + resultado);
