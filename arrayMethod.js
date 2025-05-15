let arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=["Apple","Orange","Banana","Mango","Papaya"];

arr.push(11); //Add item to the last
console.log(arr);
arr.pop() //Remove last item
console.log(arr)

arr1.unshift("Grape"); //Add item at  start
console.log(arr1)
arr1.shift();   //Remove item at start
console.log(arr1);

//Callback Function
console.log(arr.map(a => a*2)); //Return array which contains each element multiply 2
console.log(arr.filter(b => b>=5 )); // Filter items 
console.log(arr.reduce((a,b)=> a+b)); // Reduce a single value
console.log(arr.find( x => x > 4)); //Find a single element
console.log(arr.findIndex(function(a){return a%2===0})); //Find index of the first match
console.log(arr.every(n => n>0)); // Return true if all match


console.log([4,5,3,2,1].sort()); //Sorting ascending order array
console.log([4,5,3,2,1].reverse()); //Reverse existing array
console.log(arr1.includes("Avocado")); //Check  items and return true  if it contains in array
console.log(arr.concat(arr1)); //Concatenate two arrays
console.log(arr.join("_")); //Combine into a string 

console.log([2,4,6].fill(1)); //Fill all or part of array with a static value
console.log([2,4,6].fill(0,0,2));

console.log(arr.toString());


