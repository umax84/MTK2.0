
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
