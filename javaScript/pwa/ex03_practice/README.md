# 순수 자바스크립트로 PWA 만들기
## 목차
[1. 웹앱 매니페스트 각 요소의 의미](#1-웹앱-매니페스트-각-요소의-의미)<br>
[2. 메인 화면 작성하기](#2-메인-화면-작성하기)
### 1. 웹앱 매니페스트 각 요소의 의미
```
// manifest.json
{
    "name": "안녕하세요! PWA by JS",
    "short_name": "PWA by JS",
    "description": "PWA start program",
    "scope": ".",
    "start_url": "./",
    "display": "fullscreen",
    "orientation": "portrait",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "icons": [
        {
            "src": "images/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```
`name` : 바로가기 아이콘 설치를 권장하는 팝업 배너와 스플래시 스크린에 표시되는 제목<br>
`short_name` : 바탕화면 바로가기 아이콘 아래 표시되는 제목<br>
`description` : 애플리케이션의 간단한 자기소개 문장 (PWA를 수집하는 웹 크롤러가 있다면 이 정보를 가져온다)<br>
`scope` : 매니페스트에 정의된 내용이 적용될 수 있는 파일들의 범위 지정<br>
- '.'은 현재 위치
- './'은 현재 위치를 중심으로 시작하는 하위 폴더    

`short_url` : 프로그램을 실행하면 시작될 URL 루트 경로 (반드시 .으로 시작)<br>
`display` : PWA를 실행하면 나타나는 화면의 형태를 설정하는 속성<br>
|옵션|의미|
|-|-|
|fullscreen|- 기기의 최대 화면으로 보여줌<br>- 기기의 운영체제가 fullscreen 미지원시 standalone으로 자동 설정|
|standalone|- 웹 브라우저의 주소, 상태 표시줄 등을 모두 제거한 화면을 보여줌<br>-웹 브라우저처럼 보이지 않는 상태<br>-일반적으로 가장 많이 사용|
|minimal-ui|-상단에 주소 표시줄만 추가<br>-기기의 운영체제에서 미지원 시 standalone으로 자동 설정|
|browser|웹 브라우저와 똑같은 모습으로 실행|

`orientation` : 화면의 방향을 결정하는 속성<br>
|옵션|의미|
|-|-|
|portrait|초상화처럼 세로로 실행|
|landscape|풍경화처럼 가로로 실행|

`theme_color` : 상태 표시줄의 색상 설정<br>
`background_color` : 스플래시 스크린의 배경색 설정<br>
#### 아이콘의 세 가지 속성
|속성|의미|
|-|-|
|src|이미지의 절대 주소 또는 상대 주소|
|sizes|이미지의 픽셀 크기|
|type|이미지의 파일 유형|

### 2. 메인 화면 작성하기
`언어 설정` : 언어를 미리 설정하지 않을 경우 PWA 실행 시마다 '다른 언어로 번역하시겠습니까?'라는 질문이 나와 UX가 크게 감소된다.<br>
`뷰포트 설정` : 모바일 브라우저로 PC용 사이트에 접속하면 화면이 작게 보이는 경우가 있는데 이는 뷰포트를 설정하지 않았기 때문이다. content의 어트리뷰트값을 설정하면 해결된다.<br>
|옵션|의미|
|-|-|
|width=device-width|모바일 기기의 해상도로 너빗값 자동 설정|
|initial-scale=1|모바일 기기에서 확대하거나 축소 기능 허용|
|user-scalable=no|모바일 기기에서 확대하거나 축소 기능 제한|

`파비콘` : 브라우저의 탭이나 즐겨찾기 옆에 있는 아이콘<br>
#### 플렉스 박스 설정 
- 화면에 표시할 글자와 이미지는 플렉스 박스(flex box)로 레이아웃을 배치
- 플렉스 박스 사용 시 모바일 기기의 크기를 자동으로 고려해 최적의 레이아웃 배치 가능
- html, body 높이를 반드시 100%로 고정해야 함

#### 매니페스트 파일 연결
```
<link rel="manifest" href="manifest.json">
```