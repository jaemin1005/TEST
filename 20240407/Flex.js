
let GetKey = OnCompleteLoad();
window.addEventListener("load", GetKey);
//window.addEventListener("resize", GetKey);



function OnCompleteLoad()
{
  let hashMap = new Map();

  let isSuccessKeyMapping = function(){
    let getKeys = document.querySelectorAll('*[id]');
    
    if(getKeys.length == 0)
    {
      return false;
    }

    let AddEventFunc = async function(key){
        return await new Promise(() => {
          let currentNum = window.innerHeight;
          let flexBoxHeight = key.offsetHeight;

          let marginNum = (currentNum - flexBoxHeight) / 2;
          key.style.marginBottom = marginNum + "px";
          key.style.marginTop = marginNum + "px";
        });
    }

    /**
     * ! Flex 일정비율로 화면 맞추기.
     * * 2024.04.08 황재민
     * * getKeys는 해당 FlexContainer가 Id가 저장된 HashMap
     * * window.innerHeight : 브라우저의 Height, flexBoxHeight : Flex의 높이
     * * 계산된 값을 Margin에 넣어준다
     */
    for(let nIdx = 0; nIdx < getKeys.length; nIdx++){
      // window.addEventListener("resize", () => { AddEventFunc(getKeys[nIdx])});
      window.addEventListener("resize", async () => await new Promise(() =>{
          let currentNum = window.innerHeight;
          let flexBoxHeight = getKeys[nIdx].offsetHeight;

          let marginNum = (currentNum - flexBoxHeight) / 2;
          getKeys[nIdx].style.marginBottom = marginNum + "px";
          getKeys[nIdx].style.marginTop = marginNum + "px";
      }));
    }

    return true;
  }

  return async function()
  {
      await new Promise((resolve,reject) => {
        isSuccessKeyMapping();
      }); 

      return hashMap;
  };
}
