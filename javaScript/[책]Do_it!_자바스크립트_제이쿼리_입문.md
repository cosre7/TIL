# Chapter04 객체
- 자바스크립트는 객체 기반 프로그래밍 언어
- 객체 구성 요소 : 속성(Property) + 기능(Method)
  - ex) 휴대폰 : 속성(색상, 크기) + 기능(전화 걸기, 문자 보내기)
   
## 04-1. 객체
### 객체란?
- 객체(Object) : 주변의 모든 사물
  - ex) TV : 속성(너비, 높이, 생상, 무게) + 기능(켜다(), 끄다(), 볼륨을 높이다(), 볼륨을 줄이다())
- 기본형
  ```
  객체.메서드(); // 객체의 메서드 실행
  객체.속성; // 객체의 속성값을 가져옴
  객체.속성 = 값; // 객체의 속성값을 바꿈
  ```
  
### 객체의 종류
- **내장객체(Built-in Object)**
  - 자바스크립트 엔진에 내장되어 있어 필요한 경우에 생성해서 사용
  - 문자(String), 날짜(Date), 배열(Array), 수학(Math) 등

- **브라우저 객체 모델(BOM, Browser Object Model)**
  - 브라우저에 계층 구조로 내장되어 있는 객체
  - window(브라우저; document와 location 객체의 상위 객체), screen, location(주소창), history, navigator, document(문서 영역) 등
    ```
    window.location.href="사이트 URL" //현재 열려있는 사이트에서 다른 사이트로 이동하고 싶을 때
    ```

- **문서 객체 모델(DOM, Document Object Model)**
  - HTML 문서 구조
  - 기본 구조
    ```
    <html>
      <head></head>
      <body></body>
    </html>
    ```
  - HTML 의 모든 요소들을 문서 객체로 선택하여 자유롭게 속성 변경 및 원하는 스타일(CSS) 적용 가능

## 04-2. 내장 객체
- 자바스크립트 엔진에 내장된 객체
- 필요한 경우 생성해서 사용 가능

### 내장 객체 생성하기
- 기본형
  ```
  참조 변수(인스턴스 이름) = new 생성 함수()
  ```
- 예제
  ```
  <script>
    var tv = new Object();
    tv.color = 'white';
    tv.price = 300000;
    tv.info = function() {
      document.write("tv 색상 : " + this.color, "<br>");
      document.write("tv 가격 : " + this.price, "<br>");
    }
    
    var car = {
      color: "black",
      price: 5000000,
      info: function() {
        document.write("car 색상: " + this.color, "<br>");
        document.write("car 가격: " + this.price, "<br>");
      }
    };
    
    document.write("<h1>tv 객체 메서드 호출</h1>");
    tv.info();
    document.write("<h1>car 객체 메서드 호출</h1>");
    car.info();
  </script>
  ```
  ![image](https://user-images.githubusercontent.com/76677629/145505534-12e6b628-4078-4bec-a462-f529c427916a.png)

### 날짜 정보 객체
- 현재 날짜 정보 제공
  ```
  참조 변수 = new Date();
  var t = new Date();
  ```

- 특정 날짜 정보 제공
  ```
  참조 변수 = new Date("연/월/일");
  var t = new Date("2002/5/31");
  
  참조 변수 = new Date(연, 월-1, 일);
  var t = new Date(2002,4,31);
  ```
- 2002년 월드컵 날짜와 관련둰 정보 출력 예제
  ```
  <script>
    var today = new Date();
    var nowMonth = today.getMonth(),
    nowDate = today.getDate(),
    nowDay = today.getDay();
    
    document.write("<h1>오늘 날짜 정보</h1>");
    document.write("현재 월: " + nowMonth, "<br>");
    document.write("현재 일: " + nowDate, "<br>");
    document.write("현재 요일: " + nowDay, "<br>");
    
    var worldcup = new Date(2002,4,31);
    var theMonth = worldcup.getMonth(),
    theDate = worldcup.getDate(),
    theDay = worldcup.getDay();
    
    document.write("<h1>월드컵 날짜 정보</h1>");
    document.write("2002월드컵 몇 월: " + theMonth, "<br>");
    document.write("2002월드컵 몇 일: " + theDate, "<br>");
    document.write("2002월드컵 무슨 요일: " + theDay, "<br>");
  </script>
  ```
  ![image](https://user-images.githubusercontent.com/76677629/145506884-7cf19d57-78b4-45dc-9e62-fa69595c557b.png)

- 현재 날짜부터 연말까지 며칠이 남았는지
  ```
  <script>
    var today = new Date();
    var nowYear = today.getFullYear();
    
    var theDate = new Date(nowYear, 11, 31); // 올해 연말에 대한 날짜 정보
    var diffDate = theDate.getTime() - today.getTime(); // 남은 날 = 특정 날짜 - 현재 날짜(밀리초 단위)
    
    var result = Math.ceil(diffDate/(60 * 1000 * 60 * 24));
    document.write("연말 D-day: " + result + "일 남았습니다. " );
  </script>
  ```
  ![image](https://user-images.githubusercontent.com/76677629/145506951-ad6fbf82-4e89-4758-a771-1c8995c33d30.png)

### 수학 객체
```
<script>
  var num = 2.1234;
  
  var maxNum = Math.max(10, 5, 8, 30) // 최댓값 -> 30
  ,   minNum = Math.min(10, 5, 8, 30) // 최솟값 -> 5
  ,   roundNum = Math.round(num) // 소수점 첫째 자리 반올림 -> 2
  ,   floorNum = Math.floor(num) // 소수점 첫째 자리 내림 -> 2
  ,   ceilNum = Math.ceil(num) // 소수점 첫째 자리 올림 -> 3
  ,   rndMum = Math.random() // 랜덤 숫자 -> 0~1
  ,   piNum = Math.PI; // 원주율 상수 반환 -> 3.14
  
  Math.random()*10; // 0부터 10까지 실수로 랜덤 숫자
  Math.floor(Math.random()*10); // 0부터 1까지 정수로 랜덤 숫자
</script>
```
