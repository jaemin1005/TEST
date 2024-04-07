let increase = function(){
  let nNum = 0;

  return function(){
    return ++nNum;
  };
}();

console.log(increase());
console.log(increase());
console.log(increase());

function IncreaseNum()
{
  let nNum = 0;
  return function()
  {
    return ++nNum;
  };
}

increase = IncreaseNum();

console.log(increase());
console.log(increase());
console.log(increase());

function  Person(name, age)
{
  this.name = name;
  let _age = age;
}