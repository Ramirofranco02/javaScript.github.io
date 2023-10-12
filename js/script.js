
// Definir una lista de películas por género
const peliculas = {
    "Acción": ["Mad Max: Fury Road", "John Wick", "Die Hard"],
    "Comedia": ["Superbad", "The Hangover", "Anchorman"],
    "Drama": ["The Shawshank Redemption", "Forrest Gump", "The Godfather"],
    "Ciencia Ficción": ["Blade Runner", "The Matrix", "Inception"],
    "Aventura": ["Indiana Jones and the Last Crusade", "Pirates of the Caribbean", "Jurassic Park"]
};

// Obtener elementos del DOM
const genreSelect = document.getElementById("genre");
const searchButton = document.getElementById("searchButton");
const resultDiv = document.getElementById("result");

// Función para buscar películas por género con animación de desvanecimiento
function buscarPeliculas() {
    const selectedGenre = genreSelect.value;
    const peliculasEnEseGenero = peliculas[selectedGenre];

    if (peliculasEnEseGenero) {
        let resultado = "<h2>Películas en " + selectedGenre + ":</h2>";

        // Copia y mezcla el array de películas al azar
        const peliculasAleatorias = [...peliculasEnEseGenero];
        for (let i = peliculasAleatorias.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [peliculasAleatorias[i], peliculasAleatorias[j]] = [peliculasAleatorias[j], peliculasAleatorias[i]];
        }

        resultado += "<ul>";

        peliculasAleatorias.forEach((pelicula) => {
            resultado += "<li style='display: none;'>" + pelicula + "</li>";
        });

        resultado += "</ul>";
        resultDiv.innerHTML = resultado;

        // Aplicar animación de desvanecimiento
        const listaPeliculas = resultDiv.querySelectorAll("li");
        let delay = 0;
        listaPeliculas.forEach((pelicula, index) => {
            setTimeout(() => {
                pelicula.style.display = "block";
                pelicula.style.opacity = "0";
                pelicula.style.transition = "opacity 0.5s";
                setTimeout(() => {
                    pelicula.style.opacity = "1";
                }, 10);
            }, delay);
            delay += 300; // Añade un pequeño retraso para cada elemento de la lista
        });
    } else {
        resultDiv.innerHTML = "<p>No se encontraron películas en ese género.</p>";
    }
}

// Agregar un manejador de eventos al botón de búsqueda
searchButton.addEventListener("click", buscarPeliculas);


