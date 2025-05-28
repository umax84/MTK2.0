<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

function cotizarComputo() {
  const d = +document.getElementById("diag").value;
  const v = +document.getElementById("virus").value;
  const r = +document.getElementById("redes").value;
  const s = +document.getElementById("soporte").value;
  const total = d*250 + v*480 + r*1500 + s*200;
  document.getElementById("resultado-computo").innerHTML = `
    <p>Diagnóstico: $${d*250}<br>Virus: $${v*480}<br>Redes: $${r*1500}<br>Soporte: $${s*200}<br><strong>Total: $${total}</strong></p>`;
}

function cotizarAlturas() {
  const metros = +document.getElementById("metros").value;
  const pisos = +document.getElementById("pisos").value;
  const precio = pisos === 3 ? 55 : pisos === 2 ? 48 : 40;
  const total = metros * precio;
  document.getElementById("resultado-alturas").innerHTML = `<p>Total: $${total} MXN (${metros} m² x $${precio}/m²)</p>`;
}

function cotizarEvento() {
  const mesas = +document.getElementById("mesas").value;
  const sillas = +document.getElementById("sillas").value;
  const toldos = +document.getElementById("toldos").value;
  const hieleras = +document.getElementById("hieleras").value;
  const total = mesas*200 + sillas*15 + toldos*300 + hieleras*300;
  document.getElementById("resultado-evento").innerHTML = `
    <p>Mesas: $${mesas*200}<br>Sillas: $${sillas*15}<br>Toldos: $${toldos*300}<br>Hieleras: $${hieleras*300}<br><strong>Total: $${total}</strong></p>`;
}


function cotizarComputo() {
    const diag = parseInt(document.getElementById("diag").value) || 0;
    const virus = parseInt(document.getElementById("virus").value) || 0;
    const redes = parseInt(document.getElementById("redes").value) || 0;
    const soporte = parseInt(document.getElementById("soporte").value) || 0;

    const subtotal =
        diag * 250 +
        virus * 480 +
        redes * 1500 +
        soporte * 200;
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    let resultado = "<h2>Resumen de Cotización</h2>";
    if (diag > 0) resultado += `<p>Diagnóstico: ${diag} x $250 = $${diag * 250}</p>`;
    if (virus > 0) resultado += `<p>Virus: ${virus} x $480 = $${virus * 480}</p>`;
    if (redes > 0) resultado += `<p>Redes: ${redes} x $1500 = $${redes * 1500}</p>`;
    if (soporte > 0) resultado += `<p>Soporte remoto: ${soporte} x $200 = $${soporte * 200}</p>`;
    resultado += `<p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>`;
    resultado += `<p><strong>IVA (16%):</strong> $${iva.toFixed(2)}</p>`;
    resultado += `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;

    document.getElementById("resultado-computo").innerHTML = resultado;

    document.getElementById("descargar-pdf-computo").style.display = "inline-block";
}

function descargarPDFComputo() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const vendedor = Math.random() > 0.5 ? "Raúl García" : "Diego Luna";
    const fecha = new Date();
    const vigencia = new Date(fecha);
    vigencia.setDate(fecha.getDate() + 7);

    const diag = parseInt(document.getElementById("diag").value) || 0;
    const virus = parseInt(document.getElementById("virus").value) || 0;
    const redes = parseInt(document.getElementById("redes").value) || 0;
    const soporte = parseInt(document.getElementById("soporte").value) || 0;

    const subtotal =
        diag * 250 +
        virus * 480 +
        redes * 1500 +
        soporte * 200;
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    doc.setFont("Arial", "bold");
    doc.setFontSize(20);
    doc.text("MTK", 10, 20);

    doc.setFontSize(10);
    doc.text("Macro Tecnologías Kernel S.A.S de C.V.", 10, 30);
    doc.text("ventas@macrotek.com.mx", 10, 35);
    doc.text(`Fecha: ${fecha.toLocaleDateString()}`, 10, 40);
    doc.text(`Vigencia: ${vigencia.toLocaleDateString()}`, 10, 45);
    doc.text(`Vendedor: ${vendedor}`, 10, 50);

    doc.setFontSize(16);
    doc.text("Macro Tecnologías Kernel S.A.S de C.V.", 105, 30, null, null, "center");
    doc.setFontSize(14);
    doc.text("Cotización", 105, 38, null, null, "center");

    let y = 60;
    if (diag > 0) doc.text(`Diagnóstico: ${diag} x $250 = $${diag * 250}`, 10, y += 10);
    if (virus > 0) doc.text(`Virus: ${virus} x $480 = $${virus * 480}`, 10, y += 10);
    if (redes > 0) doc.text(`Redes: ${redes} x $1500 = $${redes * 1500}`, 10, y += 10);
    if (soporte > 0) doc.text(`Soporte remoto: ${soporte} x $200 = $${soporte * 200}`, 10, y += 10);

    y += 10;
    doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, y += 10);
    doc.text(`IVA (16%): $${iva.toFixed(2)}`, 10, y += 10);
    doc.text(`Total: $${total.toFixed(2)}`, 10, y += 10);

    doc.save("cotizacion_computo.pdf");
}


function mostrarBotonPDF() {
    document.getElementById("descargar-pdf-computo").style.display = "inline-block";
}

function descargarPDFComputo() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const vendedor = Math.random() > 0.5 ? "Raúl García" : "Diego Luna";
    const fecha = new Date();
    const vigencia = new Date(fecha);
    vigencia.setDate(fecha.getDate() + 7);

    const diag = parseInt(document.getElementById("diag").value) || 0;
    const virus = parseInt(document.getElementById("virus").value) || 0;
    const redes = parseInt(document.getElementById("redes").value) || 0;
    const soporte = parseInt(document.getElementById("soporte").value) || 0;

    const subtotal =
        diag * 250 +
        virus * 480 +
        redes * 1500 +
        soporte * 200;
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("MTK", 10, 20);

    doc.setFontSize(12);
    doc.text("Macro Tecnologías Kernel S.A.S de C.V.", 10, 30);
    doc.text("ventas@macrotek.com.mx", 10, 36);
    doc.text(`Fecha: ${fecha.toLocaleDateString()}`, 10, 42);
    doc.text(`Vigencia: ${vigencia.toLocaleDateString()}`, 10, 48);
    doc.text(`Vendedor: ${vendedor}`, 10, 54);

    doc.setFontSize(16);
    doc.text("Macro Tecnologías Kernel S.A.S de C.V.", 105, 30, null, null, "center");
    doc.setFontSize(14);
    doc.text("Cotización", 105, 38, null, null, "center");

    let y = 70;
    if (diag > 0) doc.text(`Diagnóstico: ${diag} x $250 = $${diag * 250}`, 10, y += 10);
    if (virus > 0) doc.text(`Virus: ${virus} x $480 = $${virus * 480}`, 10, y += 10);
    if (redes > 0) doc.text(`Redes: ${redes} x $1500 = $${redes * 1500}`, 10, y += 10);
    if (soporte > 0) doc.text(`Soporte remoto: ${soporte} x $200 = $${soporte * 200}`, 10, y += 10);

    y += 10;
    doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, y += 10);
    doc.text(`IVA (16%): $${iva.toFixed(2)}`, 10, y += 10);
    doc.text(`Total: $${total.toFixed(2)}`, 10, y += 10);

    doc.save("cotizacion_computo.pdf");
}
