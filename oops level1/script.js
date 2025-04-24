// Object oriented programming is creating objects that hold data and functionality. and object is created with a blueprint model.
// Hum aik class bnayege and us class k kain saray objects b bnain gay  jo objects kuch data ya functionality hold krain gay. jisko
// hum usk methods kahain gay. yeh sub manually na krna parhay hum oops k concepts follow krtay hain.

// if we create multiple objects without using oops  all the objects will take their own memory and we have to repeat the code
// for creating a new object.

// Ager tumain kai saray objects create krnay hon to tum her object ko different variable main dalogay  jo k achi practice ni hai is say behtr
// hai k tum aik class bnao  jo different objects create kray aur wo objects apna data khud hold krain gay. and last main jitnay b
// methods hongay wo data share krain gay.

//Before es6 there was no concept of classes  so constructor function was used to make new objects.
// Constructor function name always start from capital letter. yeh purana tareeka hai objects bnanay ka aik constructor
// function say jb javascript main classes ka concept ni tha.

function Cupcake() {
  this.name = "chocolate"; // blank object maim aik name nam ki property bni uski value chocolate rkh di  gai.
}
let cake1 = new Cupcake(); //incase of seeing new key word create a blank object in your mind
//jb b function main this ko dekho foran us blank object of yad kr k wahan place krdo.

function Toffee(flavor, price) {
  this.flavor = flavor;
  this.price = price;
}

let Toffee1 = new Toffee("vanilla", 10);
let Toffee2 = new Toffee("chocolate", 20);

//in es6 classes  were  replaced by constructor function.

class ToffeeA {
  constructor(flavor, color) {
    this.flavor = flavor;
    this.color = color;
  } // Constructor function needs to be built whenever you built a class. The first thing that execute in a class is a connstrcutor function.
}

var T1 = new ToffeeA("strawberry", "pink");
var T2 = new ToffeeA("vanilla", "yellow");
