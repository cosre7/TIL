# Part2 jQuery
# Chaper13 기본
## 13.3 $(document).ready()
- **코드 13-4 document 객체의 ready 이벤트 연결**
  ```
  <script>
    $(document).ready(function () {

    });
  </script>
  ```
  - 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 의미

- **코드 13-6 복수 개의 이벤트 연결**
  ```
  <script>
    $(document).ready(function () {
      alert('First READY');
    });

    $(document).ready(function () {
      alert('Second READY');
    });

    $(document).ready(function () {
      alert('Third READY);
    });
  </script>
  ```
  - 이벤트로 여러 개의 함수를 연결할 수 있다.

- **코드 13-7 간단한 형식의 $(document).ready()**
  ```
  <script>
    $(function () {
    
    });
  </script>
  ```

## 13.4 기본 선택자
- **jQuery 메서드의 기본 형태**
  ```
  $선택자.메서드
  
  -> $('h1').css('color','red');
  ```

### 13.4.1 전체 선택자
- \*
- **코드 13-8 전체 선택자**
  ```
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
      <script>
          $(function () {
              $('*').css('color', 'red');
          });

      </script>
  </head>
  <body>
      <h1>Lorem ipsum</h1>
  </body>
  </html>
  ```

### 13.4.2 태그 선택자
- 태그의 이름을 그냥 사용
- **코드 13-9 body 태그 구성**
  ```
  <body>
      <h1>Lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <h1>Lorem ipsum</h1>
      <p>consectetur adipiscing elit.</p>
  </body>
  ```
  
- **코드 13-10 태그 선택자**
  ```
  <script>
      $(function () {
          $('h1').css('color', 'orange');
      });

  </script>
  ```
 
- **코드 13-11 여러 개의 태그 선택**
  ```
  <script>
      $(function () {
          $('h1, p').css('color', 'orange');
      });

  </script>
  ```
  
### 13.4.3 아이디 선택자
- 특정한 id속성이 있는 문서 객체를 선택하는 선택자
- **코드 13-12 body 태그 구성**
  ```
  <body>
      <h1>Header-0</h1>
      <h1 id="target">Header-1</h1>
      <h1>Header-2</h1>
  </body>
  ```

- **코드 13-13 아이디 선택자**
  ```
  <script>
      $(function () {
          $('#target').css('color', 'orange');
      });

  </script>
  ```

- **코드 13-14 특정 id 속성을 가지는 태그 선택**
  ```
  <script>
      $(function () {
          $('h1#target').css('color', 'orange');
      });

  </script>
  ```
  - `h1` 태그 중 id 속성이 `target`인 문서 객체

### 13.4.4 클래스 선택자
- **코드 13-15 body 태그 구성**
  ```
  <body>
      <h1 class="item">Header-0</h1>
      <h1 class="item select">Header-1</h1>
      <h1 class="item">Header-2</h1>
  </body>
  ```

- **코드 13-16 클래스 선택자와 특정 class 속성을 가지는 태그 선택**
  ```
  <script>
      $(function () {
          $('.item').css('color', 'orange');
          $('h1.item').css('background', 'red');
      });

  </script>
  ```

- **코드 13-17 두 가지 클래스를 모두 가지는 태그 선택**
  ```
  <script>
      $(function () {
          $('.item.select').css('color', 'orange');
      });

  </script>
  ```

## 13.8 배열관리
- each() 메서드는 매개변수로 입력한 함수로 for in 반복문처럼 객체나 배열의 요소를 검사하는 메서드
  ```
  형태1
  $.each(object, function(index, item) {})

  형태2
  $(selector).each(function(index, item) {})
  ```

### 13.8.1 자바스크립트 배열 관리
- **코드 13-28 배열 선언**
  ```
  <script>
      $(function () {
          var array = [
              {name: 'Hanbit Media', link: 'http://hanbit.co.kr'},
              {name: 'Naver', link: 'http://naver.com'},
              {name: 'Daum', link: 'http://daum.net'}
          ];
      });

  </script>
  ```

- **코드 13-29  $.each() 메서드**
  ```
  <script>
      $(function () {
          var array = [
              {name: 'Hanbit Media', link: 'http://hanbit.co.kr'},
              {name: 'Naver', link: 'http://naver.com'},
              {name: 'Daum', link: 'http://daum.net'}
          ];
      });

      $.each(array, function (index, item) {

      });
  </script>
  ```

