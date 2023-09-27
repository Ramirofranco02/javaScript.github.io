// Obtén una referencia al botón y al elemento donde mostrar el número
var generarNumeroButton = document.getElementById('generarNumero');
var resultadoElement = document.getElementById('resultado');
var miBoton = document.getElementById('miBoton');

// Función para generar y mostrar un número aleatorio
function generarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
    resultadoElement.textContent = 'Número Aleatorio: ' + numeroAleatorio;
    console.log(resultadoElement);
}

// Agrega un evento de clic al botón para generar números aleatorios
generarNumeroButton.addEventListener('click', generarNumeroAleatorio);

