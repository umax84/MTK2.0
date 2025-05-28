
function calcularCosto() {
  const paquete = parseInt(document.getElementById('paquete').value);
  const sillasExtra = parseInt(document.getElementById('sillasExtra').value);
  const toldos = parseInt(document.getElementById('toldos').value);
  const hieleras = parseInt(document.getElementById('hieleras').value);

  const basePrecio = 200;
  const descuentos = {2: 1.00, 4: 0.96, 6: 0.92, 8: 0.88, 10: 0.84};

  const precioPorPaquete = basePrecio * descuentos[paquete];
  const costoMesasSillas = precioPorPaquete * paquete;
  const costoSillasExtra = sillasExtra * 15;
  const costoToldos = toldos * 300;
  const costoHieleras = hieleras * 300;
  const costoTotal = costoMesasSillas + costoSillasExtra + costoToldos + costoHieleras;

  const resultado = `Costo total: $${costoTotal.toFixed(2)} MXN\n
    (Mesas: $${costoMesasSillas.toFixed(2)} + Sillas extra: $${costoSillasExtra.toFixed(2)} + Toldos: $${costoToldos.toFixed(2)} + Hieleras: $${costoHieleras.toFixed(2)})`;

  document.getElementById('resultado').innerText = resultado;
}

function descargarPDF() {
  const resultado = document.getElementById('resultado').innerText;
  const blob = new Blob([resultado], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cotizacion_sillas_mesas.pdf";
  link.click();
}
