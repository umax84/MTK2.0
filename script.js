document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado. Inicializando script...');

    // --- ELEMENTOS DEL LOGIN ---
    const loginOverlay = document.getElementById('loginOverlay');
    const loginUsernameInput = document.getElementById('loginUsername');
    const loginPasswordInput = document.getElementById('loginPassword');
    const loginBtn = document.getElementById('loginBtn');
    const loginMessage = document.getElementById('loginMessage');
    const body = document.body;

    // Usuarios y contraseñas predefinidos
    const USERS = {
        'RaulG': 'Blanco84$',
        'DiegoL': 'DiegoLuna$'
    };

    // Función para mostrar mensaje de error/éxito
    function showLoginMessage(message, isError = true) {
        loginMessage.textContent = message;
        loginMessage.classList.remove('error-message', 'success-message');
        loginMessage.classList.add(isError ? 'error-message' : 'success-message');
        loginMessage.classList.add('show');
        setTimeout(() => {
            loginMessage.classList.remove('show');
            loginMessage.textContent = '';
        }, 3000);
    }

    // Función para intentar el login
    function attemptLogin() {
        const username = loginUsernameInput.value.trim();
        const password = loginPasswordInput.value;

        if (!username || !password) {
            showLoginMessage('Por favor, ingresa usuario y contraseña.');
            return;
        }

        if (USERS[username] && USERS[username] === password) {
            // Credenciales correctas
            showLoginMessage('¡Acceso concedido! Redireccionando...', false);
            localStorage.setItem('isLoggedIn', 'true'); // Guardar estado de login
            body.classList.add('logged-in');
            loginOverlay.style.display = 'none';
            showSection('inicio'); // Mostrar la sección de inicio al loguearse
            updateNavLinks(); // Actualizar el estado de los enlaces de navegación
        } else {
            // Credenciales incorrectas
            showLoginMessage('Usuario o contraseña incorrectos.');
            loginPasswordInput.value = ''; // Limpiar contraseña
        }
    }

    // --- GESTIÓN DE SECCIONES Y NAVEGACIÓN ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const logoutBtn = document.getElementById('logoutBtn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.nav-links');

    // Función para mostrar la sección correcta
    function showSection(sectionId) {
        document.querySelectorAll('.main-content > div').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active-section'); // Asegurarse de remover la clase
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active-section'); // Añadir clase active
        }

        // Actualizar estado 'active' en la navegación
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Función para actualizar los enlaces de navegación al cargar la página
    function updateNavLinks() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');

            if (linkHref === 'clientes.html' && currentPath.includes('clientes.html')) {
                link.classList.add('active');
            } else if (linkHref.startsWith('index.html') && currentPath.includes('index.html')) {
                if (linkHref.split('#')[1] === currentHash.substring(1)) {
                    link.classList.add('active');
                } else if (!currentHash && link.dataset.section === 'inicio') {
                    link.classList.add('active'); // Por defecto, 'inicio' si no hay hash
                }
            }
        });
    }

    // --- EVENT LISTENERS ---
    loginBtn.addEventListener('click', attemptLogin);

    // Permitir login con Enter en los campos
    loginUsernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });
    loginPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn'); // Eliminar estado de login
        body.classList.remove('logged-in');
        loginOverlay.style.display = 'flex'; // Mostrar overlay de login
        window.location.hash = ''; // Limpiar el hash de la URL
        document.querySelectorAll('.main-content > div').forEach(section => {
            section.style.display = 'none'; // Ocultar todas las secciones
        });
        showLoginMessage('Has cerrado sesión.', false);
    });

    // Manejo de la navegación entre secciones
    navLinks.forEach(link => {
        // Para enlaces internos de index.html
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.dataset.section;
                history.pushState(null, '', `#${sectionId}`); // Cambia el hash de la URL sin recargar
                showSection(sectionId);
            });
        }
        // Para el enlace a clientes.html, la gestión de la clase 'active' se hace en updateNavLinks
    });

    // Manejo del botón de hamburguesa para menú móvil
    hamburgerMenu.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('active');
    });

    // Manejar el estado de login al cargar la página
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        body.classList.add('logged-in');
        loginOverlay.style.display = 'none';

        // Determinar la sección a mostrar al cargar
        const initialSectionId = window.location.hash.substring(1) || 'inicio';
        showSection(initialSectionId);
    } else {
        body.classList.remove('logged-in');
        loginOverlay.style.display = 'flex';
        // Oculta todas las secciones del contenido principal si no está logeado
        document.querySelectorAll('.main-content > div').forEach(section => {
            section.style.display = 'none';
        });
    }

    // Actualizar el estado de los enlaces de navegación en la carga inicial y en cambios de hash
    updateNavLinks();
    window.addEventListener('hashchange', updateNavLinks);
});