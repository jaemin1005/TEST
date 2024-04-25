var names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

names[names.length-1] = "공욱재";
console.log(names[names.length/2 - 1]);
console.log(names[names.length /2 - 2]);
console.log(names);

let count = function(){
  let count = 0;
  for(let nIdx = 0 ; nIdx < (names.length / 2 ) ; nIdx++)
  {
    count++;
  }

  console.log(count);
}();


// for(let nIdx = 0 ; nIdx < 5000000 ; nIdx++)
// {
//   console.log(nIdx);
// }

for(let nIdx = 1 ; nIdx < 10 ; nIdx++)
{
  console.log(2 * nIdx);
}

var names = [
  ["구", "하", "림"],
  ["김", "보", "미"],
  ["김", "수", "현"],
  ["김", "정", "수"],
  ["문", "혜", "림"],
  ["배", "성", "빈"],
  ["백", "지", "원"],
  ["송", "이", "현"],
  ["신", "지", "윤"],
  ["유", "으", "뜸"],
  ["유", "호", "영"],
  ["이", "연", "승"],
  ["이", "재", "영"],
  ["이", "종", "수"],
  ["임", "유", "진"],
  ["정", "호", "연"],
  ["조", "우", "식"],
  ["조", "자", "연"],
  ["최", "유", "진"],
  ["황", "재", "민"]
]

for(let nIdx = 0 ; nIdx < names.length ; nIdx++)
{
  let charSet = names[nIdx];
  let name = "";
  for(nIdx_2 = 0 ; nIdx_2 < charSet.length ; nIdx_2++)
  {
    name += charSet[nIdx_2];
  }

  if(name == "황재민")
    console.log(name);
}