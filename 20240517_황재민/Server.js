const http = require("http");
const fs = require("fs");
const memberNames = require("./module/Names");

/**
 * * 2024.05.17 황재민
 * * 서버 실행
 */
http.createServer((req,res) => {

  //* GET METHOD
  if(req.method === "GET"){
    ProcessGETMethod(req,res);
  }
  
  //* POST METHOD
  if(req.method === "POST"){
    ProcessPOSTMethod(req,res);
  }


}).listen(8080);

//* GET METHOD 처리
function ProcessGETMethod(req, res){
  
  //* Main Html
  if(req.url ==='/'){
    SelectFile(res, 'index.html', "text/html");
    return;
  }

  //* OTHER FILE
  else ReadFiles(req,res);
}

/**
 * * 2024.05.17 황재민
 * * POST Method 처리
 * @param {*} req : 요청
 * @param {*} res : 응답
 */
function ProcessPOSTMethod(req,res){

  let jsonData = "";
  req.on('data',  (data) => jsonData += data );
  req.on('end', async () => {
    
    /**
     * * {id, value} 2개의 키를 가진 객체가 들어온다.
     * * id는 조건문을 분기하기위한 키
     * * value 해당 조건문에 대한 값
     */
    let reqObj =JSON.parse(jsonData);
    let id = reqObj.id;
    let value = reqObj.value;

    if(id == "name"){
      NameCheck(value, res);
    }

    else if(id == "phone"){
      phoneCheck(value, res);
    }

    else if(id == "email"){
      EmailCheck(value, res);
    }

    res.statusCode = 200;
    res.end();
  })  
}

/**
 * * 2024.05.17 황재민
 * * memberNames 배열을 이용
 * * 해당 배열안의 이름이 있는지 체크
 * @param {*} value : 이름 
 * @param {*} res : 응답
 */
function NameCheck(value, res){
  const name = memberNames.find(str => str === value);
  if(name){
    res.statusCode = 200;
    res.end();
  }
  else{
    res.statusCode = 204;
    res.end();
  }
}

/**
 * * 2024.05.17 황재민
 * * Email Check
 * * 졍규표헌식을 이용하여 이메일 체크
 * @param {*} value : 이메일 
 * @param {*} res : 응답 
 */
function EmailCheck(value, res){
  if(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(value) === true){
    res.statusCode = 200;
    res.end();
  }
  else{
    res.statusCode = 204;
    res.end();
  }
}


//* 폰 번호 체크
function phoneCheck(value, res){
  let phoneNum = value.split("-");
  if(phoneNum.length == 3){

    //* 폰의 번호 ***-****-**** 또는 ****-****-****;
    if((phoneNum[0].length == 3 || phoneNum[0].length ==4) && (phoneNum[1].length == 4) && (phoneNum[2].length ==4)){
      
      //* 안에 있는 수가 숫자인지 검사
      for(let num of phoneNum){
        //* 안에 있는 수가 숫자가 아닐때.
        if(Number(num) == NaN){
          res.statusCode = 204;
          res.end();
          return;
        }
      }

      //* 조건을 다 통과하였을 경우 옳은 폰 번호임을 증명.
      //* statusCode 200을 보내준다.
      res.statusCode = 200;
      res.end();
    }
  }
  
  res.statusCode = 204;
  res.end();
}




/**
 * * 2024.05.13 황재민
 * * 파일 읽어오기
 * @param {*} req 클라이언트 요청
 * @param {*} res 서버 응답
 */
function ReadFiles(req, res){
  //* Resource 같은 경우 대용량 파일이 대부분이다.
  //* createReadStream을 이용하여 파일을 읽는다.
  if(req.url.startsWith("/resources/")){
    const reqEtag = req.headers['if-none-match'];
    //* 버전에 맞는 이미지 파일인지 확인
    if(reqEtag != undefined && reqEtag === process.env.RIOT_DATA_VERSION){
      res.writeHead(304);
      res.end();
    }
    else{
      res.setHeader('ETag', process.env.RIOT_DATA_VERSION);
      res.setHeader('Content-Type', GetContentType(req.url));
      //* 캐시를 설정하여 해당 Resouce를 저장한다.
      res.setHeader('Cache-Control', 'public, no-transform, max-age=15552000');
      ReadResouceFile(req.url, res);
    }
  }
  //* 일반 문서 파일들
  else{
    SelectFile(res, req.url, GetContentType(req.url));
  }
}

/**
 * * 2024.04.19 황재민
 * * 경로에 따른 파일 선택하여 응답해준다.
 * * __dirname : __은 자바스크립트에서 기본적의 정의된 함수를 의미, 해당 소스파일까지의 경로를 나타냄
 * @param {*} res : response (응답) 을 하기 위한 매개변수
 * @param {*} path : 파일 경로
 * @param {*} contentType : Content - Type
 * @param {*} responscode  : 응답 코드. 200 (요청이 성공적으로 완료되었다는걸 나타냄
 */
function SelectFile(res, path, contentType, responscode = 200) {
  let filePath = path;
  if (filePath[0] === "/") filePath = filePath.substring(1);

  fs.readFile(filePath, (err, data) => {
    {
      /**
      * * 파일을 읽을 수 없을 때
      * * 응답코드 500을 헤드에 넣어 응답한다. (500 : 서버가 처리방법을 모르는 상황이 발생했음을 나타냄)
      */
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 - Internal Error");
        return;
      }

      res.writeHead(responscode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

/**
 * * 2024.04.23 황재민
 * * fileName '.'으로 자른다
 * * 맨 끝 .뒤의 string을 이용하여 ContentType을 가져온다
 * @param {*} fileName 파일 이름
 * @returns 
 */
function GetContentType(fileName)
{
  let split = fileName.split('.');
  let extension = split[split.length-1];
  let contentType = null;
  if (extension == "js" || extension == "mjs") contentType = "text/javascript";
  else if (extension == "ico") contentType = "image/x-icon";
  else if (extension == "html" || extension == "/" || extension == "")
    contentType = "text/html";
  else if (extension == "css") contentType = "text/css";
  else if (extension == "png") contentType = "image/png";
  else contentType = "Multipart/related";
  return contentType;
}