/**
 * * 마우스 이벤트..
 *  
 */
const mapDOMID = new Map(); 
let mappingState;

window.addEventListener("load", CompleteLoad);

//#region ** onload **
async function CompleteLoad()
{
  let bResult;

  try{
      await IsSuccessKeyMapping();
      bResult = true;
  } catch (e)
  {
    bResult = false;
    console.log("Mapping Failed");
  }
}

function IsSuccessKeyMapping()
{
  return new Promise((resolve, reject)=> {
    let bSuccess = KeyMapping();
    if(bSuccess == true)
    {
      resolve(true);
    }
    else
    {
      reject(false);
    } 
  });
}

function KeyMapping()
{
  let result = TapEventMapping();

  if(result != null)
  {
    return true;
  }  

  else
  {
    false;
  }
}

function TapEventMapping()
{
  let key = document.getElementById("tap");
  
  if(key == null)
  {
    return false;
  }

  mapDOMID.set("tap", key);
  let eventFunc = DoTap();
  // eventFunc();
  key.addEventListener("mouseenter",eventFunc);
  key.addEventListener("mouseleave",eventFunc);
  //key.addEventListener("mouseenter",()=>console.log("MouseIn"));
  //key.addEventListener("mouseleave",()=>console.log("MouseOut"));

  return true;
}

//#endregion

//#region ** Tap Event **
/**
 * ! Tap Event
 * * 2024.04.04 황재민 
 * * 1. 마우스가 해당영역에 있는지 감지해야 한다.
 * * 2. 마우스가 해당영역에 계속 있는지 어떻게 감지해야 하나
 * * 3. bOpen 변수가 마우스 이벤트를 계속적으로 감지해보자
 * ? 변수로 주소 참조가 가능한가
 * ! 클로저 함수를 이용하여 해결했음.
 * 
 * * 2024.04.05 황재민
 * 
 */

/**
 * * 2024.04.04 황재민
 * * Tap Event를 위한 클로저 함수
 * * movePos를 이용하여 현재 위치를 저장
 * * bOpen 값을 통하여 Open, Close 인지 체크
 * * delayTime은 애니매이션 프레임 단위처럼 사용 했음
 * * moveWidth는 프레임단위 당 움직이는 거리로 사용
 * @returns  
 */

function DoTap()
{
  let bOpen = null

  const minWidth = 1;
  const maxWidth = 10;
  let movePos = minWidth;

  const delayTime = 50;
  const moveWidth = 1;
  
  const getID = mapDOMID.get("tap");

  /**
   * * 2024.04.04 황재민
   * * 실질적으로 Tap이동을 해줄 함수
   * * for문과 setTimeout을 조합하여 탭 애니매이션 구현
   * @param {*} curPos 현재 위치 
   * @param {*} desPos 목적 위치 
   */
  let SlideTapFunc = async function(curPos, desPos)
  {
    if(curPos < desPos)
    {
      for(curPos;curPos<=desPos;curPos += moveWidth)
      {
        console.log("Start Inc Pos :"+ curPos);

        if(bOpen == false)
        {
          console.log("Break!! Inc Current Pos :" + curPos);
          break;
        }

        getID.style.width = curPos + 'vw';
        movePos = curPos;
        await new Promise((resolve) => setTimeout(resolve,delayTime));
      }
    }
  
    else
    {
      for(curPos;curPos>=desPos;curPos -= moveWidth)
      {
        console.log("Start Dec Pos :" + curPos);

        if(curPos < minWidth)
        {
          curPos = minWidth;
        }

        if(bOpen == true)
        {
          console.log("Break!! DecCurrent Pos :" + curPos);
          break;
        }

        getID.style.width = curPos + 'vw';
        movePos = curPos;
        await new Promise((resolve) => setTimeout(resolve,delayTime));
      }
    }
  }

  return async function()
  {
    console.log("MouseEvent");

    if(bOpen == null || bOpen == false)
    {
      console.log("OpenTab");
      bOpen = true;
      await new Promise((resolve) => {SlideTapFunc(movePos,maxWidth)});
    }
    else
    {
      console.log("CloseTap");
      bOpen = false;
      await new Promise((resolve) => {SlideTapFunc(movePos,minWidth)});
    }
  };
}

void function MouseIn()
{
  console.log("MouseIn");
}

void function MouseOut()
{
  console.log("MouseOut");
}

//#endregion