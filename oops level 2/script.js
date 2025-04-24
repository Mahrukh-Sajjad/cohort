function Toffee(name) {
  this.name = name;
  this.price = 10; // in this code name can of the toffee can be different but price will always be same
}

let T1 = new Toffee("alpenliebe");
let T2 = new Toffee("Dairy Milk");

//jb b constructor bnaoge aur kiuch aisa mil gaya jo sb main same hai to usey kabhi b direct constructor
// main bnana galt tareeka hota hai, par sahi tareeka hai prototype ka use krna kyunki prototype main
// save krnay per jitne bhi new k sath instance bnaooge wo saree instance by default tumari proto ki value
// ko hold krain gay.

function Human(name, age, isHansome) {
  this.name = name;
  this.age = age;
  this.isHansome = isHansome;
}

let h1 = new Human("Mahrukh", 27, true);

Human.prototype.sayHello = function () {
  //All the new humans will get sayHello function by default. prototype is a shared memory.
  console.log("Say Hello");
};

// subse pehlay property ko object main dhondain gay nahi mila to prototype main dhondain gay.
// we can write arr.length because length is stored in prototype of array.

function Candy(name) {
  this.name = name;
  this.price = 34; // In this case 34 is printed because we found the price in  in object itself. ager object main na milta to hum prototype main
  // check krtay.
}
Candy.prototype.price = 10;
let c1 = new Candy("kacha aam");

// in javascript everything is a object even functions arrays etc. Every object has it's own prototype.

function Food(name) {
  this.name = ")" + name; // Any processing is done with name
  this.printMyName = function () {
    // console.log(name);//in this case the name we sent is logged.
    console.log(this.name); //In this case processed name property is logged.
  };
}
let f1 = new Food("crispy chicken");
let f2 = new Food("ramen");

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
Employee.prototype.printDetails = function () {
  console.log(
    `My name is ${this.name}, I am ${this.age} years old, My salary is ${this.salary}`
  );
};

let E1 = new Employee("Mahrukh", 65, 20000);
