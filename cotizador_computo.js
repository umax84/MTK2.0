
function cotizarComputo() {
  const equipos = parseInt(document.getElementById("equipos").value);
  const total = equipos * (250 + 480 + 1500 + 200);
  document.getElementById("resultado-computo").innerText = `Total: $${total} MXN para ${equipos} equipos`;
}
