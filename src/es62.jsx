import React from "react";

var numbers = [3, 56, 2, 48, 5];

const newNumbers0 = numbers.map((x) =>{
  return x * x;
}
);

const newNumbers1 = numbers.map((x,y) =>{
  return x * y;
}
);

const newNumbers2 = numbers.map(x =>{
  return x * x;
}
);

const newNumbers3 = numbers.map(x =>  x * x);

const newNumbers5 = numbers.filter(num => num > 10);

var newNumbers8 = numbers.reduce((accumulator, currentNumber) =>
   accumulator + currentNumber
);
const newNumbers9 = numbers.find(x => x > 10);

function es62(){
return (
<div>
<h2>{newNumbers2}</h2>
<h2>{newNumbers3}</h2>
<h2>{newNumbers5}</h2>
<h2>{newNumbers9}</h2>
<h2>{newNumbers8}</h2>
  </div>


);

}
console.log(newNumbers0);
console.log(newNumbers1);
console.log(newNumbers2);

export default es62;
