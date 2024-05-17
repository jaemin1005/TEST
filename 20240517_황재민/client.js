import { Debounce } from "./module/Debounce.js";

const $items = document.getElementsByClassName("realItem");
const $redteam = document.getElementById("red_team");
const $greenteam = document.getElementById("green_team");
const items = {};

//* 해당 Element의 자식들을 객체의 프로퍼티로 삼아 만든다.
for(let item of Array.from($items)){

  let obj = {};
  
  let input = item.children[1].children[0].children[0];
  let redAct = item.children[1].children[1];
  let greenAct = item.children[1].children[2];

  obj.redAct = redAct;
  obj.greenAct = greenAct;
  obj.input = input;

  items[input.id] = obj;
}

//* 서버에서 중복되어 있는지 확인해야 될 것들.
items["name"].input.addEventListener("input", Debounce(inputListener,500));
items["email"].input.addEventListener("input", Debounce(inputListener,500));
items["phone"].input.addEventListener("input", Debounce(inputListener, 500));

//* 아닌 것들
items["password"].input.addEventListener("input", function(){
  let value = this.value;
  let check = items["name"].input.value;
  let phone = items["phone"].input.value.split("-");
  let phoneCheck = items["phone"].greenAct.style.visibility === "visible" ? true : false;

  //* 1. 이름 포함이 되어 있는지 확인
  if(value.startsWith(check)){
    value = value.replace(check, "");
    
    //* 2. 숫자가 4개인지 확인.
    //* 3. 뒷자리 확인하기 위한 길이 확인
    //* 4. 올바른 휴대전화번호인지 확인 
    if(value.length == 4 && phone.length == 3 && phoneCheck){
      
      //* 5. 뒷자리번호하고 해당 숫자가 같은지 비교.
      if(value === phone[2]){
        IsVisible(this.id, true);
        return;
      }
    }
  }

  IsVisible(this.id, false);
  return;
});

items["password"].input.addEventListener("input",() => items["password_check"].input.dispatchEvent(new Event("input")));

//* 1. 입력한 패스워드랑 단순 비교하자.
//* 2. 옳은 패스워드인지 비교.
items["password_check"].input.addEventListener("input", function(){
  if(this.value === items["password"].input.value && items["password"].greenAct.style.visibility === "visible"){
    IsVisible(this.id, true);
  }
  else{
    IsVisible(this.id, false);
  }
})


/**
 * * 2024.05.17 황재민
 * * 해당 행에 대한, 사각형의 컨트롤
 * @param {*} id : 해당 행의 <input> Id
 * @param {*} isTurnOn : true => 초록색, false => 빨간색
 */
function IsVisible(id, isTurnOn){
  let item = items[id];

  if(isTurnOn === true){
    item.greenAct.style.visibility = "visible";
    item.redAct.style.visibility = "hidden";
  }
  else{
    item.greenAct.style.visibility = "hidden";
    item.redAct.style.visibility = "visible";
  }

  let isTurn = Allcheck();
  if(isTurn === true){
    $redteam.style.visibility = "hidden";
    $greenteam.style.visibility = "visible";
  }
  else{
    $redteam.style.visibility = "visible";
    $greenteam.style.visibility = "hidden"
  }

}

/**
 * * 2024.05.17 황재민
 * * 모든 사각형의 visibility를 체크하여
 * * 맨 하단의 사각형의 색깔을 정한다. (true ,false)
 * @returns : true일 경우 초록색, false일 경우 빨간색
 */
function Allcheck(){
  for(let item in items){
    if(items[item].greenAct.style.visibility === "hidden" || items[item].greenAct.style.visibility === ""){
      return false;
    }
  }
  return true;
}

/**
 * * 2024.05.17 황재민
 * * input에 대한 이벤트 리스너
 * * 해당 이벤트롤 호출한 Element의 id와 value를 객체로 JSON으로 변환해서 POST로 서버로 보내ㅜㄴ다
 * * 해더의 statusCode를 이용하여 true, false 판단
 */
async function inputListener(){
  let elem = this;

  await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      id : elem.id,
      value : elem.value
    }),
  })
  .then(res => {
    if(res.status == 200){
      IsVisible(elem.id, true);
    } else{
      IsVisible(elem.id, false);
    }

    items["password"].input.dispatchEvent(new Event("input"));
  })
}


