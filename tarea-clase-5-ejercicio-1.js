const botonCalcular = document.querySelector("#calcular")

botonCalcular.onclick = function(){
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = Number(salarioAnual/12)
  document.querySelector("#salario-mensual").value = salarioMensual
  return false;
}