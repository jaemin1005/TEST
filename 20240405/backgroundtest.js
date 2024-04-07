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
  let arrAllHtmlKey = document.querySelectorAll('*[id]');

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      
    }
  }


  if(result != null)
  {
    return true;
  }  

  else
  {
    false;
  }
}