- **코드 13-30 $.each() 메서드의 콜백 함수**
  ```
  $.each(array, function (index, item) {
      // 변수를 선언
      var output = '';

      // 문자열 만들기
      output += '<a href="' + item.link + '">';
      output += '     <h1>' + item.name + '</h1>';
      output += '</a>';

      // 집어넣기
      document.body.innerHTML += output;
  });
  ```

- **전체**
  ```
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
      <script>
          $(function () {
              var array = [
                  {name: 'Hanbit Media', link: 'http://hanbit.co.kr'},
                  {name: 'Naver', link: 'http://naver.com'},
                  {name: 'Daum', link: 'http://daum.net'}
              ];

              $.each(array, function (index, item) {
                  // 변수를 선언
                  var output = '';

                  // 문자열 만들기
                  output += '<a href="' + item.link + '">';
                  output += '     <h1>' + item.name + '</h1>';
                  output += '</a>';

                  // 집어넣기
                  document.body.innerHTML += output;
              });
          });

      </script>
  </head>
  <body>
  </body>
  </html>
  ```

### 13.8.2 jQuery 배열 관리
- **코드 13-31 HTML 페이지 구성**
  ```
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <style>
          .high-light {
              background: yellow;
          }
      </style>
      <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
      <script>
          $(function () {

          });
      </script>
  </head>
  <body>
      <h1>item - 0</h1>
      <h1>item - 1</h1>
      <h1>item - 2</h1>
      <h1>item - 3</h1>
      <h1>item - 4</h1>
  </body>
  </html>
  ```

- **코드 13-32 addClass() 메서드**
  ```
  <script>
      $(function () {
          $('h1').addClass('high-light');
      });
  </script>
  ```
  - 문서 객체에 class 속성을 추가
  - 반대는 removeClass()

- **코드 13-33 $(selector).each() 메서드**
  ```
  <script>
      $(function () {
          $('h1').each(function (index, item) {

          });
      });
  </script>
  ```

- **코드 13-34 style 태그 구성**
  ```
  <style>
      .high-light-0 {background: yellow;}
      .high-light-1 {background: orange;}
      .high-light-2 {background: blue;}
      .high-light-3 {background: green;}
      .high-light-4 {background: red;}
  </style>
  ```

- **코드 13-35 each() 메서드를 사용한 서로 다른 클래스 적용**
  ```
  <script>
      $(function () {
          $('h1').each(function (index, item) {
              $(item).addClass('high-light-' + index);
          });
      });
  </script>
  ```

- **코드 13-36 each() 메서드에서의 this 키워드**
  ```
  <script>
      $(function () {
          $('h1').each(function (index, item) {
              $(this).addClass('high-light-' + index);
          });
      });
  </script>
  ```
  - this 키워드는 item과 의미가 같다

- **코드 13-37 addClass() 메서드의 특수한 사용 방법**
  ```
  <script>
      $(function () {
          $('h1').addClass(function (index) {
              return 'high-light-' + index;
          });
      });
  </script>
  ```

# Chapter15 문서 객체 조작
## 15.8 문서 객체의 스타일 추가
```
방법1
$(selector).css(name, value);

방법2
$(selector).css(name, function(index, style) {});

방법3
$(selector).css(object);
```

- **코드 15-16 body 태그 구성**
  ```
  <body>
      <h1>Header-0</h1>
      <h1>Header-1</h1>
      <h1>Header-2</h1>
  </body> 
  ``` 
  
- **코드 15-17 css()메서드 - Setter 1**
  ```
  <script>
      $(function () {
          $('h1').css('color', 'red');
      });
  </script>
  ```
  
- **코드 15-18 css()메서드 - Setter 2**
  ```
  <script>
      $(function () {
          // 변수 선언
          var color = ['red', 'white', 'purple'];

          // 문서 객체의 스타일 변경
          $('h1').css('color', function(index) {
              return color[index];
          });
      });
  </script>
  ```

- **코드 15-19 css()메서드 - Setter 3**
  ```
  <script>
      $(function () {
          // 변수 선언
          var color = ['red', 'white', 'purple'];

          // 문서 객체의 스타일 변경
          $('h1').css({
              color: function(index) {
              return color[index];
          },
          backgroundColor: 'black'
          });
      });
  </script>
  ```

