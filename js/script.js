document.addEventListener("DOMContentLoaded", () => {
    const comidasContainer = document.getElementById("comidas-container");

    const comidas = [
        { nombre: "Asado", descripcion: "Carne a la parrilla" },
        { nombre: "Empanadas", descripcion: "Masa rellena de carne, pollo o verduras" },
        { nombre: "Milanesa", descripcion: "Carne empanada y frita" },
        { nombre: "Locro", descripcion: "Guiso de maíz, carne y verduras" },
        { nombre: "Pastel de papas", descripcion: "Carne molida con pure de papas" },
        { nombre: "Fideos con tuco", descripcion: "Fideos con base de huevo acompañados de salsa de tomate" },
        { nombre: "Bifes a la riojana", descripcion: "Carne saltada con verduras" },
        { nombre: "Arroz con pollo", descripcion: "Arroz salteado con verduas y pata muslo" },
        { nombre: "Tamal", descripcion: "Masa de maiz rellena de pollo o carne, envuelta en hoja de maiz" },
        { nombre: "Escalopes", descripcion: "Empanado de harina con carne o pollo frito" },
        { nombre: "Papas fritas", descripcion: "Papas cortadas finamente, fritas en aceite de girasol" },
        { nombre: "Pizza", descripcion: "Masa de harina con queso muzzarella y salsa de tomate" },
        
        // Agrega más comidas típicas
    ];

    const renderComidas = () => {
        comidas.forEach(comida => {
            const card = document.createElement('div');
            card.className = 'card col-md-4 mb-4';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${comida.nombre}</h5>
                    <p class="card-text">${comida.descripcion}</p>
                </div>
            `;
            comidasContainer.appendChild(card);
        });
    };

    // Llama a la función para renderizar las comidas
    renderComidas();
});
