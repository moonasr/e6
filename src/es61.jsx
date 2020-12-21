import React from "react";
import emojipedia from "./emojis";

var numbers = [3, 56, 2, 48, 5];

function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
var newNumbers2 = [];
var newNumbers3 = [];

function double2(x) {
  newNumbers2.push(x * 2);
}
numbers.forEach(double2);

numbers.forEach(function (x) {
  newNumbers3.push(x * 2);
});

const newNumbers4 = numbers.map(function (x) {
  return x * 2;
});

const newNumbers5 = numbers.filter(function (num) {
  return num > 10;
});

var newNumbers6 = [];
numbers.forEach(function (num) {
  if (num > 10) {
    newNumbers6.push(num);
  }
});

var newNumbers7 = 0;
numbers.forEach(function (x) {
  newNumbers7 += x;
});

var newNumbers8 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

const newNumbers9 = numbers.find(function (x) {
  return x > 10;
});

const text0 = "Hello World";
const text1 = text0.substring(0, 5);

const newEmojisss = emojipedia.map(function (y) {
  return y.meaning.substring(0, 50);
});


function Es61(){
return (
<div>
<h1>Hello1</h1>
    <h1>{newNumbers}</h1>
    <h1>H{newNumbers2}</h1>
    <h1>G{newNumbers3}</h1>
    <h1>J{newNumbers4}</h1>
    <h1>Filter{newNumbers5}</h1>
    <h1>Filter{newNumbers6}</h1>
    <h1>Reduce{newNumbers7}</h1>
    <h1>Reduce{newNumbers8}</h1>
    <h1>Find{newNumbers9}</h1>
    <h1>{text1}</h1>
    <h1>{newEmojisss}</h1>
  </div>

);

}

console.log(newEmojisss);

export default Es61;