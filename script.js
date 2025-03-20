// Base de datos de películas (simulada)
const moviesDB = {
    "Dune: Parte Dos": {
        year: 2023,
        duration: "2h 46m",
        rating: 8.6,
        genre: "Ciencia Ficción, Aventura",
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin",
        description: "Paul Atreides se une a los Fremen y comienza un viaje espiritual y político para vengar la traición contra su familia, mientras intenta prevenir un terrible futuro que solo él puede prever.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Dune+Part+Two",
        similar: ["Oppenheimer", "Blade Runner 2049", "Arrival", "Interstellar"]
    },
    "Oppenheimer": {
        year: 2023,
        duration: "3h 00m",
        rating: 8.5,
        genre: "Drama Histórico, Biografía",
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
        description: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Oppenheimer",
        similar: ["Dune: Parte Dos", "Interstellar", "Tenet", "Dunkirk"]
    },
    "Barbie": {
        year: 2023,
        duration: "1h 54m",
        rating: 7.9,
        genre: "Comedia, Fantasía",
        director: "Greta Gerwig",
        cast: "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon",
        description: "Barbie y Ken disfrutan de una vida perfecta en el colorido y aparentemente utópico mundo de Barbie Land. Sin embargo, cuando tienen la oportunidad de ir al mundo real, descubren las alegrías y peligros de vivir entre los humanos.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Barbie",
        similar: ["Wonka", "Pobres Criaturas", "The Marvels", "Guardianes de la Galaxia Vol. 3"]
    },
    "Pobres Criaturas": {
        year: 2023,
        duration: "2h 21m",
        rating: 8.2,
        genre: "Fantasía, Comedia Negra",
        director: "Yorgos Lanthimos",
        cast: "Emma Stone, Mark Ruffalo, Willem Dafoe, Ramy Youssef",
        description: "La historia de Bella Baxter, una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender, pero el mundo exterior la llama y se escapa con Duncan Wedderburn, un abogado astuto y libertino.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Pobres+Criaturas",
        similar: ["Barbie", "Wonka", "The French Dispatch", "La Favorita"]
    },
    "Los Asesinos de la Luna": {
        year: 2023,
        duration: "3h 26m",
        rating: 7.8,
        genre: "Drama, Crimen",
        director: "Martin Scorsese",
        cast: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone, Jesse Plemons",
        description: "Basada en hechos reales de la década de 1920, la película narra los asesinatos en serie de miembros de la nación Osage, rica en petróleo, una serie de crímenes brutales que más tarde se conocería como el Reinado del Terror.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Los+Asesinos+de+la+Luna",
        similar: ["Oppenheimer", "Napoleón", "El Irlandés", "Érase una vez en Hollywood"]
    },
    "Wonka": {
        year: 2023,
        duration: "1h 56m",
        rating: 7.2,
        genre: "Fantasía, Comedia",
        director: "Paul King",
        cast: "Timothée Chalamet, Olivia Colman, Hugh Grant, Keegan-Michael Key",
        description: "La historia de cómo el joven Willy Wonka conoció a los Oompa-Loompas y se convirtió en el excéntrico chocolatero que todos conocemos.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Wonka",
        similar: ["Barbie", "Pobres Criaturas", "Paddington", "Charlie y la fábrica de chocolate"]
    },
    "Aquaman 2": {
        year: 2023,
        duration: "2h 04m",
        rating: 6.8,
        genre: "Acción, Aventura",
        director: "James Wan",
        cast: "Jason Momoa, Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II",
        description: "Cuando un antiguo poder se desata, Aquaman debe forjar una alianza incómoda con un aliado improbable para proteger a Atlantis y al mundo de una devastación irreversible.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Aquaman+2",
        similar: ["The Marvels", "Guardianes de la Galaxia Vol. 3", "John Wick 4", "Misión Imposible 7"]
    },
    "Napoleón": {
        year: 2023,
        duration: "2h 38m",
        rating: 7.5,
        genre: "Drama Histórico, Biografía",
        director: "Ridley Scott",
        cast: "Joaquin Phoenix, Vanessa Kirby, Tahar Rahim, Rupert Everett",
        description: "Una mirada personal a los orígenes de Napoleón Bonaparte y su rápido y despiadado ascenso al emperador, visto a través del prisma de su adictiva y a menudo volátil relación con su esposa y único amor verdadero, Josefina.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Napoleón",
        similar: ["Oppenheimer", "Los Asesinos de la Luna", "Gladiator", "El último duelo"]
    },
    "The Marvels": {
        year: 2023,
        duration: "1h 45m",
        rating: 6.5,
        genre: "Acción, Aventura",
        director: "Nia DaCosta",
        cast: "Brie Larson, Teyonah Parris, Iman Vellani, Samuel L. Jackson",
        description: "Carol Danvers, alias Capitana Marvel, ha recuperado su identidad de los tiránicos Kree. Sin embargo, consecuencias no deseadas la obligan a cargar con el peso de un universo desestabilizado. Cuando sus deberes la envían a un agujero de gusano anómalo, sus poderes se entrelazan con los de Kamala Khan y Monica Rambeau.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=The+Marvels",
        similar: ["Guardianes de la Galaxia Vol. 3", "Aquaman 2", "Spider-Man: A través del Spider-Verso", "Ant-Man y la Avispa: Quantumania"]
    },
    "Guardianes de la Galaxia Vol. 3": {
        year: 2023,
        duration: "2h 30m",
        rating: 8.0,
        genre: "Ciencia Ficción, Aventura",
        director: "James Gunn",
        cast: "Chris Pratt, Zoe Saldana, Dave Bautista, Karen Gillan",
        description: "Peter Quill, todavía conmocionado por la pérdida de Gamora, debe reunir a su equipo para defender el universo y proteger a uno de los suyos. Una misión que, si no se completa con éxito, podría conducir al fin de los Guardianes tal como los conocemos.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Guardianes+de+la+Galaxia+Vol.+3",
        similar: ["The Marvels", "Spider-Man: A través del Spider-Verso", "Aquaman 2", "Thor: Love and Thunder"]
    },
    "John Wick 4": {
        year: 2023,
        duration: "2h 49m",
        rating: 7.8,
        genre: "Acción, Thriller",
        director: "Chad Stahelski",
        cast: "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne",
        description: "John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=John+Wick+4",
        similar: ["Misión Imposible 7", "Aquaman 2", "The Marvels", "Fast X"]
    },
    "Misión Imposible 7": {
        year: 2023,
        duration: "2h 43m",
        rating: 7.7,
        genre: "Acción, Aventura",
        director: "Christopher McQuarrie",
        cast: "Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg",
        description: "Ethan Hunt y su equipo del IMF se embarcan en su misión más peligrosa hasta la fecha: rastrear una nueva arma terrorífica que amenaza a toda la humanidad antes de que caiga en las manos equivocadas.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Misión+Imposible+7",
        similar: ["John Wick 4", "Aquaman 2", "The Marvels", "Fast X"]
    },
    "Spider-Man: A través del Spider-Verso": {
        year: 2023,
        duration: "2h 20m",
        rating: 8.7,
        genre: "Animación, Acción",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
        description: "Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People, y enfrentarse a un villano más poderoso que cualquier cosa que hayan encontrado.",
        poster: "https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Spider-Man:+A+través+del+Spider-Verso",
        similar: ["Guardianes de la Galaxia Vol. 3", "The Marvels", "Super Mario Bros: La película", "Elementos"]
    }
};

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const searchInput = document.getElementById('search');
const movieCards = document.querySelectorAll('.movie-card');
const videoPlayer = document.getElementById('video-player');
const closeVideo = document.getElementById('close-video');
const videoTitle = document.getElementById('video-title');
const header = document.querySelector('header');
const movieInfoModal = document.getElementById('movie-info-modal');
const closeModal = document.getElementById('close-modal');
const modalMovieTitle = document.getElementById('modal-movie-title');
const modalPosterImg = document.getElementById('modal-poster-img');
const modalYear = document.getElementById('modal-year');
const modalDuration = document.getElementById('modal-duration');
const modalRating = document.getElementById('modal-rating');
const modalDescription = document.getElementById('modal-description');
const modalGenre = document.getElementById('modal-genre');
const modalDirector = document.getElementById('modal-director');
const modalCast = document.getElementById('modal-cast');
const modalPlayBtn = document.getElementById('modal-play-btn');
const modalTrailerBtn = document.getElementById('modal-trailer-btn');
const modalListBtn = document.getElementById('modal-list-btn');
const similarGrid = document.querySelector('.similar-grid');

