const user = {
  name: "Bob",
  age: 25
};

const jsonString = JSON.stringify(user); //Use it to turn a JavaScript object into a JSON string
console.log(jsonString);
console.log(JSON.parse(jsonString));  //Use it to turn a JSON string into a JavaScript object.







// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { user: 'John Doe' };
//     callback(null,data); // success
//   }, 1000);
// }

// function handleData(error, data) { //This Functiion is used as callback fun
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('Received data:', data);
//   }
// }

// fetchData(handleData);