## 15.9 문서 객체의 내부 검사
- html() : 문서 객체 내부의 글자와 관련된 모든 기능 수행(HTML 태그 인식)
- text() : 문서 객체 내부의 글자와 관련된 모든 기능 수행

- **코드 15-20 body 태그 구성**
  ```
  <body>
      <h1>Header-0</h1>
      <h1>Header-1</h1>
      <h1>Header-2</h1>
  </body>
  ```

- **코드 15-21 html()메서드 - Getter**
  ```
  <script>
      $(function () {
          // 변수 선언
          var html = $('h1').html();

          // 출력
          alert(html);
      });
  </script>
  ```
  - `Header-0` 이 알림창으로 출력

- **코드 15-22 text()메서드 - Getter**
  ```
  <script>
      $(function () {
          // 변수 선언
          var text = $('h1').text();

          // 출력
          alert(text);
      });
  </script>
  ```
  - `Header-0Header-1Header-2` 이 알림창으로 출력
  
## 15.10 문서 객체의 내부 추가
```
형태1
$(selector).html(value);
$(selector).text(value);

형태2
$(selector).html(function(index, html) {});
$(selector).text(function(index, text) {});
```

- **코드 15-23 body 태그 구성**
  ```
  <body>
      <div></div>
      <div></div>
      <div></div>
  </body>
  ```

- **코드 15-24 html()메서드 - Setter**
  ```
  <script>
      $(function () {
          $('div').html('<h1>$().html() Method</h1>');
      });
  </script>
  ```

- **코드 15-25 text()메서드 - Setter**
  ```
  <script>
      $(function () {
          $('div').text('<h1>$().text() Method</h1>');
      });
  </script>
  ```
  
- **코드 15-26 html()메서드 - Setter 2**
  ```
  <script>
      $(function () {
          $('div').html(function (index) {
              return '<h1>Header-'  + index + '</h1>';
          });
      });
    </script>
  ```
  
- **코드 15-27 body 태그 구성**
  ```
  <body>
      <h1>Header-0</h1>
      <h1>Header-1</h1>
      <h1>Header-2</h1>
  </body>
  ```

- **코드 15-28 html()메서드 - Setter 3**
  ```
  <script>
      $(function () {
          $('h1').html(function (index, html) {
              return '★'  + html + '★';
          });
      });
  </script>
  ```
  
# Chapter23 jQuery Ajax
## 23.1 기본
- **index.html 파일 구성**
  ```
  <!DOCTYPE html>
  <html>
  <head>
      <title>jQuery Ajax Basic</title>
      <meta charset="UTF-8">
      <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
      <script>

      </script>
  </head>
  <body>

  </body>
  </html>
  ```
  
- **Ajax 메서드**
```
방법1
$.ajax(options);

방법2
$.ajax(url, options);
```

- **코드 23-2 $.ajax() 메서드 1**
  ```
  <script>
      $(function () {
          $.ajax('/data.html', {
              success: function (data) {}
          });
      });
  </script>
  ```
  - Ajax 가 성공했을 때 자동으로 success 이벤트 실행
  - success 이벤트 리스너의 첫 번째 매개변수는 Ajax가 성공했을 때 받은 데이터

- **코드 23-3 jQuery를 활용한 Ajax**
  ```
  <script>
      $(function () {
          $.ajax('/data.html', {
              success: function (data) {
                  $('body').append(data);
              }
          });
      });
  </script>
  ```

## 23.4 데이터 요청 방식
- **코드 23-12 index.html 파일 구성**
  ```
  <!DOCTYPE html>
  <html>
  <head>
      <title>XMLHttpRequest</title>
      <meta charset="UTF-8">
      <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
      <script>
          $(function () {
              $('#get').click(function () {});
              $('#post').click(function () {});
              $('#put').click(function () {});
              $('#delete').click(function () {});
          });
      </script>
  </head>
  <body>
      <button id="get">GET</button>
      <button id="post">POST</button>
      <button id="put">PUT</button>
      <button id="delete">DELETE</button>
      <h1>input</h1>
      <input id="name" />
      <input id="price" />
      <h1>output</h1>
      <textarea id="output" disabled="disabled" cols="40" rows="5"></textarea>
  </body>
  </html>
  ```

### 23.4.1 GET 요청
- **코드 23-13 GET 요청**
```

```











































  
  
  
  
  
  
  
  
