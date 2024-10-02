/*Actividad 3
    Almacene en un arreglo de tamaño N los números ingresados por el usuario
        • La dimensión N también es ingresada por el usuario.
        • Muestre los números del arreglo pero del último al primero.
*/

import * as fs from "readline-sync";

function mostrarNumerosInverso() {
    const tamañoDelArreglo = fs.questionInt("Ingrese el tamaño del arreglo: ");
    let arr:number[] = [];

    for(let i = 0; i < tamañoDelArreglo; i++){
        const numerosUsuarios = fs.questionInt(`Ingrese el numero ${i + 1}: `)
        arr.push(numerosUsuarios);
    }

    console.log("Ahora invertimos la posicion de los numeros ingresados: ");
    //Recorro el arreglo de forma inversa, desde en la ultima posicion a la primera
    for(let i = tamañoDelArreglo - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

mostrarNumerosInverso();