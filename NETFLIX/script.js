document.addEventListener('DOMContentLoaded', () => {

    // 1. Elementos DOM (Acceso rápido a los elementos clave)
    const header = document.getElementById('main-header');
    const heroBanner = document.querySelector('.hero-banner');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');

    // 2. Efecto de cambio de color del encabezado al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Datos de los Posters (Hemos añadido 'description' para usarla en el banner)
    const POSTERS_DATA = [
        // Usa imágenes reales aquí o las que quieras para el fondo
        { id: 1, title: "El Guerrero Solitario", image: 'https://raw.githubusercontent.com/GohanF14/HTML/main/FOTOS/Fotos Dash/FLORES PRIMAVERA.png', desc: "Un héroe busca venganza en un mundo post-apocalíptico." },
        { id: 2, title: "Misterio Urbano", image: 'https://raw.githubusercontent.com/GohanF14/HTML/main/FOTOS/Fotos Dash/ARBOL CORAZONES.png', desc: "Una detective desentraña una red de secretos en la gran ciudad." },
        { id: 3, title: "La Gran Comedia", image: 'https://raw.githubusercontent.com/GohanF14/HTML/main/FOTOS/Fotos Dash/THOSE EYES.jpg', desc: "Dos amigos se embarcan en el viaje más ridículo de sus vidas." },
        { id: 4, title: "Viaje Estelar", image: 'https://via.placeholder.com/250x140/311b92/ffffff?text=Poster+4', desc: "La humanidad se aventura a lo desconocido en busca de un nuevo hogar." },
        { id: 5, title: "Documental Histórico", image: 'https://via.placeholder.com/250x140/4e342e/ffffff?text=Poster+5', desc: "Explorando los eventos que cambiaron el curso de la historia moderna." },
        { id: 6, title: "Acción Total", image: 'https://via.placeholder.com/250x140/ff6f00/ffffff?text=Poster+6', desc: "Peleas, explosiones y persecuciones de alta velocidad sin parar." },
        { id: 7, title: "Fantasía Épica", image: 'https://via.placeholder.com/250x140/1b5e20/ffffff?text=Poster+7', desc: "Reinos en guerra, magia antigua y la lucha por la corona." },
        { id: 8, title: "Terror Psicológico", image: 'https://via.placeholder.com/250x140/bf360c/ffffff?text=Poster+8', desc: "Lo que ves no es real. Una película que juega con tu mente." },
        { id: 9, title: "Romance Clásico", image: 'https://via.placeholder.com/250x140/4a148c/ffffff?text=Poster+9', desc: "Un amor improbable florece en medio de grandes adversidades." },
        { id: 10, title: "Ciencia Ficción", image: 'https://via.placeholder.com/250x140/006064/ffffff?text=Poster+10', desc: "Robots, inteligencia artificial y el futuro de la tecnología." }
    ];

    // 4. Función para actualizar el Banner Principal (MODIFICADA)
    function updateHeroBanner(item) {
        // Mantenemos el degradado que oscurece el lado izquierdo (donde está el texto)
        // y le inyectamos la nueva URL de la imagen.
        heroBanner.style.backgroundImage = `
            linear-gradient(to right, rgba(20, 20, 20, 1) 10%, rgba(20, 20, 20, 0.7) 40%, rgba(20, 20, 20, 0) 100%),
            url('${item.image}')
        `; 
        
        // 2. Cambia el título y la descripción
        heroTitle.textContent = item.title;
        heroDescription.textContent = item.desc;
        
        // Opcional: Desplazar la página hacia arriba para ver el banner
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 5. Función para renderizar los Posters y añadir el evento click
    function renderPosters(rowId, data) {
        const rowElement = document.querySelector(`#${rowId} .row-posters`);
        
        if (!rowElement) {
            console.error(`Error: No se encontró el elemento con el selector #${rowId} .row-posters`);
            return;
        }
        console.log(`Renderizando posters en: ${rowId}`);

        data.forEach(item => {
            const posterHTML = `
                <div class="poster" 
                     data-id="${item.id}"
                     data-title="${item.title}"
                     data-image="${item.image}"
                     data-desc="${item.desc}"
                     title="${item.title}">
                    <img src="${item.image}" alt="${item.title}">
                </div>
            `;
            rowElement.insertAdjacentHTML('beforeend', posterHTML);
        });

        // 6. Añadir el evento click a cada poster
        rowElement.querySelectorAll('.poster').forEach(poster => {
            poster.addEventListener('click', (event) => {
                // Obtenemos los datos directamente del elemento (data-atributos)
                const selectedItem = {
                    title: poster.dataset.title,
                    image: poster.dataset.image,
                    desc: poster.dataset.desc
                };
                updateHeroBanner(selectedItem);
            });
        });
    }

    // Llama a la función para poblar las filas
    renderPosters('row-tendencias', POSTERS_DATA);
    renderPosters('row-comedias', POSTERS_DATA);
    
    // Configurar la película destacada inicial
    updateHeroBanner(POSTERS_DATA[0]);
});