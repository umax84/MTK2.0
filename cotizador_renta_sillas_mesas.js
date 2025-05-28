
function calcularCosto() {
  const paquete = parseInt(document.getElementById('paquete').value);
  const sillasExtra = parseInt(document.getElementById('sillasExtra').value);
  const toldos = parseInt(document.getElementById('toldos').value);
  const hieleras = parseInt(document.getElementById('hieleras').value);
  const costoTotal = paquete * 200 + sillasExtra * 15 + toldos * 300 + hieleras * 300;
  document.getElementById('resultado').innerText = `Costo total: $${costoTotal}`;
}
