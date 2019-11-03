function Binary2Decimal(){
  let iDecimal = 0;
  let cBinary = '';
  let cArray = [];
  let i = 0;
  
  cBinary = document.getElementById("input_binary").value;
   
  cArray = cBinary.split("").reverse();

  iTemp = iDecimal - Math.pow(2,i);

  for(i = 0; i < cArray.length; i++){
    iDecimal += parseInt(cArray[i]) * Math.pow(2,i);
  }
  document.getElementById("result_decimal").value = iDecimal;
}

function Decimal2Binary(){
  let iDecimal = 11;
  let cBinary = [];
  let iPower = 0;
  let i = 0, j = 0;
  let iTemp = 0;
  let cResult = '';

  iDecimal = document.getElementById("input_decimal").value;

  iPower = Math.pow(2, i);
  while (iPower <= iDecimal) {
    cBinary[i] = 0;
    i++;
    iPower = Math.pow(2, i);
  } 
  
  i--;
  cBinary[i] = 1;
  iTemp = iDecimal - Math.pow(2,i);
  
  for(j = i; j >= 0; j--){
    if(Math.pow(2, j) <= iTemp) {
      cBinary[j] = 1;
      iTemp -= Math.pow(2,j);
    }
  }
  
  cResult = cBinary.reverse().toString().replace(/,/g,'');
  document.getElementById("result_binary").value = cResult;
}