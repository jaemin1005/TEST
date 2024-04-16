// const yea = {
//   name: "Helldivers",
//   age : 20,
//   family:{
//     name : "SuperEarth",
//     job : "Planet"
//   }
// }

// function Family (name, age, family){
//   this.name = name;
//   this.age = age;
//   this.family = family;
// }

// let test = new Family("안녕", 20, {name:"인사", job:"도롱뇽"});

// console.log(yea); 
// console.log(test);

// let createFamily = (function(){
  
//   function Sour(name)
//   {
//     this.name = name
//   }

//   Sour.prototype.hello = () => {console.log(this.name)};

//   return Sour;
// }());


// let hi = new createFamily("hi");

// hi.hello();

let obj = {
  name : [1,2]
};

obj.name.push(3);
console.log(obj.name);

//console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
