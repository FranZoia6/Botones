// Obtener los elementos del DOM
const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');
const contadorRojo = document.getElementById('contadorRojo');
const contadorAzul = document.getElementById('contadorAzul');

// Inicializar los contadores
let countRojo = 0;
let countAzul = 0;

// Funciones para aumentar los contadores
btnRojo.addEventListener('click', () => {
    countRojo++;
    contadorRojo.textContent = countRojo;
});

btnAzul.addEventListener('click', () => {
    countAzul++;
    contadorAzul.textContent = countAzul;
});
