let word1='Dylan';
let word2='Israel';
let num1=2;
let num2=3;
const fullname= `${num1 + num2} ${word2}`;
console.log(fullname);
//document.getElementsByName("ep").innerText=fullname;
console.log(this);


// Inside an Object Method
const person = {
  name: 'Aung Aung',
  greet() {
    console.log(this.name);
  }
};
person.greet();

//'use strict';
}
show();


// Manually set the value of this with these
function greet() {
  console.log(this.name);
}
const user = { name: 'Su Su' };

greet.call(user);   // Su Su
greet.apply(user);  // Su Su
const boundGreet = greet.bind(user);
boundGreet();       // S