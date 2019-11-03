let iDecimal = 11;
let cBinary = [];
let iPower = 0;
let i = 0, j = 0;
let iTemp = 0;
let cResult = '';

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

console.log(cResult);
