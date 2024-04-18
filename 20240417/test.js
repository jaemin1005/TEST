let UserCreate = (function(){
  function User(puuID, name, tag)
  {
    this.puuID = puuID;
    this.name = name
    this.tag = tag;
  }


 return User;
}());


let CreateMatchGame = (function(){
  function MatchGame(champion,spell,kda,item,time,gameLevel,cs){
    this.champion = champion;
    this.spell = spell;
    this.kda = kda;
    this.item = item;
    this.time = time;
    this.gameLevel = gameLevel;
    this.cs = cs;
  }
  
  CreateMatchGame.prototype.MinCS = () => {
    return (cs / time);
  }

  return MatchGame;
}());


let user = new UserCreate("#2313iod","터검니","000");
console.log(user);