// Theme Toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    themeToggle.checked = false;
    body.classList.add('light-theme');
} else {
    themeToggle.checked = true;
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav') && !e.target.closest('.menu-toggle')) {
        mainNav.classList.remove('active');
    }
});

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Función para abrir el reproductor de video
function openVideoPlayer(movieTitle) {
    videoTitle.textContent = movieTitle;
    videoPlayer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para abrir el modal de información
function openMovieInfoModal(movieTitle) {
    const movie = moviesDB[movieTitle];
    
    if (!movie) {
        showNotification('Información de película no disponible');
        return;
    }
    
    // Llenar el modal con la información de la película
    modalMovieTitle.textContent = movieTitle;
    modalPosterImg.src = movie.poster;
    modalPosterImg.alt = movieTitle;
    modalYear.textContent = movie.year;
    modalDuration.textContent = movie.duration;
    modalRating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
    modalDescription.textContent = movie.description;
    modalGenre.textContent = movie.genre;
    modalDirector.textContent = movie.director;
    modalCast.textContent = movie.cast;
    
    // Configurar botones
    modalPlayBtn.onclick = () => {
        closeMovieInfoModal();
        openVideoPlayer(movieTitle);
    };
    
    modalTrailerBtn.onclick = () => {
        showNotification('Trailer no disponible en este momento');
    };
    
    // Verificar si la película está en "Mi Lista"
    const isInList = localStorage.getItem(`movie_${movieTitle}`) === 'true';
    updateListButton(modalListBtn, isInList);
    
    modalListBtn.onclick = () => {
        toggleMovieInList(movieTitle, modalListBtn);
    };
    
    // Llenar películas similares
    similarGrid.innerHTML = '';
    if (movie.similar && movie.similar.length > 0) {
        movie.similar.forEach(similarTitle => {
            if (moviesDB[similarTitle]) {
                const similarMovie = moviesDB[similarTitle];
                const similarCard = document.createElement('div');
                similarCard.className = 'similar-card';
                similarCard.innerHTML = `
                    <div class="similar-poster">
                        <img src="${similarMovie.poster}" alt="${similarTitle}">
                    </div>
                    <div class="similar-info">
                        <h4>${similarTitle}</h4>
                    </div>
                `;
                
                similarCard.addEventListener('click', () => {
                    openMovieInfoModal(similarTitle);
                });
                
                similarGrid.appendChild(similarCard);
            }
        });
    }
    
    // Mostrar el modal
    movieInfoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de información
function closeMovieInfoModal() {
    movieInfoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Función para actualizar el botón de "Mi Lista"
function updateListButton(button, isInList) {
    if (isInList) {
        button.innerHTML = '<i class="fas fa-check"></i> En Mi Lista';
    } else {
        button.innerHTML = '<i class="fas fa-plus"></i> Mi Lista';
    }
}

// Función para alternar película en "Mi Lista"
function toggleMovieInList(movieTitle, button) {
    const isInList = localStorage.getItem(`movie_${movieTitle}`) === 'true';
    
    if (isInList) {
        localStorage.setItem(`movie_${movieTitle}`, 'false');
        updateListButton(button, false);
        showNotification(`${movieTitle} eliminada de Mi Lista`);
    } else {
        localStorage.setItem(`movie_${movieTitle}`, 'true');
        updateListButton(button, true);
        showNotification(`${movieTitle} añadida a Mi Lista`);
    }
    
    // Actualizar también el botón en la tarjeta de película si existe
    document.querySelectorAll('.movie-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        if (title === movieTitle) {
            const listBtn = card.querySelector('.add-list-btn');
            if (listBtn) {
                updateListButton(listBtn, !isInList);
            }
        }
    });
}

// Event Listeners para botones de reproducción
document.querySelectorAll('[data-play="true"]').forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.getAttribute('data-movie');
        openVideoPlayer(movieTitle);
    });
});

