// Valores predefinidos
const nombreUsuario = "Luis Huaman";
const descripUsuario = "Este es un párrafo de ejemplo.";

// Seleccionar el contenedor por su ID
const contenido = document.getElementById("text-contenido");

// Crear el h1 y el p
const h1 = document.createElement("h1");
h1.textContent = nombreUsuario;

const p = document.createElement("p");
p.textContent = descripUsuario;

// Agregar los elementos al contenedor
contenido.appendChild(h1);
contenido.appendChild(p);

/*const nombreUsuario = prompt("¡Hola! Ingresa tu nombre");
const descripUsuario = prompt("Ingresa una descripción");

// Validar y asignar solo si hay contenido en nombreUsuario
if (nombreUsuario && nombreUsuario.trim() !== "") {
    document.getElementById("nombredeUsuario").textContent = `¡Hola, ${nombreUsuario.trim()}!`;
}

// Validar y asignar solo si hay contenido en descripUsuario
if (descripUsuario && descripUsuario.trim() !== "") {
    document.getElementById("desUsuario").textContent = descripUsuario.trim();
}*/

