
function cotizarAltura() {
  const metros = parseInt(document.getElementById("metros").value);
  const total = metros * 40;
  document.getElementById("resultado-altura").innerText = `Total: $${total} MXN por ${metros} m²`;
}
