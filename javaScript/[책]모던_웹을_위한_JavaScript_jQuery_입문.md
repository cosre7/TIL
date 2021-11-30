# Part1 javascript
# Chapter5 함수
- 호출 : 함수 내부의 코드를 실행하는 것
- 매개변수 : 함수에 자료 값을 넘기기 위해 사용하는 것
- 리턴 : 함수를 실행한 결과로 나오는 것
- 콜백함수 : 함수의 매개변수로 함수를 전달할 때, 해당 함수
## 5.1 익명 함수
- 함수는 코드의 집합을 나타내는 자료형
```
var 함수 = function() {};
```
- 괄호 내부에 코드를 넣기 때문에 함수를 코드의 집합이라 말한다.
- **코드 5-1 함수 생성과 출력**
```
<script>
  // 변수 생성
  var 함수 = function() {
    var output = promt('숫자를 입력해주세요.', '숫자');
    alert(output);
  };
  
  // 출력
  alert(함수);
</script>
```
- 함수를 실행하는 것 = 함수를 호출하다.
```
<script>
  // 함수 생성
  var 함수 = function () {
    var output = prompt('숫자를 입력해주세요.', '숫자');
    alert(output);
  };
  // 함수 호출
  함수(); //다른 자료형들과 다르게 괄호를 열고 닫음으로써 코드를 실행
</script>
```

## 5.2 선언적 함수
```
// 방법 1
function 함수() {

}

// 방법 2
var 함수 = function() {};
```

- **코드 5-4 선언적 함수의 재정의 1**
```
<script>
  function 함수() {alert('함수 A');}
  function 함수() {alert('함수 B');} // 뒤에 위치한 함수() 가 실행 // 함수 B
  함수();
</script>
```
- **코드 5-5 익명 함수의 재정의 1**
```
<script>
  var 함수 = function () {alert('함수 A');};
  var 함수 = function () {alert('함수 B');}; // 뒤에 위치한 함수()가 실행 // 함수 B
  함수();
</script>
```
- **코드 5-6 익명 함수의 재정의 2**
```
<script>
  함수();
  var 함수 = function () {alert('함수 A');};
  var 함수 = function () {alert('함수 B');};
</script>
// 변수 선언 이전에 변수를 사용했기 때문에 오류가 발생하여 실행되지 않는다.
```
- **코드 5-7 선언적 함수의 재정의 2**
```
<script>
  함수(); // 1
  function() {alert('함수 A');}; // 2
  function() {alert('함수 B');}; // 3
</script>
// 2->3->1 의 순서로 실행
```
- 익명 함수가 아닌 선언적 함수의 형태로 함수를 정의할 경우 웹 브라우저에서는 script 태그 내부의 내용 중 선언적 함수를 먼저 읽는다.
-  **코드 5-8 선언적 함수와 익명 함수의 실행 순서**
```
<script>
  // 함수 생성
  var 함수 = function() {alert('함수 A');}; // 2
  function 함수() {alert('함수 B');}; // 1
  
  // 함수 호출
  함수(); // 3 // 함수 A 출력
</script>
```

## 5.3 매개변수와 리턴 값
- 매개변수 : 함수를 호출할 때 괄호 안에 적는 것 -> 함수 안으로 넣는 input
- 리턴 값 : 함수를 호출하고 함수가 변환되는 값 -> 함수의 결과로 나오는 output

```
function <함수이름>(<매개변수>, <매개변수>, <매개변수>) {
  <함수 코드>
  return <리턴 값>;
}
```
- **코드 5-9 매개변수와 리턴 값**
```
<script>
  // 함수 생성
  function f(x) {return x * x;}
  
  // 함수 호출
  alert(f(3)); // 9 출력
</script>
```

