function Persona(nombre, edad)
{this.nombre = nombre;
this.edad = edad}

let personas=[]

Persona.agregar= function(nombre,edad)
{let persona= new Persona(nombre,edad);
    personas.push(persona);
    console.log("Persona agregada:", persona);
};

Persona.obtenerTodas= function()
{console.log("Personas:", personas);
return personas;};

Persona.obtenerPorNombre= function(nombre)
{let personaEncontrada= personas.find(persona=>persona.nombre === nombre);
console.log("Persona encontrada:", personaEncontrada);
return personaEncontrada;};

Persona.filtrarPorEdad= function(edad)
{let personasFiltradas= personas.filter(persona=>persona.edad>=edad);
console.log("Personas filtradas:", personasFiltradas);
return personasFiltradas;};

let nombre = prompt("Ingrese el nombre de la persona:");

let edad = parseInt(prompt("Ingrese la edad de la persona:"));
Persona.agregar(nombre, edad);

let opcion = prompt("¿Qué desea hacer? (1) Obtener todas las personas, (2) Obtener persona por nombre, (3) Filtrar por edad:");
switch (opcion) {
case "1":Persona.obtenerTodas();
break;
case "2": let nombreBuscar = prompt("Ingrese el nombre de la persona a buscar:");
Persona.obtenerPorNombre(nombreBuscar);
break;
case "3": let edadFiltrar = parseInt(prompt("Ingrese la edad para filtrar personas mayores o iguales a esa edad:"));
Persona.filtrarPorEdad(edadFiltrar);
break;

default:
console.log("Opción no válida.");
}