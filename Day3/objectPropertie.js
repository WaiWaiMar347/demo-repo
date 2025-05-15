let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log("Hello!");
  }
};
person.greet();
console.log(person.name);      // "Alice"
console.log(person['age']);   // 30

person.age = 31;              // Modify
person.city = "New York";     // Add new property

delete person.isEmployed;    //Delete propertie
console.log(person);

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//Nested Object
const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "San Francisco"
  }
};

console.log(company.address.city);

// Object methods
console.log(Object.keys(person));     // Return an array of property names
console.log(Object.values(person));   // Return an array of values
console.log(Object.entries(person));  // Return an array of [key,value] pairs
console.log(person.hasOwnProperty("greet")); //Check keys

const obj={};
Object.assign(obj,person); //Copy properties into an object
console.log(obj);
obj.salary=100000;
person.earn=200000;
console.log(obj);
console.log(person);