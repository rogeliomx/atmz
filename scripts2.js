

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

function info() {
  let rango = document.getElementById("montoDeseado").value;
  let num2 = document.getElementById("plazoMeses").value;
  let num3 = document.getElementById("tasaAnual").value;

  let y = parseFloat(rango)  / num2 ;
  let q = (y * parseFloat(num3))/100  + y ;

  document.getElementById("ahuevo").innerHTML = q;
}

function mensualidad() {
  // let button = 12;
  let button = document.getElementsByName("hola");

  let opi= button ;

  document.getElementById("premium").innerHTML = opi;


}


function submit() {
  pagoMensual(); montoNeto(); totalPagado() ; info(); 
}