// Event Listeners para botones de información
document.querySelectorAll('[data-info="true"]').forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.getAttribute('data-movie');
        openMovieInfoModal(movieTitle);
    });
});

// Event Listeners para botones de reproducción en posters
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.getAttribute('data-movie');
        openVideoPlayer(movieTitle);
    });
});

// Event Listeners para botones de "Mi Lista"
document.querySelectorAll('.add-list-btn').forEach(button => {
    const movieTitle = button.closest('.movie-card').querySelector('h3').textContent;
    const isInList = localStorage.getItem(`movie_${movieTitle}`) === 'true';
    
    updateListButton(button, isInList);
    
    button.addEventListener('click', () => {
        toggleMovieInList(movieTitle, button);
    });
});

// Filtrado por género
document.querySelectorAll('[data-genre]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedGenre = link.getAttribute('data-genre');
        
        movieCards.forEach(card => {
            const cardGenre = card.getAttribute('data-genre');
            
            if (cardGenre && cardGenre.includes(selectedGenre) || selectedGenre === 'Todos') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        showNotification(`Mostrando películas de género: ${selectedGenre}`);
    });
});

// Close Video Player
closeVideo.addEventListener('click', () => {
    videoPlayer.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close Movie Info Modal
closeModal.addEventListener('click', closeMovieInfoModal);

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoPlayer.classList.contains('active')) {
            videoPlayer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        if (movieInfoModal.classList.contains('active')) {
            closeMovieInfoModal();
        }
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = body.classList.contains('light-theme') 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(20, 20, 20, 0.95)';
    } else {
        header.style.background = body.classList.contains('light-theme') 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(0, 0, 0, 0.8)';
    }
});

