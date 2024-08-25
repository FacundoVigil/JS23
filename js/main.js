function mostrarMensaje(repetir) {
    let i = 0;
    while (i < repetir) {
        console.log("Hola, " + nombre + "!");
        i++;}
}
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "!");

let edad = prompt("¿Cuántos años tenes?");
let esMayorDeEdad = edad >= 18;

if (edad >= 18) {
    alert("Eres mayor de edad");
} else if (edad >= 13 && edad < 18) {
    alert("Eres adolescente");
} else {
    alert("Eres menor de edad");
}

if (esMayorDeEdad) {
    alert("Tenes acceso a contenido exclusivo para mayores de edad");
} else {
    alert("No tenes acceso a contenido exclusivo para mayores de edad");
}

mostrarMensaje(3);

console.log("Es mayor de edad: " + esMayorDeEdad);
