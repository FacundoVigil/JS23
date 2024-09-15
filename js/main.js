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