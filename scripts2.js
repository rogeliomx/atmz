
function op (value){
  document.getElementById("monto").innerHTML = value; 
}

function monto (monto, plazo, tasa){
  // console.log(monto/plazo)
  // console.log(monto,plazo,tasa)

  document.querySelector("#monto").innerText = (((monto/plazo) * tasa)/100) + (monto/plazo) ;

}

function neto (monto, plazo, tasa){
  // console.log(monto, plazo, tasa)
  document.querySelector("#neto").innerText = (monto * plazo) -340;

}

function total (monto, plazo, tasa) {
  console.log((parseFloat(monto) + 340) + ((parseFloat(monto/plazo) * tasa)/100))
 
  document.querySelector("#total").innerText = ((parseFloat(monto) + 340) + ((parseFloat(monto/plazo) * tasa)/100))
  }

const sendForm = (event) => {
  event.preventDefault();
  let objectForm = {};

  var data = new FormData(event.target);
  for (const [name, value] of data) {
    objectForm = { ...objectForm, [name]: value };

 
    switch (name) {
      case "mensual":
        op(value);
        break;
        case "monto":
          monto(value, event.target.plazo.value, event.target.tasa.value) 
          break;
          case "tasa":
            neto(event.target.monto.value, event.target.plazo.value, event.target.tasa.value) 
        // console.log(neto)
          break;
          
     
    }
    
  }
  total(objectForm.monto, objectForm.plazo, objectForm.tasa) 
    // operations 
 
  
  // print 
  // document.querySelector("#mensual").innerText = objectForm.mensual;
  
  // document.querySelector("#tasa").innerText = objectForm.tasa;
  // document.querySelector("#plazo").innerText = objectForm.plazo;
  // document.querySelector("cantidad").innerText = objectForm.cantidad;

  // console.log(objectForm);
};  



// function pagoMensual() {
  
//   let num1 = document.getElementById("montoDeseado").value;
//   let num2 = document.getElementById("plazoMeses").value;
//   let num3 = document.getElementById("tasaAnual").value;

//   let firstOp = num1 / num2 ;
//   let divide = ((firstOp * num3 )/ 100) + firstOp;

//   document.getElementById("result").innerHTML = divide;
// }
    

// function montoNeto() {
//   let num1 = document.getElementById("montoDeseado").value;
//   let num2 = document.getElementById("plazoMeses").value;
//   let apertura = document.getElementById("comision").value;
  
//   let deposit = ((num1 * num2 ) - apertura);

//   document.getElementById("montoNetDepo").innerHTML = deposit;
// }

// function totalPagado() {
//   let num1 = document.getElementById("montoDeseado").value;
//   let apertura = document.getElementById("comision").value;
//   let num3 = document.getElementById("tasaAnual").value;

//   let x = parseFloat(num1) + parseFloat(num3) + parseFloat(apertura);
  
//   document.getElementById("paided").innerHTML = x;

// }

// function info() {
//   let rango = document.getElementById("montoDeseado").value;
//   let num2 = document.getElementById("plazoMeses").value;
//   let num3 = document.getElementById("tasaAnual").value;

//   let y = parseFloat(rango)  / num2 ;
//   let q = (y * parseFloat(num3))/100  + y ;

//   document.getElementById("ahuevo").innerHTML = q;
// }

// function mensualidad() {
//   // let button = 12;
//   let button = document.getElementsByName("hola");

//   let opi= button ;

//   document.getElementById("premium").innerHTML = opi;


// }


// function submit() {
//   pagoMensual(); montoNeto(); totalPagado() ; info(); 
// }