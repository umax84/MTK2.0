// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado. Inicializando script...');

    // *******************************************************************
    // ELEMENTOS DEL LOGIN Y CONTENEDOR PRINCIPAL
    // *******************************************************************
    const loginContainer = document.getElementById('loginContainer');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    const appContent = document.getElementById('appContent'); // Contenedor principal para contenido dinámico

    // *******************************************************************
    // USUARIOS Y ROLES (AQUÍ DEBES DEFINIR TUS USUARIOS CON CONTRASEÑAS FIJAS)
    // *******************************************************************
    const USERS = {
        'RaulG': { pass: 'Blanco84$', role: 'admin' },
        'DiegoL': { pass: 'DiegoLuna25$', role: 'admin' },
        // Clientes con contraseñas fijas (100 usuarios de C0001 a C0100):
        'C0001': { pass: 'passC001', role: 'client' },
        'C0002': { pass: 'passC002', role: 'client' },
        'C0003': { pass: 'passC003', role: 'client' },
        'C0004': { pass: 'passC004', role: 'client' },
        'C0005': { pass: 'passC005', role: 'client' },
        'C0006': { pass: 'passC006', role: 'client' },
        'C0007': { pass: 'passC007', role: 'client' },
        'C0008': { pass: 'passC008', role: 'client' },
        'C0009': { pass: 'passC009', role: 'client' },
        'C0010': { pass: 'passC010', role: 'client' },
        'C0011': { pass: 'passC011', role: 'client' },
        'C0012': { pass: 'passC012', role: 'client' },
        'C0013': { pass: 'passC013', role: 'client' },
        'C0014': { pass: 'passC014', role: 'client' },
        'C0015': { pass: 'passC015', role: 'client' },
        'C0016': { pass: 'passC016', role: 'client' },
        'C0017': { pass: 'passC017', role: 'client' },
        'C0018': { pass: 'passC018', role: 'client' },
        'C0019': { pass: 'passC019', role: 'client' },
        'C0020': { pass: 'passC020', role: 'client' },
        'C0021': { pass: 'passC021', role: 'client' },
        'C0022': { pass: 'passC022', role: 'client' },
        'C0023': { pass: 'passC023', role: 'client' },
        'C0024': { pass: 'passC024', role: 'client' },
        'C0025': { pass: 'passC025', role: 'client' },
        'C0026': { pass: 'passC026', role: 'client' },
        'C0027': { pass: 'passC027', role: 'client' },
        'C0028': { pass: 'passC028', role: 'client' },
        'C0029': { pass: 'passC029', role: 'client' },
        'C0030': { pass: 'passC030', role: 'client' },
        'C0031': { pass: 'passC031', role: 'client' },
        'C0032': { pass: 'passC032', role: 'client' },
        'C0033': { pass: 'passC033', role: 'client' },
        'C0034': { pass: 'passC034', role: 'client' },
        'C0035': { pass: 'passC035', role: 'client' },
        'C0036': { pass: 'passC036', role: 'client' },
        'C0037': { pass: 'passC037', role: 'client' },
        'C0038': { pass: 'passC038', role: 'client' },
        'C0039': { pass: 'passC039', role: 'client' },
        'C0040': { pass: 'passC040', role: 'client' },
        'C0041': { pass: 'passC041', role: 'client' },
        'C0042': { pass: 'passC042', role: 'client' },
        'C0043': { pass: 'passC043', role: 'client' },
        'C0044': { pass: 'passC044', role: 'client' },
        'C0045': { pass: 'passC045', role: 'client' },
        'C0046': { pass: 'passC046', role: 'client' },
        'C0047': { pass: 'passC047', role: 'client' },
        'C0048': { pass: 'passC048', role: 'client' },
        'C0049': { pass: 'passC049', role: 'client' },
        'C0050': { pass: 'passC050', role: 'client' },
        'C0051': { pass: 'passC051', role: 'client' },
        'C0052': { pass: 'passC052', role: 'client' },
        'C0053': { pass: 'passC053', role: 'client' },
        'C0054': { pass: 'passC054', role: 'client' },
        'C0055': { pass: 'passC055', role: 'client' },
        'C0056': { pass: 'passC056', role: 'client' },
        'C0057': { pass: 'passC057', role: 'client' },
        'C0058': { pass: 'passC058', role: 'client' },
        'C0059': { pass: 'passC059', role: 'client' },
        'C0060': { pass: 'passC060', role: 'client' },
        'C0061': { pass: 'passC061', role: 'client' },
        'C0062': { pass: 'passC062', role: 'client' },
        'C0063': { pass: 'passC063', role: 'client' },
        'C0064': { pass: 'passC064', role: 'client' },
        'C0065': { pass: 'passC065', role: 'client' },
        'C0066': { pass: 'passC066', role: 'client' },
        'C0067': { pass: 'passC067', role: 'client' },
        'C0068': { pass: 'passC068', role: 'client' },
        'C0069': { pass: 'passC069', role: 'client' },
        'C0070': { pass: 'passC070', role: 'client' },
        'C0071': { pass: 'passC071', role: 'client' },
        'C0072': { pass: 'passC072', role: 'client' },
        'C0073': { pass: 'passC073', role: 'client' },
        'C0074': { pass: 'passC074', role: 'client' },
        'C0075': { pass: 'passC075', role: 'client' },
        'C0076': { pass: 'passC076', role: 'client' },
        'C0077': { pass: 'passC077', role: 'client' },
        'C0078': { pass: 'passC078', role: 'client' },
        'C0079': { pass: 'passC079', role: 'client' },
        'C0080': { pass: 'passC080', role: 'client' },
        'C0081': { pass: 'passC081', role: 'client' },
        'C0082': { pass: 'passC082', role: 'client' },
        'C0083': { pass: 'passC083', role: 'client' },
        'C0084': { pass: 'passC084', role: 'client' },
        'C0085': { pass: 'passC085', role: 'client' },
        'C0086': { pass: 'passC086', role: 'client' },
        'C0087': { pass: 'passC087', role: 'client' },
        'C0088': { pass: 'passC088', role: 'client' },
        'C0089': { pass: 'passC089', role: 'client' },
        'C0090': { pass: 'passC090', role: 'client' },
        'C0091': { pass: 'passC091', role: 'client' },
        'C0092': { pass: 'passC092', role: 'client' },
        'C0093': { pass: 'passC093', role: 'client' },
        'C0094': { pass: 'passC094', role: 'client' },
        'C0095': { pass: 'passC095', role: 'client' },
        'C0096': { pass: 'passC096', role: 'client' },
        'C0097': { pass: 'passC097', role: 'client' },
        'C0098': { pass: 'passC098', role: 'client' },
        'C0099': { pass: 'passC099', role: 'client' },
        'C0100': { pass: 'passC100', role: 'client' },
    };

    // Objeto para almacenar detalles de clientes (para el cotizador y la base de clientes)
    let clients = [];
    const CLIENTS_STORAGE_KEY = 'macro_tecnologias_kernel_clients';

    // *******************************************************************
    // HTML DINÁMICO (DEFINICIONES DE CADA SECCIÓN)
    // *******************************************************************

    // Video Overlay - Moved outside of headerHTML to be at the very top
    const videoOverlayHTML = `
        <div class="video-overlay" id="videoOverlay" style="display: none;">
            <div class="video-wrapper">
                <video id="introVideo" controlsList="nodownload nofullscreen noremoteplayback" playsinline>
                    <source src="Discurso de Autodescubrimiento_ Azul.mp4" type="video/mp4">
                    Tu navegador no soporta el tag de video.
                </video>
                <button id="skipVideoBtn" class="skip-video-btn" style="display: none;">Omitir Video</button>
            </div>
        </div>
    `;

    // Nuevo logo fijo en la esquina superior derecha
    const fixedLogoHTML = `
        <img src="logo_mtk.png" alt="Logo Macro Tecnologías Kernel" class="fixed-logo">
    `;

    const headerHTML = `
        <header class="header">
            <nav class="navbar">
                <button class="hamburger" id="hamburgerMenu">&#9776;</button>
                <ul class="nav-links" id="navLinks">
                </ul>
            </nav>
        </header>
        <div class="content-area" id="dynamicContentArea">
        </div>
    `;

    const adminWelcomeHTML = `
        <div class="admin-welcome" id="adminWelcome">
            <h2>Bienvenido Administrador de Macro Tecnologías Kernel</h2>
            <p>Desde aquí podrás gestionar diferentes aspectos de la aplicación.</p>
            <p>Utiliza el menú superior para acceder a las herramientas de administración.</p>
        </div>
    `;

    const baseClientesHTML = `
        <div class="admin-section" id="baseClientesSection">
            <h2>Base de Clientes</h2>
            <div class="client-actions">
                <button id="addClientBtn">Añadir Nuevo Cliente</button>
                <label class="csv-upload-label" for="csvFileInputClients">Cargar Clientes (CSV)</label>
                <input type="file" id="csvFileInputClients" accept=".csv" style="display:none;" />
                <button id="downloadCsvClientsBtn">Descargar Clientes (CSV)</button>
            </div>

            <div id="clientFormContainer" style="display: none;">
                <h3><span id="formTitle">Añadir</span> Cliente</h3>
                <input type="hidden" id="clientId" />
                <div class="input-group">
                    <label for="clientFormNombre">Nombre:</label>
                    <input type="text" id="clientFormNombre" required />
                </div>
                <div class="input-group">
                    <label for="clientFormEmpresa">Empresa:</label>
                    <input type="text" id="clientFormEmpresa" />
                </div>
                <div class="input-group">
                    <label for="clientFormDireccion">Dirección:</label>
                    <input type="text" id="clientFormDireccion" />
                </div>
                <div class="input-group">
                    <label for="clientFormTelefono">Teléfono:</label>
                    <input type="text" id="clientFormTelefono" />
                </div>
                <div class="input-group">
                    <label for="clientFormCorreo">Correo:</label>
                    <input type="email" id="clientFormCorreo" />
                </div>
                <div class="buttons-container">
                    <button id="saveClientFormBtn">Guardar Cliente</button>
                    <button id="cancelClientFormBtn" class="btn-cancel">Cancelar</button>
                </div>
            </div>

            <div class="search-input-group">
                <input type="text" id="clientSearchInput" placeholder="Buscar cliente por nombre o correo..." />
            </div>

            <table id="clientsTable">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    </tbody>
            </table>
        </div>
    `;

    const cotizadorAdminHTML = `
        <div class="cotizador" id="adminCotizador">
            <h2>Generador de Cotizaciones</h2>

            <div class="input-group">
                <label for="clienteNombre">Nombre del Cliente:</label>
                <input type="text" id="clienteNombre" placeholder="Nombre completo del cliente" />
            </div>

            <div class="input-group">
                <label for="clienteEmpresa">Empresa del Cliente:</label>
                <input type="text" id="clienteEmpresa" placeholder="Nombre de la empresa (opcional)" />
            </div>

            <div class="input-group">
                <label for="clienteDireccion">Dirección del Cliente:</label>
                <input type="text" id="clienteDireccion" placeholder="Dirección completa del cliente" />
            </div>

            <div class="input-group">
                <label for="clienteTelefono">Teléfono del Cliente:</label>
                <input type="text" id="clienteTelefono" placeholder="Ej: +52 81 1234 5678 (opcional)" />
            </div>

            <div class="input-group">
                <label for="clienteCorreo">Correo del Cliente:</label>
                <input type="email" id="clienteCorreo" placeholder="ejemplo@correo.com (opcional)" />
            </div>

            <div class="buttons-container" style="margin-bottom: 20px;">
                <button id="guardarClienteBtn" class="btn-new-client">Guardar Nuevo Cliente</button>
                <label class="csv-upload-label" for="csvFileInput">Cargar Clientes desde CSV</label>
                <input type="file" id="csvFileInput" accept=".csv" style="display:none;" />
                <button id="descargarCsvClientesBtn" title="Descarga los clientes actualmente en un archivo CSV.">Descargar CSV de Clientes</button>
            </div>

            <div class="input-group">
                <label for="cotizacionFecha">Fecha de Cotización:</label>
                <input type="date" id="cotizacionFecha" />
            </div>

            <h3>Servicios a Cotizar</h3>
            <table id="itemsTable">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Unidad</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5" style="text-align: right;">Subtotal:</td>
                        <td id="subtotalDisplay">$0.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="5" style="text-align: right;">IVA (16%):</td>
                        <td id="ivaDisplay">$0.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="5" style="text-align: right;">Total:</td>
                        <td id="totalDisplay">$0.00</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button id="addItemBtn">Añadir Item</button>

            <div class="buttons-container">
                <button id="downloadPdfBtn">Descargar Cotización en PDF</button>
            </div>
        </div>
    `;


    const clientDashboardHTML = `
        <div class="client-info" id="clientMainInfo">
            <h2>Bienvenido a Macro Tecnologías Kernel</h2>
            <p>Explora nuestros servicios y capacitaciones.</p>
            <div class="client-sections">
                <section id="ourServicesSection" class="client-section">
                    <h3>Nuestros Servicios</h3>
                    <p>En Macro Tecnologías Kernel, nuestra fortaleza principal radica en la **instalación y mantenimiento de sistemas de CCTV, equipos de cómputo y soluciones de redes**.</p>
                    <ul>
                        <li>**Cámaras CCTV:** Implementamos sistemas de videovigilancia avanzados, desde soluciones analógicas hasta IP, incluyendo configuración de monitoreo remoto.</li>
                        <li>**Redes y Cómputo:** Diseñamos e instalamos redes robustas, vendemos y damos soporte a equipos de cómputo para optimizar tu infraestructura.</li>
                        <li>**Paneles Solares:** Ofrecemos soluciones energéticas eficientes con paneles solares, diseñadas a la medida de tus necesidades.</li>
                        <li>**Impermeabilizaciones y Pintura:** Protege y mejora tus espacios con nuestros servicios de impermeabilización y acabados de pintura.</li>
                        <li>**Internet Starlink:** Proporcionamos venta e instalación de equipos Starlink para una conexión a internet de alta velocidad en zonas remotas.</li>
                    </ul>
                    <p>Contáctanos para una cotización personalizada de cualquiera de nuestros servicios.</p>
                </section>

                <section id="coursesSection" class="client-section">
                    <h3>Cursos Disponibles</h3>
                    <p>Capacítate con nuestros cursos especializados en energía solar y mantenimiento.</p>
                    <ul>
                        <li>Introducción a la Energía Solar Fotovoltaica - Duración: 8 horas</li>
                        <li>Diseño y Dimensionamiento de Sistemas Solares - Duración: 16 horas</li>
                        <li>Instalación Avanzada de Paneles Solares - Duración: 24 horas</li>
                        <li>Mantenimiento de Sistemas de Energía Renovable - Duración: 12 horas</li>
                    </ul>
                    <p>¡Inscríbete hoy y sé parte del futuro energético!</p>
                </section>
            </div>
        </div>
    `;

    // *******************************************************************
    // FUNCIONES DE LOGIN Y NAVEGACIÓN
    // *******************************************************************

    function authenticateUser() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        loginError.textContent = ''; // Limpiar mensaje de error previo
        loginError.style.display = 'none';

        if (USERS[username] && USERS[username].pass === password) {
            // Autenticación exitosa
            sessionStorage.setItem('loggedInUser', username);
            sessionStorage.setItem('userRole', USERS[username].role);
            showAppContent(USERS[username].role);
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
            loginError.style.display = 'block';
        }
    }

    function showAppContent(role) {
        // Ocultar el login y mostrar el contenedor principal de la aplicación
        loginContainer.style.display = 'none';
        appContent.style.display = 'block';

        // Inject video overlay first, then the fixed logo, then the header
        appContent.innerHTML = videoOverlayHTML + fixedLogoHTML + headerHTML;

        const dynamicContentArea = document.getElementById('dynamicContentArea');
        const navLinks = document.getElementById('navLinks');
        const hamburgerMenu = document.getElementById('hamburgerMenu');

        // Adjuntar event listener al menú hamburguesa
        if (hamburgerMenu) {
            hamburgerMenu.addEventListener('click', () => {
                if (navLinks) navLinks.classList.toggle('active');
            });
        }

        updateNavbar(role); // Actualizar el menú de navegación

        // Inyectar el contenido específico del dashboard y luego inicializar funciones
        if (role === 'admin') {
            dynamicContentArea.innerHTML = adminWelcomeHTML; // Iniciar con la bienvenida del admin
            // initializeAdminFunctions() se llamará al navegar al cotizador o base de clientes
        } else if (role === 'client') {
            dynamicContentArea.innerHTML = clientDashboardHTML;
            initializeClientFunctions(); // Para el video y otras funcionalidades del cliente
        }
    }

    function updateNavbar(role) {
        const navLinks = document.getElementById('navLinks');
        if (!navLinks) return;

        navLinks.innerHTML = ''; // Clear existing links
        let links = [];

        if (role === 'admin') {
            links = [
                { text: 'Inicio', id: 'navAdminHome', section: 'adminWelcome', htmlContent: adminWelcomeHTML },
                { text: 'Cotizador', id: 'navCotizadorAdmin', url: 'https://umax84.github.io/Computo/', external: true }, // MODIFIED
                { text: 'CRM Financiero', id: 'navCRMFinanciero', url: 'https://umax84.github.io/CRMFinanciaro/', external: true },
                { text: 'CotPaneles', id: 'navCotPanelesAdmin', url: 'https://umax84.github.io/MTK/', external: true },
                { text: 'Base de Clientes', id: 'navBaseClientesAdmin', section: 'baseClientesSection', htmlContent: baseClientesHTML, isClientBase: true },
                { text: 'Cerrar Sesión', id: 'navLogout', action: logoutUser, external: false, isLogout: true },
            ];
        } else if (role === 'client') {
            // Client links
            links = [
                { text: 'Nuestros Servicios', id: 'navOurServices', section: 'ourServicesSection' },
                { text: 'Cursos', id: 'navCourses', section: 'coursesSection' },
                { text: 'Cerrar Sesión', id: 'navLogout', action: logoutUser, external: false, isLogout: true },
            ];
        }

        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = link.text;
            a.id = link.id;

            if (link.external) {
                a.href = link.url;
                a.target = '_blank'; // Open in a new tab
            } else if (link.isLogout) {
                a.href = '#';
                a.classList.add('logout-menu-item'); // Clase específica para el estilo
                a.addEventListener('click', (event) => {
                    event.preventDefault();
                    link.action(); // Ejecuta la función de logout
                });
            } else {
                a.href = '#'; // Internal navigation
                a.addEventListener('click', (event) => {
                    event.preventDefault();
                    const dynamicContentArea = document.getElementById('dynamicContentArea');

                    // Hide video overlay if currently displayed
                    const videoOverlay = document.getElementById('videoOverlay');
                    if (videoOverlay && videoOverlay.style.display !== 'none') {
                        videoOverlay.style.display = 'none';
                        const introVideo = document.getElementById('introVideo');
                        if (introVideo) {
                            introVideo.pause();
                            introVideo.currentTime = 0;
                        }
                        if (window.skipButtonTimeout) clearTimeout(window.skipButtonTimeout);
                    }

                    // For internal navigation, load the correct HTML content if it's an admin section
                    if (role === 'admin') {
                        if (link.htmlContent) {
                            dynamicContentArea.innerHTML = link.htmlContent;
                            // Si es el cotizador, inicializar sus funciones
                            if (link.isCotizador) {
                                initializeCotizadorFunctions();
                            } else if (link.isClientBase) {
                                initializeClientBaseFunctions();
                            }
                        }
                    } else if (role === 'client') {
                        // For clients, ensure the full client dashboard is there if not already
                        if (!document.getElementById('clientMainInfo')) {
                            dynamicContentArea.innerHTML = clientDashboardHTML;
                            initializeClientFunctions(); // Re-initialize video if dashboard reloaded
                        }
                    }

                    // Scroll to the target section (if it exists in the current dynamic content)
                    const targetSection = document.getElementById(link.section);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }
            li.appendChild(a);
            navLinks.appendChild(li);

            // Close hamburger menu if open after click (for internal links only)
            if (!link.external && window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }

    function logoutUser() {
        sessionStorage.removeItem('loggedInUser');
        sessionStorage.removeItem('userRole');
        localStorage.removeItem('hasSeenIntroVideo'); // Reset video seen status on logout
        // Recargar la página para asegurar que el UI se resetee completamente
        location.reload();
    }

    function initializeClientFunctions() {
        const introVideo = document.getElementById('introVideo');
        const videoOverlay = document.getElementById('videoOverlay');
        const skipVideoBtn = document.getElementById('skipVideoBtn');

        // Play intro video only if it hasn't been seen before
        if (introVideo && videoOverlay && skipVideoBtn && !localStorage.getItem('hasSeenIntroVideo')) {
            videoOverlay.style.display = 'flex'; // Show overlay
            introVideo.play().then(() => {
                // Video started playing successfully
                console.log('Video started playing.');
            }).catch(error => {
                console.error('Error attempting to play video:', error);
                // If autoplay fails, still show the video and controls, maybe a message
                videoOverlay.style.display = 'flex';
                // Automatically show skip button after a delay if video plays for a bit
                window.skipButtonTimeout = setTimeout(() => {
                    if (skipVideoBtn) skipVideoBtn.style.display = 'block';
                }, 3000); // Show skip button after 3 seconds
            });

            introVideo.onended = () => {
                videoOverlay.style.display = 'none';
                localStorage.setItem('hasSeenIntroVideo', 'true');
                if (window.skipButtonTimeout) clearTimeout(window.skipButtonTimeout);
            };

            if (skipVideoBtn) skipVideoBtn.addEventListener('click', skipVideoHandler);
        } else if (videoOverlay) {
             // If video has been seen, ensure overlay is hidden
             videoOverlay.style.display = 'none';
             if (!introVideo || !videoOverlay || !skipVideoBtn) console.warn('Elementos de video (introVideo, videoOverlay, skipVideoBtn) no encontrados. Verifique la inyección de HTML.');
             // If any are missing, ensure overlay does not block anything
             if (videoOverlay) videoOverlay.style.display = 'none';
        }
    }

    function skipVideoHandler() {
        const introVideo = document.getElementById('introVideo');
        const videoOverlay = document.getElementById('videoOverlay');
        if (introVideo && videoOverlay) {
            introVideo.pause();
            introVideo.currentTime = 0;
            videoOverlay.style.display = 'none';
            localStorage.setItem('hasSeenIntroVideo', 'true');
            if (window.skipButtonTimeout) clearTimeout(window.skipButtonTimeout);
        }
    }


    // *******************************************************************
    // FUNCIONES DEL COTIZADOR (ADMIN)
    // *******************************************************************

    let itemCounter = 0;

    function generateQuoteNumber() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    function calculateTotals() {
        const itemsTableBody = document.querySelector('#itemsTable tbody');
        if (!itemsTableBody) return;

        let subtotal = 0;
        itemsTableBody.querySelectorAll('tr').forEach(row => {
            const quantity = parseFloat(row.querySelector('.item-quantity')?.value) || 0;
            const price = parseFloat(row.querySelector('.item-price')?.value) || 0;
            const totalCell = row.querySelector('.item-total');
            const itemTotal = quantity * price;
            if (totalCell) {
                totalCell.textContent = `$${itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }
            subtotal += itemTotal;
        });

        const iva = subtotal * 0.16;
        const total = subtotal + iva;

        const subtotalDisplay = document.getElementById('subtotalDisplay');
        const ivaDisplay = document.getElementById('ivaDisplay');
        const totalDisplay = document.getElementById('totalDisplay');

        if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        if (ivaDisplay) ivaDisplay.textContent = `$${iva.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        if (totalDisplay) totalDisplay.textContent = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    function addItem() {
        itemCounter++;
        const tableBody = document.querySelector('#itemsTable tbody');
        if (!tableBody) return;

        const newRow = tableBody.insertRow();
        newRow.id = `row-${itemCounter}`;

        const cells = Array.from({ length: 7 }, () => newRow.insertCell());

        cells[0].innerHTML = '<input type="text" class="item-code" placeholder="Código">';
        cells[1].innerHTML = '<input type="text" class="item-desc" placeholder="Descripción">';
        cells[2].innerHTML = '<input type="text" class="item-unit" placeholder="Unidad">';
        cells[3].innerHTML = '<input type="number" class="item-quantity" placeholder="Cantidad" min="0" value="1">';
        cells[4].innerHTML = '<input type="number" class="item-price" placeholder="Precio Unitario" min="0" step="0.01">';
        cells[5].className = 'item-total';
        cells[5].textContent = '$0.00';
        cells[6].innerHTML = '<button type="button" class="remove-item-btn">Eliminar</button>';

        const quantityInput = newRow.querySelector('.item-quantity');
        const priceInput = newRow.querySelector('.item-price');
        const removeItemBtn = newRow.querySelector('.remove-item-btn');

        if (quantityInput) quantityInput.addEventListener('input', calculateTotals);
        if (priceInput) priceInput.addEventListener('input', calculateTotals);
        if (removeItemBtn) {
            removeItemBtn.addEventListener('click', () => {
                newRow.remove();
                calculateTotals();
            });
        }
        calculateTotals();
    }

    // Function to handle PDF generation, adapted for the cotizador
    window.generarPDFGeneral = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const clienteNombre = document.getElementById('clienteNombre')?.value || 'N/A';
        const clienteEmpresa = document.getElementById('clienteEmpresa')?.value || 'N/A';
        const clienteDireccion = document.getElementById('clienteDireccion')?.value || 'N/A';
        const clienteTelefono = document.getElementById('clienteTelefono')?.value || 'N/A';
        const clienteCorreo = document.getElementById('clienteCorreo')?.value || 'N/A';
        const cotizacionFecha = document.getElementById('cotizacionFecha')?.value || new Date().toISOString().slice(0, 10);
        const quoteNumber = generateQuoteNumber();

        const items = [];
        document.querySelectorAll('#itemsTable tbody tr').forEach(row => {
            const code = row.querySelector('.item-code')?.value || '';
            const description = row.querySelector('.item-desc')?.value || '';
            const unit = row.querySelector('.item-unit')?.value || '';
            const quantity = parseFloat(row.querySelector('.item-quantity')?.value) || 0;
            const price = parseFloat(row.querySelector('.item-price')?.value) || 0;
            const total = quantity * price;
            items.push({ code, description, unit, quantity, price, total });
        });

        const subtotal = parseFloat(document.getElementById('subtotalDisplay')?.textContent.replace('$', '').replace(/,/g, '')) || 0;
        const iva = parseFloat(document.getElementById('ivaDisplay')?.textContent.replace('$', '').replace(/,/g, '')) || 0;
        const total = parseFloat(document.getElementById('totalDisplay')?.textContent.replace('$', '').replace(/,/g, '')) || 0;

        // Load images
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        };

        Promise.all([
            loadImage('logo_mtk.png'),
            loadImage('whatsapp_icon.png')
        ]).then(([logoImg, whatsappImg]) => {
            // Add Logo (top left)
            doc.addImage(logoImg, 'PNG', 10, 10, 50, 20); // Adjust position and size as needed

            // Add WhatsApp icon (bottom right)
            doc.addImage(whatsappImg, 'PNG', doc.internal.pageSize.width - 30, doc.internal.pageSize.height - 30, 20, 20);

            // Header and Company Info
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('COTIZACIÓN DE SERVICIOS', doc.internal.pageSize.width / 2, 20, { align: 'center' });
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text('Macro Tecnologías Kernel', doc.internal.pageSize.width / 2, 28, { align: 'center' });
            doc.text('RFC: MTK010101ABC', doc.internal.pageSize.width / 2, 34, { align: 'center' });
            doc.text('Tel: +52 81 3847 4143', doc.internal.pageSize.width / 2, 40, { align: 'center' });
            doc.text('Email: contacto@mtkernel.com', doc.internal.pageSize.width / 2, 46, { align: 'center' });
            doc.text('Dirección: Monterrey, Nuevo León, México', doc.internal.pageSize.width / 2, 52, { align: 'center' });

            // Quote Details
            doc.setFontSize(10);
            doc.text(`No. de Cotización: ${quoteNumber}`, 150, 65);
            doc.text(`Fecha de Emisión: ${cotizacionFecha}`, 150, 70);

            // Client Details
            let clientY = 80;
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('Datos del Cliente:', 14, clientY);
            doc.setFont('helvetica', 'normal');
            doc.text(`Nombre: ${clienteNombre}`, 14, clientY + 7);
            if (clienteEmpresa !== 'N/A') doc.text(`Empresa: ${clienteEmpresa}`, 14, clientY + 14);
            if (clienteDireccion !== 'N/A') doc.text(`Dirección: ${clienteDireccion}`, 14, clientY + 21);
            if (clienteTelefono !== 'N/A') doc.text(`Teléfono: ${clienteTelefono}`, 14, clientY + 28);
            if (clienteCorreo !== 'N/A') doc.text(`Correo: ${clienteCorreo}`, 14, clientY + 35);


            // Items Table
            const startY = clientY + 45 + (clienteEmpresa !== 'N/A' ? 0 : -7) + (clienteDireccion !== 'N/A' ? 0 : -7) + (clienteTelefono !== 'N/A' ? 0 : -7) + (clienteCorreo !== 'N/A' ? 0 : -7) ;
            const headers = [['CÓDIGO', 'DESCRIPCIÓN', 'UNIDAD', 'CANTIDAD', 'P. UNITARIO', 'TOTAL']];
            const data = items.map(item => [
                item.code,
                item.description,
                item.unit,
                item.quantity.toLocaleString(),
                `$${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                `$${item.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            ]);

            doc.autoTable({
                startY: startY,
                head: headers,
                body: data,
                theme: 'striped',
                headStyles: { fillColor: [58, 58, 58], textColor: [255, 255, 255], fontStyle: 'bold' },
                styles: { fontSize: 9, cellPadding: 3, overflow: 'linebreak' },
                columnStyles: {
                    0: { cellWidth: 20 },
                    1: { cellWidth: 'auto' },
                    2: { cellWidth: 20 },
                    3: { cellWidth: 20, halign: 'right' },
                    4: { cellWidth: 25, halign: 'right' },
                    5: { cellWidth: 25, halign: 'right' }
                },
                didDrawPage: function (data) {
                    // Footer (page number)
                    let str = "Página " + doc.internal.getNumberOfPages();
                    doc.setFontSize(10);
                    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 10);
                }
            });

            // Totals
            const finalY = doc.autoTable.previous.finalY + 10; // Position below the table
            const totalLabelX = doc.internal.pageSize.width - 70; // X position for labels
            const totalValueX = doc.internal.pageSize.width - 15; // X position for values

            doc.setFontSize(10);
            doc.text(`Subtotal:`, totalLabelX, finalY, { align: 'right' });
            doc.text(`$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY, { align: 'right' });

            doc.text(`IVA (16%):`, totalLabelX, finalY + 7, { align: 'right' });
            doc.text(`$${iva.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY + 7, { align: 'right' });

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(`TOTAL:`, totalLabelX, finalY + 14, { align: 'right' });
            doc.text(`$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY + 14, { align: 'right' });
            doc.setFont('helvetica', 'normal'); // Reset font

            doc.save(`Cotizacion_Macro_Tecnologias_Kernel_Servicios_${cotizacionFecha.replace(/\//g, '-')}_${quoteNumber}.pdf`);

        }).catch(error => {
            console.error("Error al cargar logos o generar el PDF:", error);
            alert("Hubo un error al generar el PDF. Por favor, revisa la consola para más detalles.");
            // If logos fail, try to generate PDF without them
            // This part could be more robust to generate a basic PDF even if images fail
            const doc = new jsPDF(); // Re-initialize if error happened before doc was created
            doc.text("Error al cargar logos. Cotización generada sin imágenes.", 10, 10);
            // ... (add basic cotizacion content here if necessary)
            doc.save(`Cotizacion_Macro_Tecnologias_Kernel_Servicios_${cotizacionFecha.replace(/\//g, '-')}_${quoteNumber}_NoImages.pdf`);
        });
    };

    function initializeCotizadorFunctions() {
        const addItemBtn = document.getElementById('addItemBtn');
        const downloadPdfBtn = document.getElementById('downloadPdfBtn');
        const guardarClienteBtn = document.getElementById('guardarClienteBtn');
        const csvFileInput = document.getElementById('csvFileInput');
        const descargarCsvClientesBtn = document.getElementById('descargarCsvClientesBtn');
        const clienteNombreInput = document.getElementById('clienteNombre');
        const clienteCorreoInput = document.getElementById('clienteCorreo');

        if (addItemBtn) addItemBtn.addEventListener('click', addItem);
        if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', window.generarPDFGeneral);

        // Cliente management in cotizador (simplified - main management is in Base de Clientes)
        if (guardarClienteBtn) {
            guardarClienteBtn.addEventListener('click', saveClientDetails);
        }
        if (csvFileInput) {
            csvFileInput.addEventListener('change', handleCsvUploadClients); // Changed from handleCsvUpload
        }
        if (descargarCsvClientesBtn) {
            descargarCsvClientesBtn.addEventListener('click', downloadClientsCsv);
        }

        if (clienteNombreInput) clienteNombreInput.addEventListener('input', checkClientExistenceAndUpdateButton);
        if (clienteCorreoInput) clienteCorreoInput.addEventListener('input', checkClientExistenceAndUpdateButton);
        if (clienteNombreInput || clienteCorreoInput) {
            // Initial check when cotizador loads
            checkClientExistenceAndUpdateButton();
        }

        // Initialize totals calculation for existing items if any
        calculateTotals();
    }


    // *******************************************************************
    // GESTIÓN DE CLIENTES (ADMIN)
    // *******************************************************************

    function loadClients() {
        const storedClients = localStorage.getItem(CLIENTS_STORAGE_KEY);
        if (storedClients) {
            clients = JSON.parse(storedClients);
        } else {
            clients = [];
        }
        console.log('Clientes cargados:', clients);
    }

    function saveClients() {
        localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clients));
        console.log('Clientes guardados:', clients);
        renderClientsTable(); // Re-render table after saving
    }

    function findClient(nombre, correo) {
        return clients.find(client =>
            (nombre && client.nombre.toLowerCase() === nombre.toLowerCase()) ||
            (correo && client.correo && client.correo.toLowerCase() === correo.toLowerCase())
        );
    }

    function checkClientExistenceAndUpdateButton() {
        const clienteNombreInput = document.getElementById('clienteNombre');
        const clienteCorreoInput = document.getElementById('clienteCorreo');
        const guardarClienteBtn = document.getElementById('guardarClienteBtn');
        if (!clienteNombreInput || !clienteCorreoInput || !guardarClienteBtn) return;

        const nombre = clienteNombreInput.value.trim();
        const correo = clienteCorreoInput.value.trim();
        const existingClient = findClient(nombre, correo);

        const clienteEmpresaInput = document.getElementById('clienteEmpresa');
        const clienteDireccionInput = document.getElementById('clienteDireccion');
        const clienteTelefonoInput = document.getElementById('clienteTelefono');

        if (existingClient) {
            guardarClienteBtn.textContent = 'Actualizar Cliente Existente';
            guardarClienteBtn.classList.remove('btn-new-client');
            guardarClienteBtn.classList.add('btn-existing-client');
            if (clienteEmpresaInput && !clienteEmpresaInput.value && existingClient.empresa) clienteEmpresaInput.value = existingClient.empresa;
            if (clienteDireccionInput && !clienteDireccionInput.value && existingClient.direccion) clienteDireccionInput.value = existingClient.direccion;
            if (clienteTelefonoInput && !clienteTelefonoInput.value && existingClient.telefono) clienteTelefonoInput.value = existingClient.telefono;
        } else {
            guardarClienteBtn.textContent = 'Guardar Nuevo Cliente';
            guardarClienteBtn.classList.remove('btn-existing-client');
            guardarClienteBtn.classList.add('btn-new-client');
        }
    }

    function saveClientDetails() {
        const clienteNombreInput = document.getElementById('clienteNombre');
        const clienteEmpresaInput = document.getElementById('clienteEmpresa');
        const clienteDireccionInput = document.getElementById('clienteDireccion');
        const clienteTelefonoInput = document.getElementById('clienteTelefono');
        const clienteCorreoInput = document.getElementById('clienteCorreo');

        const nombre = clienteNombreInput.value.trim();
        const empresa = clienteEmpresaInput ? clienteEmpresaInput.value.trim() : '';
        const direccion = clienteDireccionInput ? clienteDireccionInput.value.trim() : '';
        const telefono = clienteTelefonoInput ? clienteTelefonoInput.value.trim() : '';
        const correo = clienteCorreoInput ? clienteCorreoInput.value.trim() : '';

        if (!nombre) {
            alert('El nombre del cliente es obligatorio.');
            return;
        }

        let existingClient = findClient(nombre, correo);

        if (existingClient) {
            existingClient.empresa = empresa;
            existingClient.direccion = direccion;
            existingClient.telefono = telefono;
            existingClient.correo = correo;
            alert('Cliente actualizado exitosamente.');
        } else {
            const newClient = { id: Date.now(), nombre, empresa, direccion, telefono, correo }; // Add unique ID
            clients.push(newClient);
            alert('Nuevo cliente guardado exitosamente.');
        }
        saveClients();
        // checkClientExistenceAndUpdateButton(); // This is for cotizador, might not be needed here directly
    }

    // New client management functions for Base de Clientes section
    function renderClientsTable(filterText = '') {
        const clientsTableBody = document.querySelector('#clientsTable tbody');
        if (!clientsTableBody) return;

        clientsTableBody.innerHTML = ''; // Clear existing rows

        const filteredClients = clients.filter(client =>
            client.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
            (client.correo && client.correo.toLowerCase().includes(filterText.toLowerCase()))
        );

        filteredClients.forEach(client => {
            const row = clientsTableBody.insertRow();
            row.setAttribute('data-id', client.id); // Store client ID
            row.innerHTML = `
                <td>${client.nombre}</td>
                <td>${client.empresa || ''}</td>
                <td>${client.telefono || ''}</td>
                <td>${client.correo || ''}</td>
                <td class="client-actions-cell">
                    <button class="edit-client-btn" data-id="${client.id}">Editar</button>
                    <button class="delete-client-btn" data-id="${client.id}">Eliminar</button>
                </td>
            `;
        });

        // Attach event listeners for edit and delete buttons
        clientsTableBody.querySelectorAll('.edit-client-btn').forEach(button => {
            button.addEventListener('click', (e) => editClient(e.target.dataset.id));
        });
        clientsTableBody.querySelectorAll('.delete-client-btn').forEach(button => {
            button.addEventListener('click', (e) => deleteClient(e.target.dataset.id));
        });
    }

    function showClientForm(client = null) {
        const formContainer = document.getElementById('clientFormContainer');
        const formTitle = document.getElementById('formTitle');
        const clientIdInput = document.getElementById('clientId');
        const clientFormNombre = document.getElementById('clientFormNombre');
        const clientFormEmpresa = document.getElementById('clientFormEmpresa');
        const clientFormDireccion = document.getElementById('clientFormDireccion');
        const clientFormTelefono = document.getElementById('clientFormTelefono');
        const clientFormCorreo = document.getElementById('clientFormCorreo');

        if (!formContainer || !formTitle || !clientIdInput || !clientFormNombre || !clientFormEmpresa || !clientFormDireccion || !clientFormTelefono || !clientFormCorreo) {
            console.error('One or more client form elements not found.');
            return;
        }

        formContainer.style.display = 'block'; // Show the form

        if (client) {
            formTitle.textContent = 'Editar Cliente';
            clientIdInput.value = client.id;
            clientFormNombre.value = client.nombre;
            clientFormEmpresa.value = client.empresa || '';
            clientFormDireccion.value = client.direccion || '';
            clientFormTelefono.value = client.telefono || '';
            clientFormCorreo.value = client.correo || '';
        } else {
            formTitle.textContent = 'Añadir Cliente';
            clientIdInput.value = '';
            clientFormNombre.value = '';
            clientFormEmpresa.value = '';
            clientFormDireccion.value = '';
            clientFormTelefono.value = '';
            clientFormCorreo.value = '';
        }
    }

    function hideClientForm() {
        const formContainer = document.getElementById('clientFormContainer');
        if (formContainer) {
            formContainer.style.display = 'none';
        }
    }

    function saveClientForm() {
        const clientId = document.getElementById('clientId').value;
        const clientFormNombre = document.getElementById('clientFormNombre').value.trim();
        const clientFormEmpresa = document.getElementById('clientFormEmpresa').value.trim();
        const clientFormDireccion = document.getElementById('clientFormDireccion').value.trim();
        const clientFormTelefono = document.getElementById('clientFormTelefono').value.trim();
        const clientFormCorreo = document.getElementById('clientFormCorreo').value.trim();

        if (!clientFormNombre) {
            alert('El nombre del cliente es obligatorio.');
            return;
        }

        if (clientId) {
            // Editing existing client
            const index = clients.findIndex(c => c.id == clientId);
            if (index !== -1) {
                clients[index] = {
                    id: parseInt(clientId),
                    nombre: clientFormNombre,
                    empresa: clientFormEmpresa,
                    direccion: clientFormDireccion,
                    telefono: clientFormTelefono,
                    correo: clientFormCorreo
                };
                alert('Cliente actualizado exitosamente.');
            }
        } else {
            // Adding new client
            const newClient = {
                id: Date.now(), // Unique ID
                nombre: clientFormNombre,
                empresa: clientFormEmpresa,
                direccion: clientFormDireccion,
                telefono: clientFormTelefono,
                correo: clientFormCorreo
            };
            clients.push(newClient);
            alert('Nuevo cliente añadido exitosamente.');
        }
        saveClients();
        hideClientForm();
    }

    function editClient(id) {
        const client = clients.find(c => c.id == id);
        if (client) {
            showClientForm(client);
        }
    }

    function deleteClient(id) {
        if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
            clients = clients.filter(client => client.id != id);
            saveClients();
            alert('Cliente eliminado.');
        }
    }

    function handleCsvUploadClients(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            const lines = text.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
            const newClients = [];
            let headers = [];

            // Determine if the first line is a header
            let startIndex = 0;
            if (lines.length > 0 && (lines[0].includes('nombre') || lines[0].includes('empresa'))) {
                headers = lines[0].split(',').map(h => h.trim().toLowerCase());
                startIndex = 1;
            } else {
                // Assume default order if no clear header is present
                headers = ['nombre', 'empresa', 'direccion', 'telefono', 'correo'];
            }

            for (let i = startIndex; i < lines.length; i++) {
                const values = lines[i].split(',').map(v => v.trim());
                if (values.some(v => v !== '')) { // Only process non-empty lines
                    const client = {};
                    headers.forEach((header, index) => {
                        client[header] = values[index] || '';
                    });
                    client.id = Date.now() + i; // Unique ID
                    newClients.push(client);
                }
            }
            clients = [...clients, ...newClients.filter(nc => !findClient(nc.nombre, nc.correo))]; // Add only new clients
            saveClients();
            alert('Clientes cargados desde CSV.');
            event.target.value = ''; // Clear file input
        };
        reader.readAsText(file);
    }


    function downloadClientsCsv() {
        if (clients.length === 0) {
            alert('No hay clientes para descargar.');
            return;
        }

        const headers = ['id', 'nombre', 'empresa', 'direccion', 'telefono', 'correo'];
        const csvRows = [];
        csvRows.push(headers.join(',')); // Add header row

        clients.forEach(client => {
            const row = headers.map(header => {
                const value = client[header] || '';
                // Enclose values with commas or newlines in quotes
                return `"${String(value).replace(/"/g, '""')}"`;
            });
            csvRows.push(row.join(','));
        });

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'clientes_macro_tecnologias_kernel.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    function initializeClientBaseFunctions() {
        loadClients();
        renderClientsTable();

        const addClientBtn = document.getElementById('addClientBtn');
        const saveClientFormBtn = document.getElementById('saveClientFormBtn');
        const cancelClientFormBtn = document.getElementById('cancelClientFormBtn');
        const csvFileInputClients = document.getElementById('csvFileInputClients');
        const downloadCsvClientsBtn = document.getElementById('downloadCsvClientsBtn');
        const clientSearchInput = document.getElementById('clientSearchInput');

        if (addClientBtn) addClientBtn.addEventListener('click', () => showClientForm());
        if (saveClientFormBtn) saveClientFormBtn.addEventListener('click', saveClientForm);
        if (cancelClientFormBtn) cancelClientFormBtn.addEventListener('click', hideClientForm);
        if (csvFileInputClients) csvFileInputClients.addEventListener('change', handleCsvUploadClients);
        if (downloadCsvClientsBtn) downloadCsvClientsBtn.addEventListener('click', downloadClientsCsv);
        if (clientSearchInput) {
            clientSearchInput.addEventListener('input', (e) => {
                renderClientsTable(e.target.value.trim());
            });
        }
    }


    // *******************************************************************
    // INICIALIZACIÓN GLOBAL
    // *******************************************************************

    // Event listeners para login
    if (loginBtn) loginBtn.addEventListener('click', authenticateUser);
    if (usernameInput) usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') authenticateUser();
    });
    if (passwordInput) passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') authenticateUser();
    });

    // Al cargar la página, verificar si el usuario ya está logueado
    const storedRole = sessionStorage.getItem('userRole');
    if (storedRole) {
        showAppContent(storedRole);
        // Special handling for admin sections to initialize their specific functions
        if (storedRole === 'admin') {
            const dynamicContentArea = document.getElementById('dynamicContentArea');
            // Re-inject the correct admin section and initialize if user returns to admin sections
            // This assumes the admin user might land on a specific admin section directly
            // For now, it will default to welcome, but if user navigated, we need to re-render
            const currentPath = window.location.hash; // Or some other way to track where they were
            if (currentPath.includes('cotizador')) {
                dynamicContentArea.innerHTML = cotizadorAdminHTML;
                initializeCotizadorFunctions();
            } else if (currentPath.includes('clientes')) {
                dynamicContentArea.innerHTML = baseClientesHTML;
                initializeClientBaseFunctions();
            } else {
                dynamicContentArea.innerHTML = adminWelcomeHTML;
            }
        }
    }
});