/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
    [4,7,9,3,1,45,67,23,29,78,11,16]

- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola

- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar */

const arregloNumeros: number [] = [4,7,9,3,1,45,67,23,29,78,11,16,100];
const numeroMayor = encontrarNumMayor(arregloNumeros);

function encontrarNumMayor(arregloNumeros: number[]): number {
    let mayor = arregloNumeros[0];
    for (let i = 1; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > mayor){
            mayor = arregloNumeros[i];
        }
    }
    return mayor;
}

function esParOImpar(num: number): void {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
}

console.log(`El número más grande es: ${numeroMayor}`);
esParOImpar(numeroMayor);