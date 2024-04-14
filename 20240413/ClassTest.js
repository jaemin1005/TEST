// class Person{

//   constructor(name){
//     this.name = name;
//   }
// }

// let test = {};
// console.log(test);


// const me = new Person('Lee');
// console.log(me);

var Animal = (function () {
  
  function Animal(age, weight){
    this.age = age;
    this.weight = weight;
  }

  Animal.prototype.eat = function(){
    return 'eat';
  };

  Animal.prototype.move = function(){
    return 'move';
  };

  return Animal;
}());

var Bird = (function(){
  function Bird(){
    Animal.apply(this, arguments);
  }

  Bird.prototype = Animal.prototype;
  Bird.prototype.constructor = Bird;

  Bird.prototype.fly = function(){
    return 'fly';
  };

  return Bird;
}());

var bird = new Bird(1, 5);
console.log(bird);