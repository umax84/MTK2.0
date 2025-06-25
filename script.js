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

    // Función para mostrar mensaje de error
    function showLoginMessage(message, isError = true) {
        loginMessage.textContent = message;
        loginMessage.classList.remove('error-message');
        loginMessage.classList.remove('success-message');
        loginMessage.classList.add(isError ? 'error-message' : 'success-message');
        loginMessage.classList.add('show');
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
            sessionStorage.setItem('loggedIn', 'true'); // Marcar como logueado
            setTimeout(() => {
                loginOverlay.style.display = 'none';
                body.classList.add('logged-in');
                showSection('inicio'); // Mostrar la sección de inicio después del login
            }, 1000);
        } else {
            // Credenciales incorrectas
            showLoginMessage('Usuario o contraseña incorrectos.');
        }
    }

    // Event listener para el botón de login
    if (loginBtn) {
        loginBtn.addEventListener('click', attemptLogin);
        // Permitir login con Enter en los campos de usuario/contraseña
        loginUsernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') attemptLogin();
        });
        loginPasswordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') attemptLogin();
        });
    }

    // --- MANEJO DE SECCIONES Y NAVEGACIÓN ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.main-content > div');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
            // Desplazar al inicio de la sección si no es "inicio" y es necesario
            if (sectionId !== 'inicio') {
                 activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Actualizar clase 'active' en los enlaces de navegación
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId || (link.href && link.href.includes(sectionId))) {
                link.classList.add('active');
            }
        });

        // Cerrar menú de hamburguesa si está abierto
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const mainNavLinks = document.querySelector('.nav-links');
        if (hamburgerMenu && mainNavLinks && mainNavLinks.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            mainNavLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    }

    // Event listeners para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const sectionId = link.getAttribute('data-section') || link.href.split('#')[1];
            if (sectionId) {
                e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
                showSection(sectionId);
            }
        });
    });

    // --- CERRAR SESIÓN ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('loggedIn'); // Eliminar el estado de logueado
            loginOverlay.style.display = 'flex'; // Mostrar overlay de login
            body.classList.remove('logged-in'); // Eliminar clase de logueado del body
            loginUsernameInput.value = ''; // Limpiar campos
            loginPasswordInput.value = '';
            showLoginMessage('', false); // Limpiar mensajes de login
            showSection(''); // Ocultar todas las secciones del contenido principal
            window.location.hash = ''; // Limpiar hash de URL
            console.log('Sesión cerrada.');
        });
    }

    // --- MENÚ HAMBURGUESA (MÓVIL) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNavLinks = document.querySelector('.nav-links');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mainNavLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---
    // Verificar estado de login al cargar la página
    if (sessionStorage.getItem('loggedIn') === 'true') {
        loginOverlay.style.display = 'none';
        body.classList.add('logged-in');
        // Mantener la sección activa si hay un hash en la URL, de lo contrario mostrar inicio
        const initialSection = window.location.hash.substring(1) || 'inicio';
        showSection(initialSection);
    } else {
        loginOverlay.style.display = 'flex';
        body.classList.remove('logged-in');
    }
});