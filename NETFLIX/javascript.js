document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto de cambio de color del encabezado al hacer scroll
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        // Añade o quita la clase 'scrolled' según la posición de scroll vertical
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Inyección de Posters de Películas/Series
    const POSTERS_DATA = [
        // Usamos un placeholder para simular las imágenes de las películas
        { id: 1, title: "Película 1", image: 'https://via.placeholder.com/250x140/800000/ffffff?text=Poster+1' },
        { id: 2, title: "Película 2", image: 'https://via.placeholder.com/250x140/004d40/ffffff?text=Poster+2' },
        { id: 3, title: "Película 3", image: 'https://via.placeholder.com/250x140/0d47a1/ffffff?text=Poster+3' },
        { id: 4, title: "Película 4", image: 'https://via.placeholder.com/250x140/311b92/ffffff?text=Poster+4' },
        { id: 5, title: "Película 5", image: 'https://via.placeholder.com/250x140/4e342e/ffffff?text=Poster+5' },
        { id: 6, title: "Película 6", image: 'https://via.placeholder.com/250x140/ff6f00/ffffff?text=Poster+6' },
        { id: 7, title: "Película 7", image: 'https://via.placeholder.com/250x140/1b5e20/ffffff?text=Poster+7' },
        { id: 8, title: "Película 8", image: 'https://via.placeholder.com/250x140/bf360c/ffffff?text=Poster+8' },
        { id: 9, title: "Película 9", image: 'https://via.placeholder.com/250x140/4a148c/ffffff?text=Poster+9' },
        { id: 10, title: "Película 10", image: 'https://via.placeholder.com/250x140/006064/ffffff?text=Poster+10' }
    ];

    function renderPosters(rowId, data) {
        const rowElement = document.querySelector(`#${rowId} .row-posters`);
        if (!rowElement) return;

        // Limpia el contenido antes de añadir nuevos posters (por si acaso)
        rowElement.innerHTML = ''; 

        // Crea el HTML para cada poster en el array de datos
        data.forEach(item => {
            const posterHTML = `
                <div class="poster" title="${item.title}">
                    <img src="${item.image}" alt="${item.title}">
                </div>
            `;
            // Añade el poster al elemento de la fila
            rowElement.insertAdjacentHTML('beforeend', posterHTML);
        });
    }

    // Llama a la función para poblar las filas
    renderPosters('row-tendencias', POSTERS_DATA);
    // Usa los mismos datos (o unos nuevos si los tuvieras) para la segunda fila
    renderPosters('row-comedias', POSTERS_DATA); 
    
    // NOTA: Para una versión más completa, implementarías 
    // la navegación con flechas (prev/next) para los carruseles.

});