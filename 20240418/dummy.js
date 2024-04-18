// 예제로 올라온 객체를 클래스로 바꾸는 형태
class kdt {
  // 예제 내부 객체를 배열화 시키는 생성자
  arr = [];
  constructor(obj) {
    // 객체를 받아 내부에 존재하는 객체들의 키 값을 배열의 형태로 할당. 그 후 키값에 해당하는 객체들을 kdt클래스 내부 배열에 push하는 형태 
    let currLength = Object.keys(obj);
    for(let i = 0; i < currLength.length; i++){

      const key = currLength[i];
      
      this.arr.push(obj[key]);
    }
  }
  sortConsole(ele){
    console.log(ele);
    arr.sort((a,b)=>{a-b});
    console.log(ele);
  }

  // input 값(key)이 들어오면 해당하는 value를 모두 반환. -> 내림차순 정렬
  searchIndex(index){
    let isTrue = !false; //while 탈출 조건
    let count = 0;  //배열 길이 체크
    let arr = []; //정렬할 임시 배열
    while(isTrue){
      arr.push(this.arr[count++][index]); //index에 해당하는 value를 임시 배열에 push
      if(this.arr.length <= count){
        isTrue = !true;
      }
    }
    this.sortConsole(arr);
  }



  //기본을 기반으로 바꾸는 함수
  changeString(str, newStr){
    //배열에 존재하는 객체 순회를 위해 forEach 사용
    //key값에 str (사용자가 입력한 문자열)
    this.arr.forEach((element)=>{
      
      let keys = Object.keys(element);  
      let keyCondition = key=>element[key]; 

      if(keys.find(keyCondition === str) !== undefined){
        const i = keys.find(keyCondition === str);
        element[i] = newStr;
        console.log(element[i]);  
      }
      
    })
  }
}

let kdtClass = new kdt(KDTcurriculum);
kdtClass.searchIndex("level");
kdtClass.changeString("기초", "기반");

