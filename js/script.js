
document.getElementById("mostrarButton").addEventListener("click", function() {
    let numeroIngresado = parseInt(document.getElementById("numeroInput").value);
    let resultado = "";

    if (isNaN(numeroIngresado)) {
        resultado = "Por favor, ingrese un número válido.";
    } else {
        for (var i = 2; i <= numeroIngresado; i += 2) {
            resultado += i + " ";
        }

        if (resultado === "") {
            resultado = "No hay números pares en el rango especificado.";
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
});

