/* Tipos de Números en Arreglo
    Actividad:
        • Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
        • Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay.
*/

import * as fs from "readline-sync";

function clasificarNumeros() {
    const tamañoDelArreglo = fs.questionInt("Ingrese el tamaño del arreglo: ");
    let arr:number[] = [];
    let positivos = 0, negativos = 0, ceros = 0;

    for(let i = 0; i < tamañoDelArreglo; i++){
        const numerosUsuarios = fs.questionInt(`Ingrese el numero ${i + 1}: `)
        arr.push(numerosUsuarios);

        if (numerosUsuarios > 0) {
            positivos++;
        } else if (numerosUsuarios < 0) {
            negativos++;
        } else ceros++;
    }

    console.log(`Números positivos: ${positivos}`);
    console.log(`Números negativos: ${negativos}`);
    console.log(`Ceros: ${ceros}`);
}

clasificarNumeros();