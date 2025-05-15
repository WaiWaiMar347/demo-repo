try {
  let result = someUndefinedFunction(); // This will throw an error
} catch (error) {
  console.log("An error occurred:", error.message +error.name);
}

try {
  let data = JSON.parse('{"name": "Alice"}');
  console.log(data.name);
} catch (error) {
  console.log("Invalid JSON");
} 
//finally {
 // console.log("Parsing attempt finished.");
//}

const jsonString = '{ name: "Bob", "age": 30 }'; 
try {
  //if(jsonString ===null ){
  const user = JSON.parse(jsonString);
  console.log("Parsed user:", user);
  //}
  //else throw new TypeError("Error found")
} 
catch (err) {
  console.log("Failed to parse JSON:", err.message);
}