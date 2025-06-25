document.addEventListener('DOMContentLoaded', () => {
    // Variable para contar los ítems y asignar ID único
    let itemCounter = 0;

    // Se establece como cadena vacía para NO cargar ninguna imagen del logo en el PDF
    const logoBase64 = ''; // O se podría usar null; esto asegura que no se intentará cargar una imagen.

    // Función para generar un número de cotización aleatorio (6 dígitos)
    function generateQuoteNumber() {
        return Math.floor(100000 + Math.random() * 900000); // Genera un número entre 100000 y 999999
    }

    // Función para añadir una nueva fila de ítem a la tabla
    function addItem() {
        itemCounter++;
        const tableBody = document.querySelector('#itemsTable tbody');
        const newRow = tableBody.insertRow();
        newRow.id = `row-${itemCounter}`;

        // Celda Código
        const codeCell = newRow.insertCell();
        const codeInput = document.createElement('input');
        codeInput.type = 'text';
        codeInput.placeholder = 'Código';
        codeInput.className = 'item-code';
        codeCell.appendChild(codeInput);

        // Celda Descripción
        const descCell = newRow.insertCell();
        const descInput = document.createElement('input');
        descInput.type = 'text';
        descInput.placeholder = 'Descripción';
        descInput.className = 'item-desc';
        descCell.appendChild(descInput);

        // Celda Unidad
        const unitCell = newRow.insertCell();
        const unitInput = document.createElement('input');
        unitInput.type = 'text';
        unitInput.placeholder = 'Unidad';
        unitInput.className = 'item-unit';
        unitCell.appendChild(unitInput);

        // Celda Cantidad
        const quantityCell = newRow.insertCell();
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '0';
        quantityInput.value = '1';
        quantityInput.placeholder = 'Cantidad';
        quantityInput.className = 'item-quantity';
        quantityInput.addEventListener('input', calculateTotals); // Recalcula al cambiar cantidad
        quantityCell.appendChild(quantityInput);

        // Celda Precio Unitario
        const priceCell = newRow.insertCell();
        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.min = '0';
        priceInput.step = '0.01';
        priceInput.value = '0.00';
        priceInput.placeholder = 'Precio';
        priceInput.className = 'item-price';
        priceInput.addEventListener('input', calculateTotals); // Recalcula al cambiar precio
        priceCell.appendChild(priceInput);

        // Celda Total por Ítem
        const itemTotalCell = newRow.insertCell();
        const itemTotalSpan = document.createElement('span');
        itemTotalSpan.className = 'item-total-display';
        itemTotalSpan.textContent = '0.00';
        itemTotalCell.appendChild(itemTotalSpan);

        // Celda Acción (Eliminar)
        const actionCell = newRow.insertCell();
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', () => removeItem(newRow.id));
        actionCell.appendChild(removeBtn);

        calculateTotals(); // Recalcula los totales después de añadir una fila
    }

    // Función para eliminar una fila de ítem de la tabla
    function removeItem(rowId) {
        document.getElementById(rowId).remove();
        calculateTotals(); // Recalcula los totales después de eliminar una fila
    }

    // Función para calcular los totales (Subtotal, IVA, Total)
    function calculateTotals() {
        let subtotal = 0;
        const itemRows = document.querySelectorAll('#itemsTable tbody tr'); // Select all item rows

        itemRows.forEach(row => {
            const quantityInput = row.querySelector('.item-quantity');
            const priceInput = row.querySelector('.item-price');
            const itemTotalDisplay = row.querySelector('.item-total-display');

            const quantity = parseFloat(quantityInput.value) || 0;
            const price = parseFloat(priceInput.value) || 0;

            const itemTotal = quantity * price;
            itemTotalDisplay.textContent = itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            subtotal += itemTotal;
        });

        const ivaRate = 0.16;
        const iva = subtotal * ivaRate;
        const total = subtotal + iva;

        // Actualizar los valores en la sección de resumen
        const subtotalAmountSpan = document.getElementById('subtotalAmount');
        const ivaAmountSpan = document.getElementById('ivaAmount');
        const totalAmountSpan = document.getElementById('totalAmount');

        if (subtotalAmountSpan) {
            subtotalAmountSpan.textContent = `$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        if (ivaAmountSpan) {
            ivaAmountSpan.textContent = `$${iva.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        if (totalAmountSpan) {
            totalAmountSpan.textContent = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
    }

    // Función para generar la cotización en PDF
    function generateQuotePdf() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Datos del cliente
        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientCompany = document.getElementById('clientCompany').value;
        const clientPhone = document.getElementById('clientPhone').value;

        // Validar que al menos el nombre del cliente esté presente
        if (!clientName) {
            alert('Por favor, ingrese el nombre del cliente para generar la cotización.');
            return;
        }

        // Datos de la tabla de ítems
        const items = [];
        const itemRows = document.querySelectorAll('#itemsTable tbody tr');
        itemRows.forEach(row => {
            const code = row.querySelector('.item-code').value;
            const description = row.querySelector('.item-desc').value;
            const unit = row.querySelector('.item-unit').value;
            const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
            const price = parseFloat(row.querySelector('.item-price').value) || 0;
            const total = quantity * price;
            if (description && quantity > 0 && price > 0) { // Solo añadir ítems válidos
                items.push([code, description, unit, quantity.toLocaleString(), `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`]);
            }
        });

        if (items.length === 0) {
            alert('Por favor, añada al menos un ítem a la cotización.');
            return;
        }

        // Asegurarse de que los elementos de totales existan antes de acceder a su textContent
        const subtotalElement = document.getElementById('subtotalAmount');
        const ivaElement = document.getElementById('ivaAmount');
        const totalElement = document.getElementById('totalAmount');

        if (!subtotalElement || !ivaElement || !totalElement) {
            console.error("Elementos de totales no encontrados. No se puede generar el PDF.");
            alert("No se pudieron cargar los totales para generar la cotización. Por favor, recargue la página.");
            return;
        }

        const subtotal = parseFloat(subtotalElement.textContent.replace('$', '').replace(/,/g, ''));
        const iva = parseFloat(ivaElement.textContent.replace('$', '').replace(/,/g, ''));
        const total = parseFloat(totalElement.textContent.replace('$', '').replace(/,/g, ''));

        // Obtener la fecha actual
        const today = new Date();
        const emissionDate = today.toLocaleDateString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const quoteNumber = generateQuoteNumber();

        // Configuración del PDF
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');

        // Encabezado
        // Si logoBase64 es una cadena vacía, se ejecutará el 'else' y se dibujará el texto "MTK"
        if (logoBase64) { // Esta condición ahora será false porque logoBase64 está vacío
            doc.addImage(logoBase64, 'PNG', 15, 10, 40, 20); // Código que ya no se ejecutará
        } else {
            // Dibuja el texto "MTK" en lugar del logo
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.text('MTK', 15, 25); // Posición del texto "MTK"
            doc.setFontSize(10); // Restablecer tamaño de fuente
            doc.setFont('helvetica', 'normal'); // Restablecer estilo de fuente
        }

        doc.text('MTK Macro Tecnologías Kernel', 200, 15, { align: 'right' });
        doc.text('Av. Paseo de los Leones #123', 200, 20, { align: 'right' });
        doc.text('Monterrey, N.L., México', 200, 25, { align: 'right' });
        doc.text('Tel: +52 81 1234 5678', 200, 30, { align: 'right' });
        doc.text('Email: soporte@mtkenergia.com', 200, 35, { align: 'right' });

        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('COTIZACIÓN DE SERVICIOS', 105, 50, { align: 'center' });

        // Información de la cotización
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Fecha de Emisión: ${emissionDate}`, 15, 65);
        doc.text(`Número de Cotización: ${quoteNumber}`, 15, 70);

        // Información del Cliente
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Información del Cliente:', 15, 80);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Nombre: ${clientName}`, 15, 87);
        if (clientCompany) doc.text(`Empresa: ${clientCompany}`, 15, 92);
        if (clientEmail) doc.text(`Correo: ${clientEmail}`, 15, 97);
        if (clientPhone) doc.text(`Teléfono: ${clientPhone}`, 15, 102);

        // Tabla de ítems
        const startY = 115;
        doc.autoTable({
            startY: startY,
            head: [['Código', 'Descripción', 'Unidad', 'Cantidad', 'Precio Unitario', 'Total']],
            body: items,
            theme: 'striped',
            styles: {
                font: 'helvetica',
                fontSize: 8,
                cellPadding: 3,
                valign: 'middle',
                halign: 'left'
            },
            headStyles: {
                fillColor: [47, 79, 79], // dark-metal RGB
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center'
            },
            columnStyles: {
                4: { halign: 'right' },
                5: { halign: 'right' }
            },
            didDrawPage: function (data) {
                // Footer para cada página (ej. número de página)
                doc.setFontSize(8);
                doc.text(`Página ${data.pageNumber} de ${doc.internal.pages.length - 1}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
            }
        });

        // Resumen de totales
        let finalY = doc.autoTable.previous.finalY;
        finalY = finalY > (doc.internal.pageSize.height - 70) ? (doc.internal.pageSize.height - 70) : finalY; // Asegura espacio si la tabla es corta

        const totalLabelX = doc.autoTable.previous.columns[4].x + doc.autoTable.previous.columns[4].width - 15; // Ajusta la posición de las etiquetas de total
        const totalValueX = doc.autoTable.previous.columns[5].x + doc.autoTable.previous.columns[5].width;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Subtotal:`, totalLabelX, finalY + 7, { align: 'right' });
        doc.text(`$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY + 7, { align: 'right' });

        doc.text(`IVA (16%):`, totalLabelX, finalY + 13, { align: 'right' });
        doc.text(`$${iva.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY + 13, { align: 'right' });

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`TOTAL:`, totalLabelX, finalY + 22, { align: 'right' });
        doc.text(`$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, totalValueX, finalY + 22, { align: 'right' });
        doc.setFont('helvetica', 'normal'); // Restablecer la fuente

        // Firma y notas (opcional)
        doc.setFontSize(9);
        doc.text("Gracias por su interés en MTK Energía Solar. ¡Estamos para servirle!", 15, finalY + 35);
        doc.text("Este documento es una cotización y no un compromiso de compra.", 15, finalY + 40);

        doc.save(`Cotizacion_MTK_Servicios_${emissionDate.replace(/\//g, '-')}_${quoteNumber}.pdf`);
    }

    // Event Listeners for the Cotizador
    const addItemBtn = document.getElementById('addItemBtn');
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');
    const itemsTableBody = document.querySelector('#itemsTable tbody');
    const quoteForm = document.getElementById('quoteForm');

    if (addItemBtn) addItemBtn.addEventListener('click', addItem);
    if (generateQuoteBtn) generateQuoteBtn.addEventListener('click', generateQuotePdf);

    // This listener handles changes in quantity/price fields within the table
    if (itemsTableBody) {
        itemsTableBody.addEventListener('input', (event) => {
            if (event.target.classList.contains('item-quantity') || event.target.classList.contains('item-price')) {
                calculateTotals();
            }
        });
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            generateQuotePdf();
        });
    }

    // Client Selection Buttons (Cotizador)
    const newClientBtn = document.getElementById('newClientBtn');
    const existingClientBtn = document.getElementById('existingClientBtn');
    const clientNumberGroup = document.getElementById('clientNumberGroup');
    const clientNameInput = document.getElementById('clientName');
    const clientEmailInput = document.getElementById('clientEmail');
    const clientCompanyInput = document.getElementById('clientCompany');
    const clientPhoneInput = document.getElementById('clientPhone');

    if (newClientBtn) {
        newClientBtn.addEventListener('click', () => {
            clientNumberGroup.style.display = 'none';
            quoteForm.reset(); // Reset form for new client
            // Clear current items in the table
            if (itemsTableBody) itemsTableBody.innerHTML = '';
            itemCounter = 0; // Reset item counter
            calculateTotals(); // Recalculate totals
            clientNameInput.focus();
        });
    }

    if (existingClientBtn) {
        existingClientBtn.addEventListener('click', () => {
            clientNumberGroup.style.display = 'block';
            // Aquí implementarías la lógica para cargar datos de cliente existente
            // Por ahora, solo muestra el campo de entrada
        });
    }

    // Initial item and totals setup
    addItem(); // Add one initial item row when cotizador loads
    calculateTotals(); // Initial calculation of totals
});