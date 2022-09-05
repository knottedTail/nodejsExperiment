# nodejsExperiment


HISTORY
====================

Install **express** module 

```
yarn add express
```

Add **node_modules** in .gitigonore and do not add **yarn.lock**.

Node version is too low => Upgrade node ~~via yarn~~
```
yarn cache clean
yarn global add n
```

Upgrade yarn at first
```
npm install --global yarn
```

Install node version manager
```
sudo npm install -g n
```

Finally, install latest node package(18.8.0)
```
sudo n latest
```

다시 삭제
```
npm remove -g n
yarn global remove n
```

다시 설치
```
yarn global add n
sudo n latest
node -v
```

netlify-cli 설치
```
yarn global add netlify-cli
```

Following exampls [Link](https://create-react-app.dev/docs/getting-started#selecting-a-template)


* yarn global은 prefix 세팅이 선행되어야 함

설정하지 않을 경우 아래의 결과가 undefined
```
yarn config get prefix
```

아래의 command로 세팅할 위치 확인
```
yarn global bin
```
ex) /home/cats/.yarn/bin 일 경우 /home/cats/.yarn/로 prefix 설정

```
yarn config set prefix `file path`
```
ex) `file path` = /home/cats/.yarn/

이후 ~/.bashrc 혹은 ~/.pash_profile에 아래의 코드 추가

```
export PATH="$PATH:`yarn global bin`"
```
ex) `yarn global bin` = /home/cats/.yarn/bin 


# Gatsby Blog Tutorials

gatsby 기본세팅 설정(약간 시간 걸림, Blog 폴더내부에 따로 생성됨)
```
gatsby new Blog
```

아래의 명령어로 로컬 서버를 열 수 있음
```
cd Blog
gatsby develop
```

# Main file 1: pacakge.json

Necessary fields:
* name : 214자 보다 짧게, ., _로 시작하지 않게, 소문자로만, URL-safe하게, JS 파일 내의 require() 함수의 인수로 사용된다.
* version

Optional fields:
* scripts: 명령어로 인해 실행될 세부 명령 세팅 ex) "build": "react-scripts build" 의 경우 yarn build로 인해 react-scripts build가 실행, script에 대한 자세한 [Link](https://docs.npmjs.com/misc/scripts).

* dependencies: 실행에 필요한 패키지 리스트

* main: require("___")를 실행하였을 때 main의 지정 모듈의 exports 객체.. 가 반환된다

* dependencies: 의존성 리스트
    * ^: 명시한 버전과 호환되는 것
    * ~: 명시한 버전과 근사한 것
    * *: 모든 버전, ""와 같음
    * a - b: >= a <= b 와 같음
    * @: common package ownership

* bin: PATH 위치에 설치할 실행 파일

* Ex) test-app
    * yarn build -> test-app/package.json의 "builds" 항목에 react-scripts build 실행
    * react-scripts의 "bin" 항목에 "./bin/react-scripts.js" 실행
    * react-scripts의 scripts/build.js 실행(복잡한 스크립트)

# Node.js 와 index.html 연결하기
REF: [Link](https://selosele.github.io/2020/11/23/nodejs-create-webserver/)
* Node.js는 기본적으로는 정적 파일을 읽을 수 없음 => express 모듈 사용해야함

설치 (package.json) 파일 변화 확인하기
```
yarn add express
```

Express는 Node 위에서 직접 작동하기 때문에 build 명령어가 없음, 모든 파일이 필요함(node_modules 포함) [Link](https://okky.kr/articles/706282)

# JSONstream 사용하기

stream-json 대신 다운로드 수가 많은 JSONStream 으로 대체
설치
```
yarn add JSONStream
```

# Single page 배포하기 (Netlify)

* Build setting
    * Base directory: public
    * Build command: None
    * Publish directory: None

위의 세팅으로 ./public 에 index.html을 배치하는 것으로 종료

# Node.js , npm, yarn 재정리

* Node.js JavsScript 런타임 (주로 서버 위)

* JavaScript는 스크립트 언어로서, 특정 프로그램 안에서만 동작한다 e.g. 웹 브라우저

# Yarn + Netlify
* pacakge manager로써 Netlify은 Yarn을 지원 [Link](https://www.netlify.com/blog/2016/11/01/yarn-support-on-netlify/)

* 자동으로 yarn.lock을 찾아 package를 설치한다: Node.js를 쓰는 셈이 아닌 듯?

* parcel 을 이용해 간단한 static site를 distribution 형태로 만들 수 있음 [Link](https://slogga.tistory.com/105)
```
yarn add parcel-bundler --dev
```
로 설치 (--dev: 개발용 dependency에만 추가, 서버에는 올라가지 않음)

.json 파일을 .js 파일로 바꿔 업로드하는 상황 발생
```
yarn add parcel-plugin-static-files-copy --dev
```

설치 후 package.json에서 "staticFiles" 필드 추가 ... 파일만 복사하고 html 파일 내에서는 js로 수정

=> 다른 플러그인 설치

```
yarn add @parcel/transformer-raw --dev
```
root에 .parcelrc 파일 만들기
```
// .parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.json": ["@parcel/transformer-raw"]
  }
}
```
이것도 안돼서 webpack 사용해보기

# Webpack + Yarn + Netlify

REF: [Link](https://serzhul.io/JavaScript/learn-webpack-in-under-10minutes/)

필요 dep 설치
```
yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin --dev
```

설정 파일 만들기 /webpack.config.js
```
```

## css를 위한
```
yarn add css-loader style-loader --dev
```
css 파일은 index.html이 아닌 index.js에 불러오기

## 모던 자바스크립트를 위한(브라우저 호환)
```
yarn add @babel/core babel-loader @babel/preset-env --dev
```
@bable/core: 실제 엔진
babel-loader: webpack에 필요한 로더
@babel/preset-env 자바스크립트->ES5 변환

./babel.config.json 만들어서 설정 줘야함

=> ES6 코드를 하위 코드로 자동변환

## 정적 파일 연결
REF [Link](https://velog.io/@ansalstmd/BundlerWebpack-04.-%EC%A0%95%EC%A0%81-%ED%8C%8C%EC%9D%BC-%EC%97%B0%EA%B2%B0)
```
yarn add copy-webpack-plugin --dev
```

## fs 모듈 관련 오류

package.json 에 아래 코드 추가
```
"browser": {
  "fs": false,
  "path": false,
  "os": false
}
```