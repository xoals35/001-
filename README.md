디스코드 봇만들기 자바스크립트 기초

node.js 다운로드 링크:https://nodejs.org/en/
여기에서 이것을 다운한다.

https://ifh.cc/g/yO5PNq.jpg
비주얼 스튜디오 코드을 설치한다 
다운링크는 여기에있다.:https://code.visualstudio.com/

비주얼 스튜디오을 들어간다음에 컨트롤 + 쉬프트 + C을 누른다음 이렇게 입력한다.
npm init -y 
을 하면 이런글자가 나올거다
{
  "name": "bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


그러면 비주얼 스튜디오 코드에
package.json이라는 파일이 생겼을거다. 파일을 클릭후 이렇게 하면된다.


















{
  "name": "bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "p": "node index.js"
  }
}





 코드는 위에를  보자!
 
근데 이게 잘안보이기 떄문에 파일을 올려주겠다.
설치할 모듈과 그런것은 내가 index.js파일과 함께 올려주겠다.
