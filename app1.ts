import * as fs from "readline-sync";

//Arreglo de letras
const letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'Y', 'J'];

console.log("El arreglo de letras contiene: ", letras);

//Arreglo con nombres de tamaño 5
const nombres:string[] = ['Juan', 'Lucas', 'Mateo', 'Maria', 'Julieta'];

let nombreDeUsuario: string = fs.question("Ingrese su nombre por favor: ");

//¿El nombre esta en el arreglo?
if (nombreDeUsuario && nombres.includes(nombreDeUsuario)) {
    console.log(`\nEl nombre ${nombreDeUsuario} esta en el arreglo. 😁`);
} else {
    console.log(`\nEl nombre ${nombreDeUsuario} no se encuentra en el arreglo. 😔`);
    nombres.push(nombreDeUsuario);
    console.log(`\nEl nombre ${nombreDeUsuario} no se encontraba pero ha sido añadido. 👌`);
}

//Mostramos el arreglo
console.log("\nLos nombres en el arreglo son: ", nombres);
