
document.querySelector('#tip-form').onchange = function(){


    var monti=document.getElementById('monto').value;
    var calc=document.getElementById('meses').value;
    var cost= (monti * calc );

    var bill = Number(document.getElementById('billTotal'));
    
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  tipAmount.value = tipValue.toFixed(2);
   totalBillWithTip.value =finalBill.toFixed(2);
  
   //Show Results
  
    document.getElementById('results').style.display='block'
  }
  