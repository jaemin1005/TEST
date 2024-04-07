let hashHtml = new Map();
let bHasKey = false
//document.addEventListener("onload", CompleteLoad());
//document.addEventListener("DOMContentLoaded", CompleteLoad());
// window.addEventListener("onload", () => console.log("Window DOMContent State : " + document.getElementById("titleText")));
//window.addEventListener("DOMContentLoaded", () => console.log("Window DOMContent State : " + document.getElementById("titleText")));
//window.addEventListener("DOMContentLoaded", () => CompleteLoad());
//window.addEventListener("DOMContentLoaded", CompleteLoad());
//document.addEventListener("onload", NotAsyncCompleteLoad());

window.addEventListener("load", CompleteLoad);

async function CompleteLoad()
{
  let nCall = 0;

  try
  {
    await IsKeyMapping();
    bHasKey = true;
  }catch(e)
  {
    console.log(e);
    bHasKey = false;
  }
}


function IsKeyMapping(){
  return new Promise((resolve, reject) => {
      let bResult = SetKeyMapping();
      if(bResult === true)
      {
        resolve();
      }
      else
      {
        reject("Failed Key Mapping");
      }
  }) 
}


 /** 
     * * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     
     * * forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
 */
function SetKeyMapping()
{
  let allID = document.querySelectorAll("#titleText");
  //console.log(document.getElementById("titleText"));

  allID.forEach((obj) => {
    console.log(obj);
  });

  if(allID.length > 0)
  { 
    return true;
  }

  else
  {
    return false;
  }
}