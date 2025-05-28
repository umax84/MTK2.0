
function cotizarAlturas() {
  const m2 = +document.getElementById("metros").value;
  const nivel = +document.getElementById("pisos").value;
  const precio = nivel === 3 ? 55 : nivel === 2 ? 48 : 40;
  const total = m2 * precio;
  document.getElementById("resultado-alturas").innerText = `Total: $${total} MXN (${m2} m² x $${precio}/m²)`;
}