## 5.4 매개변수
- 매개변수라는 이름은 함수를 호출하는 쪽과 함수를 연결하는 매개가 되는 변수이므로 사용하게 된 것
- 함수를 생성할 때 함수에서 지정한 매개변수 개수보다 많거나 적은 매개변수를 사용하는 것을 허용
```
<script>
  // 함수 호출
  alert('원래 매개변수', '추가된 매개변수'); // 추가된 매개변수는 무시
  prompt('원래 매개변수');
</script>
```
- 일반적으로 추가된 매개변수는 무시하고 원래 매개변수만 출력
- 원래 함수에서 선언가능한 매개변수보다 적게 선언하면 지정하지 않은 매개변수는 undefined
- **코드 5-11 Array() 함수
```
<script>
  // 배열 생성
  var array1 = Array(); // 아무것도 출력되지 않는다. // 빈 배열을 만든다. Array()
  var array2 = Array(10); // ,,,,,,,,, 출력 // 매개변수 값만큼의 크기를 가지는 배열을 만든다. Array(number)
  var array3 = Array(273, 103, 57, 32); // 273, 103, 57, 32 출력 // 매개변수를 배열로 만든다. Array(any, ..., any)
  
  // 출력
  alert(array1 + '\n' + array2 + '\n' + array3);
</script>
```

## 5.5 가변 인자 함수
- 가변 인자 함수
  - 매개변수의 개수가 변할 수 있는 함수
  - 매개변수를 선언된 형태와 다르게 사용했을 때, 매개변수를 모두 활용하는 함수
- **코드 5-12 sumAll() 함수 생성**
```
<script>
  function sumAll() {
  
  }
</script>
```
- arguments : 매개변수의 배열

- **코드 5-13 arguments 객체**
```
<script>
  // 함수 생성
  function sumAll() {
    // 출력
    alert(typeof (arguments) + ' : ' + arguments.length);
  }
  
  // 함수 호출
  sumAl(1, 2, 3, 4, 5, 6, 7, 8, 9); // 9
</script>
```

- **코드 5-14 arguments 객체를 사용한 가변 인자 함수**
```
<script>
  // 함수 생성
  function sumAll() {
    var output = 0;
    for (var i = 0; i < arguments.length; i++) {
      output += arguments[i]
    }
    return output;
  }
  
  // 함수를 호출 및 출력
  alert(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
</script>
```

- 매개변수가 다른 경우 서로 다른 것을 리턴하는 함수 만들기 -> 배열 arguments의 요소 개수에 따라 조건 설정
- **코드 5-15 가변 매개변수 함수 생성**
```
<script>
  function 이렇게함수() {
    // 매개변수의 개수를 가져온다.
    var length = arguments.length;
    
    // 조건을 나누어준다.
    if (length == 0) {
      // 매개변수가 없을 때
    } else if (length == 1) {
      // 매개변수가 한 개일 때
    } else {
      // 매개변수가 두 개일 때
    }
  }
</script>
```
## 5.6 리턴 값
```
<script>
  function f(x) {return x * x;}
  var 리턴된값 = f(5);
  alert(리턴된값);0
</script>
```
- return 키워드는 함수가 실행되는 도중 함수를 호출한 곳으로 돌아가라는 의미
- -> return 키워드를 사용하면 값을 지정하지 않아도 함수를 호출한 곳으로 돌아간다.
- **코드 5-16 return 키워드**
```
<script>
  // 함수 생성
  function returnFunction() {
    alert('문장 A');
    return; // 종료
    alert('문장 B');
  }
  
  // 함수 호출
  returnFunction(); // 문장 A 출력
</script>
```

- **코드 5-17 return 키워드 뒤에 값을 입력하지 않을 경우**
```
<script>
  // 함수 생성
  function returnFunction() {
    return;
    alert('문장 A');
    alert('문장 B');
  }
  
  // 함수 호출
  var output = returnFunction();
  alert(typeof (output) + ' : ' + output); // undefined : undefined
</script>
```

