
// 1 Destructuring
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
  };
  
  const { name, age } = person;
  
  console.log(name); 
  console.log(age);  

  //3 ES6 Classes
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const myRectangle = new Rectangle(5, 10);
  console.log(myRectangle.calculateArea()); 

  //4 Getter and Setter in ES6

  //get keey
const person1 = {
    firstname:"Eshan",
    lastname:"Ahmed",
    age:22,
    prof:"programmer",
    get pro(){
        return this.prof;
    }

}
console.log(person1.prof)

//set keey
const Info = {
    userName:"kaniz",
    email:"farhanakanij4@gmail.com",
    set Newemail(newmail){
        this.email = newmail

    }
}
Info.newmail = "admin@gmail.com";
console.log(Info)

//5  Class Expressions

let person2 = class{
    constructor(name,email,pass){
        this.name = name,
        this.email = email,
        this.pass = pass
    }
}
let about = newperson2("esmam","admin@gmail.com","254768");
console.log(about)


// 6.computed proparty
let problame = "userName";
const userinfo = {
    [problame]:"eshan",
    email:"admin@gmail.com",
    hobby:"codding",
    age:24,
}
console.log(userinfo)


//7. Inheritance

class Animal {
    constructor(Dog){
        this.Dog = Dog;
    }
    parent(){
        return "my Animal Name Is" + this.Dog
    }
}
class Dog extends Animal{
    constructor(Animal,Dog){
        super(Dog);
        this.Animal = Animal;
    }
    show(){
        return this.parent() + "And Animal Is" + this.Dog;
    }
}
let myAnimal = newDog("jerry","Mustang");
console.log(myAnimal)

//8. New Target Operators

function person(name){
    if(!new.target){
        throw "must use new operator with this person function";
    }
    this.name = name;
}
let myperson = new person ("kaniz Farhana")
console.log(myperson)

//9. Static Methods
class MathUtil  {
    constructor(name) {
      this.name = name;
    }
    static hello( square) {
      return "Hello " +  square.name;
    }
  }
  const myMathUtil  = new  MathUtil ("square");
  document.getElementById("demo").innerHTML =  MathUtil .hello(myMathUtil); 
  console.log(myMathUtil)


