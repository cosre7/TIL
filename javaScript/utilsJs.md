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
