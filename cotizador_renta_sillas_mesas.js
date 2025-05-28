
function cotizarEvento() {
  const mesas = +document.getElementById("mesas").value;
  const sillas = +document.getElementById("sillas").value;
  const toldos = +document.getElementById("toldos").value;
  const hieleras = +document.getElementById("hieleras").value;
  const total = mesas*200 + sillas*15 + toldos*300 + hieleras*300;
  document.getElementById("resultado-evento").innerHTML = `
    <p>Mesas: $${mesas*200}<br>Sillas extra: $${sillas*15}<br>
    Toldos: $${toldos*300}<br>Hieleras: $${hieleras*300}<br>
    <strong>Total: $${total}</strong></p>`;
}