// Dropdown menus for mobile
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const dropdown = btn.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation();
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
});

// Simulate loading state for movie cards
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.movie-card').forEach(card => {
            card.style.opacity = '1';
        });
    }, 500);
});

// Add movies to "My List" functionality
const addToListButtons = document.querySelectorAll('.btn-small:last-child');

addToListButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.movie-card');
        const title = card.querySelector('h3').textContent;
        
        // Toggle button text and icon
        if (button.innerHTML.includes('Mi Lista')) {
            button.innerHTML = '<i class="fas fa-check"></i> En Lista';
            showNotification(`${title} añadida a Mi Lista`);
        } else {
            button.innerHTML = '<i class="fas fa-plus"></i> Mi Lista';
            showNotification(`${title} eliminada de Mi Lista`);
        }
    });
});

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.boxShadow = 'var(--shadow)';
    notification.style.zIndex = '9999';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'all 0.3s ease';
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Inicializar la página
window.addEventListener('load', () => {
    // Simular carga de películas
    setTimeout(() => {
        document.querySelectorAll('.movie-card').forEach(card => {
            card.style.opacity = '1';
        });
    }, 500);
    
    // Verificar películas en "Mi Lista"
    document.querySelectorAll('.movie-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        const listBtn = card.querySelector('.add-list-btn');
        const isInList = localStorage.getItem(`movie_${title}`) === 'true';
        
        if (listBtn && isInList) {
            updateListButton(listBtn, true);
        }
    });
});