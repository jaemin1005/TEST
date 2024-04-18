const KDTcurriculum = {
  subject1: {
      subjectName: "웹 프로그래밍 기본",
      order: 1,
      level: "입문",
      trainingFeature: "Markup 언어 및 개발 환경 설정",
      keywords: ["HTML", "CSS", "IDE", "VSCode"]
  },
  subject2: {
      subjectName: "프로그래밍 기본",
      order: 2,
      level: "기초",
      trainingFeature: "자바스크립트 기본 문법",
      keywords: ["JavaScript", "Variables", "Functions", "Control Structures"]
  },
  subject3: {
      subjectName: "VCS 버전 제어 시스템",
      order: 3,
      level: "기초",
      trainingFeature: "Git 사용법 및 GitHub 연동",
      keywords: ["Git", "GitHub", "Commit", "Branch", "Merge"]
  },
  subject4: {
      subjectName: "백엔드 프로그래밍 기본",
      order: 4,
      level: "기초",
      trainingFeature: "Node.js와 Python 기반 서버 구축",
      keywords: ["Node.js", "Python", "API", "Express"]
  },
  subject5: {
      subjectName: "소프트웨어 기획 및 설계",
      order: 5,
      level: "중급",
      trainingFeature: "정보 구조와 와이어프레임 설계",
      keywords: ["IA", "Wireframe", "Design", "UX"]
  },
  subject6: {
      subjectName: "네트워크 및 API",
      order: 6,
      level: "중급",
      trainingFeature: "프로토콜 이해 및 REST API 개발",
      keywords: ["HTTP", "REST API", "JSON", "Endpoints"]
  },
  subject7: {
      subjectName: "데이터베이스",
      order: 7,
      level: "중급",
      trainingFeature: "SQL과 NoSQL 데이터베이스 사용법",
      keywords: ["SQL", "NoSQL", "MongoDB", "MySQL"]
  },
  subject8: {
      subjectName: "SPA 프레임워크",
      order: 8,
      level: "고급",
      trainingFeature: "React.js를 활용한 싱글 페이지 어플리케이션 개발",
      keywords: ["React.js", "SPA", "Hooks", "Component"]
  },
  subject9: {
      subjectName: "프로그래밍 고급",
      order: 9,
      level: "고급",
      trainingFeature: "TypeScript와 OOP, FP 기법",
      keywords: ["TypeScript", "OOP", "Functional Programming"]
  },
  subject10: {
      subjectName: "웹서버 프레임워크",
      order: 10,
      level: "고급",
      trainingFeature: "Nest.js와 Next.js를 이용한 서버 및 SSR",
      keywords: ["Nest.js", "Next.js", "SSR", "Server"]
  },
  subject11: {
      subjectName: "클라우드 컴퓨팅 환경 구축",
      order: 11,
      level: "전문",
      trainingFeature: "AWS의 주요 서비스를 통한 인프라 구축",
      keywords: ["AWS", "EC2", "S3", "RDS"]
  },
  subject12: {
      subjectName: "가상화 컨테이너 개발환경 자동화",
      order: 12,
      level: "전문",
      trainingFeature: "Docker를 이용한 컨테이너 관리 및 배포",
      keywords: ["Docker", "Container", "DevOps", "Automation"]
  },
  subject13: {
      subjectName: "Project A : Interaction ERP",
      order: 13,
      level: "프로젝트",
      trainingFeature: "ERP 시스템의 상호작용 설계 및 구현",
      keywords: ["ERP", "Project", "System Design"]
  },
  subject14: {
      subjectName: "머신러닝개발기본",
      order: 14,
      level: "기초",
      trainingFeature: "Tensorflow를 사용한 머신러닝 모델 개발",
      keywords: ["Tensorflow.js", "Tensorflow", "Machine Learning", "AI"]
  },
  subject15: {
      subjectName: "Project B : Realtime image Prediction",
      order: 15,
      level: "프로젝트",
      trainingFeature: "실시간 이미지 예측 시스템 개발",
      keywords: ["Image Prediction", "Realtime", "AI", "Tensorflow"]
  }
};

// class 생성
class KDT{
  constructor(obj)
  {
    this.subjectName = obj.subjectName;
    this.order = obj.order;
    this.level = obj.level;
    this.trainingFeature = obj.trainingFeature;
    this.keywords = obj.keywords;
  }

  SearchProperty(propertyName) {
    if(this.hasOwnProperty(propertyName))
    {
      console.log(propertyName + " : " + this[propertyName]);
    }

    else
    {
      console.log("Don't Have Property");
    }
  }
}


function ShowArr(arr, options)
{
  for(let obj of arr)
  {
    if(obj.hasOwnProperty(options.name))
    {
      let strName = obj[options.name].replace('기본', '숙련');
      obj[options.name] = strName;
    }

    if(obj.hasOwnProperty(options.keywords))
    {
      obj[options.keywords].sort((a,b) => a-b);
    }

    console.log(obj);
  }
}


const values = Object.values(KDTcurriculum);
const arrKDT = new Array();

for(let obj of values)
{
  let calcClass = new KDT(obj);
  arrKDT[arrKDT.length] = calcClass;
}

ShowArr(arrKDT, {name : "subjectName", keywords : "keywords"});