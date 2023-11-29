document.addEventListener("DOMContentLoaded", () => {
    const comidasContainer = document.getElementById("comidas-container");
    const filtroSelect = document.getElementById("filtro");

    let comidas = [
        { nombre: "Asado", descripcion: "Carne a la parrilla", imagen: "images/asado-mendoza-scaled.jpeg", tipo: "carne" },
        { nombre: "Fideos con tuco", descripcion: "Spaghetti con salsa de tomate", imagen: "images/fideos con tuco.jpg", tipo: "pasta" },
        { nombre: "Locro", descripcion: "El locro es un guiso tradicional de la gastronomía argentina", imagen: "images/locro.JPG", tipo: "casera" },
        { nombre: "Empanadas", descripcion: "consiste en una masa rellena con una mezcla sabrosa de carne picada", imagen: "images/emppino-56a8a5fe3df78cf7729f65e6.jpg", tipo: "casera" },
        { nombre: "Tamal", descripcion: "en una hoja de maíz, conocida como masa, rellena ", imagen: "images/Recipes_for_Tamales.jpg", tipo: "casera" },
        { nombre: "Bifes a la riojana", descripcion: "preparación a la riojana implica cocinar la carne con una mezcla de verduras ", imagen: "images/bife-de-res-a-la-riojana.jpeg", tipo: "carne" },
        { nombre: "Pizza", descripcion: "Masa con tomate y una rica muzzarella", imagen: "images/pizza.jpg", tipo: "casera" },
        { nombre: "Pastel de papas", descripcion: "carne molida con verdas y pure de papas", imagen: "images/pastel-de-papa-e1457906260700.jpg", tipo: "carne" },
        { nombre: "Milanesa", descripcion: "carne empanada con pan rallado, frita ", imagen: "images/milanesas.jpg", tipo: "carne" },
        { nombre: "Papas fritas", descripcion: "papas cortadas en bastones, fritas ", imagen: "images/papas fritas.jpg", tipo: "casera" },
        { nombre: "Arroz con pollo", descripcion: "arroz con pollo y verduras", imagen: "images/hispanic-cuisine--arroz-con-pollo-in-pan--horizontal-top-view-602328680-5a9d40e0c5542e00365cdf8a.jpg", tipo: "casera" },
        { nombre: "Sorrentinos", descripcion: "masa de huevo y harina rellena", imagen: "images/DSC04319.JPG.crdownload", tipo: "pasta" },
        { nombre: "Ñoquis", descripcion: "masa hecha a base de papa", imagen: "images/noquis-786216.jpg", tipo: "pasta" },
        { nombre: "Canelones", descripcion: "masa de rellena", imagen: "images/Canelones_WEB_OK_33_2.1.132_1214X2164.jpeg.crdownload", tipo: "pasta" },
        // Agrega más comidas según sea necesario

    ];


    // Renderiza las comidas al cargar la página
    renderComidas();

    // Agrega un evento de cambio al select para filtrar las comidas
    filtroSelect.addEventListener("change", () => {
        const filtro = filtroSelect.value;

        // Filtra las comidas según la selección
        const comidasFiltradas = (filtro === "todos") ? comidas : comidas.filter(comida => comida.tipo === filtro);

        // Renderiza las comidas filtradas
        renderComidas(comidasFiltradas);
    });

    function renderComidas(comidasArray = comidas) {
        // Limpia el contenedor antes de renderizar
        comidasContainer.innerHTML = '';

        comidasArray.forEach(comida => {
            const card = document.createElement('div');
            card.className = 'card col-md-4 mb-4';
            card.innerHTML = `
                <img src="${comida.imagen}" alt="${comida.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${comida.nombre}</h5>
                    <p class="card-text">${comida.descripcion}</p>
                </div>
            `;
            comidasContainer.appendChild(card);
        });
    }
});