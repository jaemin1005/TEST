let allTextSummaryKey = document.getElementsByClassName("TextSummary");
let arrTxtSummary = new Array();

let TextObj = (function(){

  function TextSummary(id, curOffset, childOffset)
  {
    this.id = id;
    this.curOffset = curOffset;
    this.childOffset = childOffset;
  }

  return TextSummary;
}());

let textSummary;

// allTextSummaryKey.array.forEach(it => {
//   textSummary = new TextObj(item, item.offsetTop, item.children[3].offsetTop);
//   arrTxtSummary[arrTxtSummary.length] = textSummary;
// });

for(let item of allTextSummaryKey)
{
  console.log(item);
  console.log(item.offsetTop);

  let curLength = item.offsetTop;
  let childLength = item.children[1].offsetTop;

  textSummary = new TextObj(item, curLength, childLength);
  arrTxtSummary[arrTxtSummary.length] = textSummary;
}

console.log(textSummary);