## 5.7 내부 함수
- 프로그램의 규모가 커지면 커질수록 다른 사람과 함께 프로그램을 개발하며 여러 가지 충돌이 발생
- 내부 함수는 이러한 충돌을 막는 방법
- 내부 함수 : 함수 내부에 선언하는 함수
```
function <외부 함수>() {
  function <내부 함수 1>() {
    <함수 코드>
  }
  
  function <내부 함수 2>() {
    <함수 코드>
  }
  
  <함수 코드>
}
```

- **코드 5-18 피타고라스의 정리 함수 1**
```
<script>
  function pythagoras(width, height) {
    return Math.sqrt(width * width + height * height); // 숫자 제곱
  } 
</script>
```

- **코드 5-19 피타고라스의 정리 함수 1 - 함수 추출**
```
<script>
  // 제곱을 구하는 함수
  function square(x) {
    return x * x;
  }
  
  // 피타고라스 함수
  function pythagoras(width, height) {
    return Math.sqrt(square(width) + square(height));
  }
</script>
```

- **코드 5-20 함수 이름 충돌**
```
<script>
  /* 윤 씨가 만든 함수 */
  // 제곱을 구하는 함수
  function square(x) {
    return x * x;
  }
  
  // 피타고라스 함수
  function pythagoras(width, height) {
    return Math.sqrt(square(width) + square(height));
  }
  
  // 피타고라스 함수 호출
  alert(pythagoras(3, 4));
  
  /* 연 씨가 만든 함수 */
  // 삼각형이 직각인지 확인하는 함수
  function square(width, height, hypotenuse) {
    if (width * width + height * height == hypotenuse * hypotenuse) {
      return true;
    } else {
      return false;
    }
  }
</script>
// 윤 씨의 square() 함수는 연 씨의 square() 함수에 덮어씌워진다. -> pythagoras() 함수 내부에서는 연 씨의 square() 함수를 사용
```
- 내부 함수를 이용하여 이름 충돌을 막는다.
- **코드 5-21 내부 함수**
```
<script>
  function pythagoras(width, height) {
    function square(x) {
      return x * x;
    }
    
    return Math.sqrt(square(width) + square(height));
  }
  
  square(width); // 사용 불가
</script>
```
- 내부 함수는 내부 함수를 포함하는 함수에서만 사용할 수 있다.

-**코드 5-22 자기 호출 함수**
```
<script>
  (function () {
    // 코드
    // 코드
    // 코드
  })();
</script>
```
- 다른 개발자에게 영향을 주지 않게 함수를 생성하자 마자 호출한다 -> 자기 호출 함수

## 5.8 콜백 함수
- 콜백 함수 : 매개변수로 전달하는 함수
- 다른 프로그래밍 언어에서 찾아보기 힘든 개념
- **코드 5-23 익명 함수를 매개변수로 전달**
```
<script>
  // 함수 선언
  function callTenTimes(callback) {
    // 10회 반복
    for (var i = 0; i < 10; i++) {
      // 매개변수로 전달된 함수를 호출
      callback();
    }
  }
  
  // 변수 선언
  var callback = function () {
    alert('함수 호출');
  }
  
  // 함수 호출
  callTenTimes(callback);
</script>
```

- **코드 5-24 익명 콜백 함수**
```
<script>
  // 함수 선언
  function callTenTimes(callback) {
    for (var i = 0; i < 1;0; i++) {
      callback();
    }
  }
  
  // 함수 호출
  callTenTimes(function () {
    alert('함수 호춮');
  });
</script>
```

## 5.9 함수를 리턴하는 함수
- **코드 5-25 익명 함수를 리턴하는 함수**
```
<script>
  // 함수 생성
  function returnFunction() {
    return function () {
       alert('Hello Function .. !');
    };
  }
  
  // 함수 호출
  returnFunction()(); // returnFunction() 함수를 호출하면 함수가 리턴되므로 괄호를 한 번 더 사용해 해당 함수를 호출
</script>
```




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











































  
  
  
  
  
  
  
  
