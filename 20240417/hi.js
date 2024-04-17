let UserCreate = (function(){
  function User(puuID, name, tag)
  {
    this.puuID = puuID;
    this.name = name
    this.tag = tag;
  }


 return User;
}());

let user = new UserCreate("#2313iod","터검니","000");
console.log(user);