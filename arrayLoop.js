let nums = [1,2,3,4,5];
let mix = ["Bood", 3, 'A'];
let fruit =["Apple" ,"Orange"];
let Name="Dylan COding God Israel";
let total=0;

console.log(nums.length); //Array size
for(let income of nums){ //use for of loop for geting each value in 
    total+=income;
}
console.log(total);
for(let ch of Name){
console.log(ch);}
let m=[...nums];
m.push('true');  //use in array add an element to the end of array
//array.forEach(element => {    
//});
//console.log(...nums);
console.log(m);  
m.pop();       //delete an element at the end of array
m.unshift('true');//add an element to the front of array
m.shift();        //delete an element at the front of array
console.log(m);
let t=0;
nums.forEach((element)=> t+=element); //use this for each element
console.log(t);

