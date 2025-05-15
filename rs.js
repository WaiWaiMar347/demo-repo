let sum;
let num=[1,2,3,4,5];
 export let fruits=["Apple","Orange","Mango","Banana"]; //declared export variable can use from anywhere by import keyword
function add(...num){
    console.log(arguments);
     sum=num.reduce((a,b)=>a-b); //return only one result in this callback function(must have 2argus)
}
add(1,2,3,4,5,5);
console.log(sum);
let result=num.map((a)=>a+2);// return array for each element in original array
console.log(result);
num.push(5);
let f=num.filter(p=>p==5);
console.log(f);
console.log(fruits.includes("Banana")); //return true or false if anything we want to ask 
