// Actividad "Sumar 2 arreglos"
/*  -Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo 
    -El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario */ 

import * as fs from "readline-sync";

// Cargar los arreglos desde el usuario
const arreglo1 = cargarArreglo('Ingrese los numeros para el primer arreglo: ');
const arreglo2 = cargarArreglo('\nIngrese los numeros para el segundo arreglo: ');

function cargarArreglo(mensaje: string): number[] {
    const arreglo: number[] = [];
    console.log(mensaje);
    for (let i = 0; i < 6; i++) {
        const numero = fs.questionInt(`Ingrese el numero ${i + 1}: `);
        arreglo.push(numero);
    }
    return arreglo;
}

function sumarArreglos(arr1: number[], arr2: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        resultado.push(arr1[i] + arr2[i]);
    }
    return resultado;
}

// Sumar los dos arreglos
const resultadoSuma = sumarArreglos(arreglo1, arreglo2);

// Mostrar el resultado
console.log(`El resultado de la suma de los arreglos es: ${resultadoSuma}`);
console.log(`El resultado de la suma de los arreglos es: ${resultadoSuma}`);