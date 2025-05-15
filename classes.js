class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name}  ${this.age}`);
  }
}
const alice = new Person("Alice", 30);
alice.greet(); 

//Extending Classes
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

const bob = new Employee("Bob", 40, "Engineer");
bob.greet();        // Inherited from Person
bob.describeJob();


// Getters and Setters
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get area() {
    return Math.PI * this._radius*2;
  }

  set radius(r) {
    this._radius= r;
  }
}
const c = new Circle(10);
console.log(c.area);    
c.radius = 5;
console.log(c.area);

//Static Method without  needing new operator
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtils.add(2, 3)); 

//Private field (No directly call counter.#count and conter.#display())
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
    console.log(`Count is now: ${this.#count}`);
    console.log(MathUtils.add(3, 3)); 

  }

  getCount() {
    return this.#count;
  }

  #display(){ console.log("Private")}
  getDisplay(){ this.#display();}
}
const counter = new Counter(); 
counter.increment();
console.log(counter.getCount()); 
counter.getDisplay();