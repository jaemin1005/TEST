// function Person(name){
//   this.name = name;
// }

// const person = {name : "hi"};
// const me = new Person('Lee');
// const lim = 3; 
// console.log(me.hasOwnProperty('__proto__')) 


// const parent = {
//   constructor: Person,
//   sayHello(){
//     console.log('Hi! My name is ${this.name)');
//   }
// };

// Person.prototype = parent;

// Object.setPrototypeOf(me, parent);

// me.sayHello();

// console.log(me.constructor === Person);
// console.log(me.constructor === Object);

// console.log(Person.prototype === Object.getPrototypeOf(me));

// function Pserson(name)
// {
//   this.name = name;
// }

// let obj = Object.create(Pserson.prototype);
// obj.name = 'Lee';

Function.prototype.apply