let iDecimal = 0;
let cBinary = '1011';
let cArray = [];
let i = 0;

cArray = cBinary.split("").reverse();

iTemp = iDecimal - Math.pow(2,i);

for(i = 0; i < cArray.length; i++){
  iDecimal += parseInt(cArray[i]) * Math.pow(2,i);
}


console.log(iDecimal);