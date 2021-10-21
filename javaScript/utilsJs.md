# 목차
- **input 태그 동적 생성 (id값 각각 다르게)**
  ```
  * html *
  <div id="formDiv"></div>
  
  * javaScript *
  <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script type="text/javascript">
  
  for (var i = 1; i <= 10; i++) {
		var firstFactorTag = document.createElement('input');
		firstFactorTag.setAttribute('id', 'firstFactor'+i);
    
    var secondFactorTag = document.createElement('input');
    secondFactorTag.setAttribute('id', 'secondFactor'+i);
    
    var productTag = document.createElement('input');
    productTag.setAttribute('id', 'product'+i);
    
		$("#formDiv").append(firstFactorTag, ' × ', secondFactorTag, ' = ', productTag, '<br>');
	}
	    
  $("#formDiv").append("<button type='button'>계산하기</button>");
  ```
  
- **동적 생성된 input 태그 값 출력 (id값 이용)**
  ```
  * html *
  <div id="resultDiv"></div>

  * javaScript *
  $('button').on('click', function() {

    // 배열 선언
    var dataArr = new Array();

    for (var i = 1; i <= 10; i++) {
	// 객체 생성
	var dataObj = new Object();

	// 객체에 input 값을 담는다.
	dataObj.firstFactor = $('#firstFactor' + i).val();
	dataObj.secondFactor = $('#secondFactor' + i).val();

	// 배열에 생성된 객체를 삽입한다.
	dataArr.push(dataObj);

    }

  // 배열을 json 형태의 문자열로 만든다.
  var jsonData = JSON.stringify(dataArr);

  $('#resultDiv').html(jsonData);
  ```

- **input 값 배열에 담기**
  ```
  let alpha = document.getElementById("alpha").value; // 입력한 값 alpha 변수에 저장
  let splitedAlpha = alpha.split('');
  ```
  
- **input 값 숫자로 받기(id 이용)**
  ```
  방법1)
  var input = Number(document.getElementById("input").value);
  
  방법2)
  var input = Number($('#input').val());
  ```
  
- **문자의 ASCII 코드 번호 알아내기**
  ```
  'The quick brown fox jumps over the lazy dog.'.charCodeAt(4) -> 'The~' 문자열의 4번째 인덱스의 ASCII 코드
  -> 'q'의 ASCII 코드 = 113
  ```

- **문자열 전체 ASCII 코드 번호**
  ```
  var icons = '☃★♲';
  
  icons.codePointAt(1) = 9733
  ```

- **a ~ z 출력하는 반복문**
  ```
  for(i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  	document.write(i); // 97 98 99 ~
	document.write(String.fromCharCode(i)); // a b c ~
  ```
  
- **ASCII 코드에 해당하는 문자 반환**
  ```
  String.fromCharCode(97) => a
  ```
  
- **배열 내림차순 정렬**
  ```
  배열.sort(function(a,b) {
  	return b[1] - a[1];
  });
  ```
  
- **배열에 객체 넣기**
  ```
  alphaObj = {name: String.fromCharCode(i), number: number_lowerCase};
  alphaCount.push([alphaObj.name, alphaObj.number]);
  
  -> alphaCount : [[a, 1], [b, 2], ..]]
  ```
  
- **key:value 형식으로 객체 출력**
  ```
  for(var [key, value] of Object.entries(alphaObj)) {
      document.write(`${key}:${value}`); // name:a number:1 name:b number:0
      document.write("</br>")
  }
  ```
  
- **객체를 구성하는 전체 값을 배열로 출력**
  ```
  방법1)
  for(i of Object.values(alphaObj)) {
      document.write(i + "</br>"); // a 1 b 0 
  }

  방법2)
  for(var cnt in alphaObj) {
      document.write(alphaObj[cnt] + "<br>"); // a 1 b 0 
  }
  ```

- **객체를 구성하는 전체 키를 배열로 출력**
  ```
  방법1)
  for(i of Object.keys(alphaObj)) {
     document.write(i + "</br>"); // name number name number
  }

  방법2)
  for(var cnt in alphaObj) {
      document.write(cnt + "<br>"); // name number name number
  }
  ```
  
- **배열 테이블로 분리시키기**
  ```
  document.write("<table border = 1>");
  for(i = 0; i < 10; i++) {
      document.write("<tr> <td>" + (i+1) + "위 </td> <td>" + alphaCount[i].join("</td><td>") + "</td> </tr>");
  }
  document.write("</table>")
  ```

- **객체형태 함수 선언**
  ```
  var MultiplicationFactory = {};
  MultiplicationFactory.multiplyTable = [];
  
  // 함수 선언
  MultiplicationFactory.createMultiplyTable = function( startRowNumber , endRowNumber, startColumNumber , endColumNumber) {
    
      var count = startRowNumber;
      while (count <= endRowNumber) {
          this.multiplyTable[count] = MultiplicationFactory.createMultiplyRow(count, startColumNumber, endColumNumber);
          ++count;
      }
      // 
      return this.multiplyTable;
  }
  ```

- **html 문서 내에서 자바스크립트, jquery 선언**
  ```
  <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script type="text/javascript">
  </script>	
  ```

