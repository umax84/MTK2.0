
function cotizarComputo() {
  const d = +document.getElementById("diag").value;
  const v = +document.getElementById("virus").value;
  const r = +document.getElementById("redes").value;
  const s = +document.getElementById("soporte").value;
  const total = d*250 + v*480 + r*1500 + s*200;
  document.getElementById("resultado-computo").innerHTML = `
    <p>Diagnóstico: $${d*250}<br>
    Virus/Malware: $${v*480}<br>
    Redes: $${r*1500}<br>
    Soporte: $${s*200}<br><strong>Total: $${total}</strong></p>`;
}
