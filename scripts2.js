

function pagoMensual() {

    
  let num1 = document.getElementById("montoDeseado").value;
  let num2 = document.getElementById("plazoMeses").value;
  let num3 = document.getElementById("tasaAnual").value;

  let firstOp = num1 / num2 ;
  let divide = ((firstOp * num3 )/ 100) + firstOp;

  document.getElementById("result").innerHTML = divide;


}
    

function montoNeto() {
  let num1 = document.getElementById("montoDeseado").value;
  let num2 = document.getElementById("plazoMeses").value;
  let apertura = document.getElementById("comision").value;
  
  let deposit = ((num1 * num2 ) - apertura);

  document.getElementById("montoNetDepo").innerHTML = deposit;
}

function totalPagado() {
  let num1 = document.getElementById("montoDeseado").value;
  let apertura = document.getElementById("comision").value;
  let num3 = document.getElementById("tasaAnual").value;

  let x = parseFloat(num1) + parseFloat(num3) + parseFloat(apertura);


    document.getElementById("paided").innerHTML = x;

  
}
  