- **버튼 클릭 시 함수 연결**
  ```
  <button type="button">버튼</button>
  
  <script>
  	$('button').on('click', function() {
		// 실행할 내용
	});
  </script>
  ```

- **ajax 호출**
  ```
  방법1)
  $.ajax({
  	url: "연결할 url",
	data: 보낼 데이터,
	async: false(비동기), // true(default) - 동기
	beforeSend: function() {
		// ajax 요청을 보내기 전 먼저 실행되는 함수
		return false; // beforeSend 시점에서 중단되게 하는 부분
	},
	success: function(returnValue) {
		// ajax 요청이 성공적으로 되어 returnValue가 왔을 때 실행되는 함수
	},
	error: function(error) {
		// ajax 요청 결과 에러가 날 때 실행되는 함수
	}
  });
  
  방법2)
  $.ajax({
  	url: "연결할 url",
	data: 보낼 데이터,
	async: false(비동기), // true(default) - 동기
	beforeSend: function() {
		// ajax 요청을 보내기 전 먼저 실행되는 함수
		return false; // beforeSend 시점에서 중단되게 하는 부분
	}
  })
  .done(function(returnValue) {
  	// ajax 요청이 성공적으로 되어 returnValue가 왔을 때 실행되는 함수
  })
  .fale(function(error) {
  	// ajax 요청 결과 에러가 날 때 실행되는 함수
  });
  ```

- **javascript에서 html 영역에 내용 넣기**
  ```
  var src = "";
  src += '<table border="1">';
  src += '<tr>';
  src += '<td>';
  src += '</td>';
  src += '</tr>';
  src += '</table>';
  $("#resultDiv").html(src); // id=resultDiv 인 영역에 src 
  ```

- **null 개수 구하기**
  ```
  var firstTimesNumber = value.filter((element) => null === element).length;
  ```
  
- **javascript에서 \<input> 태그 만들기**
  ```
  // □ × □ = □ 형식 10개 만들기
  for (var i = 1; i <= 10; i++) {
  	var firstFactorTag = document.createElement('input');
  	firstFactorTag.setAttribute('id', 'firstFactor'+i);
  	firstFactorTag.setAttribute('placeholder', '숫자1');
  	firstFactorTag.setAttribute('onKeyup', "this.value=this.value.match(/^(-?)[0-9]*/g);");

  	var secondFactorTag = document.createElement('input');
  	secondFactorTag.setAttribute('id', 'secondFactor'+i);
  	secondFactorTag.setAttribute('placeholder', '숫자2');
   	secondFactorTag.setAttribute('onKeyup', "this.value=this.value.match(/^(-?)[0-9]*/g);");

  	var productTag = document.createElement('input');
  	productTag.setAttribute('id', 'product'+i);
  	productTag.setAttribute('readonly', true); // readonly 지정 방법
  	productTag.setAttribute('placeholder', '답');

  	$("#formDiv").append(firstFactorTag, ' × ', secondFactorTag, ' = ', productTag, '<br>');
  }
  ```

- **객체에 input 값 담기**
  ```
  for (var i = 1; i <= 10; i++) {
  	// 객체 생성
  	var dataObj = new Object();

  	// 객체에 input 값을 담는다.
  	dataObj.firstFactor = $('#firstFactor' + i).val();
  	dataObj.secondFactor = $('#secondFactor' + i).val();
  	dataObj.product = 'product' + i;
  }
  ```
  
- **ajax 호출로 리턴받은 값 JSON 형태로 받기**
	```
	var value = JSON.parse(returnValue);
	```

- **json 형태 값 key, value 출력**
	```
	var value = JSON.parse(returnValue);
	
	value.forEach(function(item) { 
		for (var key in item) { // value의 key를 모두 열거.
			console.log(key); // key값 출력
			console.log(item[key]); key값에 대한 value 출력
		}
	})
	```
	
- **id=key 에 속성 추가**
	```
	var value = JSON.parse(returnValue);
	
	value.forEach(function(item) { 
		for (var key in item) { // value의 key를 모두 열거.
			$('#' + key).attr('value',item[key]); // id=key 인 태그의 value 속성에 item[key] 값 추가
		}
	})
	```

- **배열에서 null 제거하기**
	```
	var factorsList = [];
	var removeNullRow = factorsList.filter((element) => element != null);
	```
	
- **배열을 json 문자열로 만들기**
	```
	var factorsList = [];
	var removeNullRow = factorsList.filter((element) => element != null);
	var jsonString = JSON.stringify(removeNullRow);
	```

- **양수, 음수만 입력받는 input 태그 만들기**
	```
	var firstFactorTag = document.createElement('input');
	firstFactorTag.setAttribute('id', 'firstFactor'+i);
	firstFactorTag.setAttribute('onKeyup', "this.value=this.value.match(/^(-?)[0-9]*/g);");
	```

- **ajax 에서 json 형태 문자열 데이터를 data로 보낼 때**
	```
	var jsonData = JSON.stringify(배열);
	
	$.ajax({
		url: "/",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		method: "post"
	}).done(function(returnValue) {
	}).fale(function(error) {
	});
	```

- 




