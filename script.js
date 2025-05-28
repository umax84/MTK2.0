function calcularPaneles() {
  const costoRecibo = parseFloat(document.getElementById("recibo").value);
  const horasSol = parseFloat(document.getElementById("horas").value);
  const tipoPanel = document.getElementById("tipoPanel").value;
  const periodo = document.getElementById("periodo").value;

  if (isNaN(costoRecibo) || isNaN(horasSol) || costoRecibo <= 0 || horasSol <= 0) {
    document.getElementById("resultado").innerHTML = "<p style='color:red'>Por favor ingresa valores válidos.</p>";
    document.getElementById("botonPDF").style.display = "none";
    return;
  }

  const potencia = parseInt(tipoPanel);
  const costoPorWatt = 8000 / 620;
  const costoPorPanel = potencia * costoPorWatt;
  const costoPorKWh = 2.87;

  let dias, ahorroMensual;
  switch (periodo) {
    case "mensual": dias = 30; ahorroMensual = costoRecibo; break;
    case "bimestral": dias = 60; ahorroMensual = costoRecibo / 2; break;
    case "semestral": dias = 180; ahorroMensual = costoRecibo / 6; break;
    case "anual": dias = 365; ahorroMensual = costoRecibo / 12; break;
  }

  const consumoPeriodo = costoRecibo / costoPorKWh;
  const consumoDiario = consumoPeriodo / dias;
  const produccionPorPanel = (potencia / 1000) * horasSol;
  const cantidadPaneles = Math.ceil(consumoDiario / produccionPorPanel);
  const precio = cantidadPaneles * costoPorPanel;
  const precioConIVA = precio * 1.16;
  const retornoMeses = Math.ceil(precioConIVA / ahorroMensual);

  document.getElementById("resultado").innerHTML = `
    <div style="text-align: left; background-color: #385738; padding: 15px; border-radius: 10px;">
      <h3 style="text-align: center; color: #aaffaa">Cotización estimada</h3>
      <table style="width: 100%; color: #e0ffe0; border-spacing: 10px;">
        <tr><td>Tipo de panel seleccionado:</td><td style="text-align: right;">${potencia}W</td></tr>
        <tr><td>Periodo del recibo:</td><td style="text-align: right;">${periodo}</td></tr>
        <tr><td>Cantidad de paneles:</td><td style="text-align: right;">${cantidadPaneles}</td></tr>
        <tr><td>Costo estimado sin IVA:</td><td style="text-align: right;">$${precio.toLocaleString()}</td></tr>
        <tr><td>Costo total con IVA:</td><td style="text-align: right;">$${precioConIVA.toLocaleString()}</td></tr>
        <tr><td>Retorno de inversión estimado:</td><td style="text-align: right;">${retornoMeses} mes(es)</td></tr>
      </table>
    </div>
  `;
  document.getElementById("botonPDF").style.display = "block";

  window._datosCotizacion = {
    potencia, periodo, cantidadPaneles, precio, precioConIVA, retornoMeses
  };
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const datos = window._datosCotizacion;

  if (!datos) {
    alert("Primero realiza una cotización.");
    return;
  }

  const nombres = ["Raúl García Robles", "Edgar Adrián Martínez Garza", "Diego Luna Cepeda"];
  const vendedor = nombres[Math.floor(Math.random() * nombres.length)];
  const fechaHoy = new Date();
  const fechaFormateada = fechaHoy.toLocaleDateString();
  const vigencia = new Date(fechaHoy.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
  const numeroCotizacion = Math.floor(800 + Math.random() * 1000);

  const inversor = 9000;
  const bloquesEstructura = Math.ceil(datos.cantidadPaneles / 4);
  const estructuraTotal = bloquesEstructura * 2500;

  const subtotal = datos.precio + inversor + estructuraTotal;
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  let y = 20;
  doc.setFontSize(12);
  doc.text("Macro Tecnologías Kernel S.A.S. de C.V.", 10, y); y += 6;
  doc.text("Correo: ventas@macrotek.com.mx", 10, y); y += 6;
  doc.text(`Vendedor: ${vendedor}`, 10, y); y += 6;
  doc.text(`Fecha de emisión: ${fechaFormateada}`, 10, y); y += 6;
  doc.text(`Vigencia hasta: ${vigencia}`, 10, y); y += 6;
  doc.text(`Cotización No: ${numeroCotizacion}`, 10, y); y += 10;

  doc.setFontSize(14);
  doc.text("COTIZACIÓN", 85, y); y += 10;

  doc.setFontSize(11);
  doc.text("CÓDIGO     DESCRIPCIÓN                                         CANT.   P. UNIT     TOTAL", 10, y); y += 6;

  const agregarFila = (codigo, descripcion, cantidad, precioUnitario) => {
    const totalItem = cantidad * precioUnitario;
    doc.text(`${codigo}     ${descripcion}`, 10, y);
    doc.text(`${cantidad}`, 135, y, { align: "right" });
    doc.text(`$${precioUnitario.toLocaleString()}`, 155, y, { align: "right" });
    doc.text(`$${totalItem.toLocaleString()}`, 195, y, { align: "right" });
    y += 6;
  };

  agregarFila("PANEL", `Panel solar ${datos.potencia}W`, datos.cantidadPaneles, datos.precio / datos.cantidadPaneles);
  agregarFila("INV9000", "Inversor solar", 1, inversor);
  agregarFila("EST2500", "Ángulo + clamps + tornillería", bloquesEstructura, 2500);

  y += 10;
  doc.text(`Subtotal: $${subtotal.toLocaleString()}`, 150, y, { align: "right" }); y += 6;
  doc.text(`IVA (16%): $${iva.toLocaleString()}`, 150, y, { align: "right" }); y += 6;
  doc.setFontSize(13);
  doc.text(`TOTAL: $${total.toLocaleString()}`, 150, y, { align: "right" }); y += 10;

  doc.setFontSize(11);
  doc.text(`Realizado por: ${vendedor}`, 10, y);
  doc.save("cotizacion_mtk.pdf");
}
