# 목차
- [목차](#목차)

## HTML5 
# 시작
## 기본구조
```
<!DOCTYPE html> : 현재 문서가 HTML5 문서임을 명시

<html> : HTML 문서의 루트(root) 요소를 정의

<head> : HTML 문서의 메타데이터(metadata) 정의
       - 메타데이터란 HTML 문서에 대한 정보(data) -> 웹 브라우저에는 직접적으로 표현되지 않는 정보
       - <title>, <style>, <meta>, <link>, <script>, <base> 태그 등을 이용

<title> : HTML 문서의 제목
        - 웹 브라우저의 툴바(toolbar)에 표시
        - 즐겨찾기 제목
        - 검색 엔진의 결과 페이지 제목
        
<body> : 웹 브라우저 내용(content)

<h1>~<h6> : 제목(heading)

<p> : 단락(paragraph)
```

# 텍스트 요소
## 제목
### 제목(Heading)
```
<body>
  <h1>헤드라인 크기 1</h1>
  <h2>헤드라인 크기 2</h2>
  <h3>헤드라인 크기 3</h3>
  <h4>헤드라인 크기 4</h4>
  <h5>헤드라인 크기 5</h5>
  <h6>헤드라인 크기 6</h6>
</body>
=> 숫자가 클수록 크기가 작아진다
=> 검색엔진에서 <h> 태그를 이용하여 키워드를 수집하고 내용 파악 -> 제목을 <h> 태그로 작성해야만 검색엔진에서 제대로 검색
```
![image](https://user-images.githubusercontent.com/76677629/138039969-e957fc78-9334-42b8-94f5-81a36945a9bc.png)

## 단락
### 단락(Paragraph)
```
<body>
	<h3>제목3</h3>
	<p>단락1</p>
    <p>단락2</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138825543-b4db4407-8aa1-471b-bbbd-2101c0fe1516.png)

### 띄어쓰기와 줄 나누기
```
<body>
	<p>
br 태그 없이 작성한 문서

띄어쓰기       많이     하기 
	</p>
	<hr>
    <p>
br 태그를<br>
사용한 문서<br>
<br>
띄어쓰기       많이     하기 
	</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138825991-f303388e-6855-471f-b9a5-a3dbb02b5552.png)

### 텍스트(text) 서식 미리 정의
```
<body>
	<pre>
pre 태그를 사용한 문서
작성한 그대로

출력이          된다.
	</pre>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138826171-55f0c7f1-70b1-4c8a-9bf9-18064ec99fce.png)

### 수평 가로 구분선
```
<body>
	<p>첫 번째</p>
	<hr>
	<p>두 번째</p>
	<hr>
	<p>세 번째</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138820174-a77b0c23-86f7-46cc-a18e-5836c88d978d.png)

## 서식
### 강조 효과
```
<body>
    <p>기본체</p>
    <p><b>볼드체</b></p> -> 단순히 글씨가 굵은 부분
    <p><i>이탤릭체</i></p> -> 단순히 글씨가 이탤릭체
    <p><i><b>볼드이탤릭체</b></i></p>
</body>>

+추가 (검색엔진에서 더 중요하게 인식)
<body>  
  <p>내 고양이는 <strong>아주</strong> 고약해.</p> -> 글씨 굵게 + 중요하다는 의미
  <em>This is my text.</em> -> 중요한 부분이라서 이탤릭체
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138040037-3b78a10b-2bf1-454f-830c-72f9f303b8b2.png) 
![image](https://user-images.githubusercontent.com/76677629/138644025-02ca807f-3a25-4222-8341-272f8260e983.png)

### 하이라이팅
```
<body>
	<p><mark>"이 부분"</mark> 하이라이팅</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138820557-002f50e3-07d8-41fe-8c3b-41d7c1b4b6f3.png)

### 밑줄, 취소선
```
<body>
    <p><u>밑줄</u></p>
    <p><s>취소선</s></p>
    <p><u><s>밑줄+취소선</s></u></p>
</body>

+추가
<body>
	<p><del>"이 부분"</del> 취소선</p>
  <p><ins>"밑줄 친 부분"</ins> 밑줄</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138040066-a4807a41-f68f-48aa-a97e-cfb5cdd73e51.png)
![image](https://user-images.githubusercontent.com/76677629/138820955-95b55297-7fe3-4e49-8ca9-d163c9bad67c.png)

### 위첨자, 아래첨자
```
<body>
	<p>X<sup>2</sup> + Y<sup>3</sup> = Z</p>
	<p>물의 화학식은 H<sub>2</sub>O</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138821076-46a757d4-8fd5-45a5-b428-15b792890053.png)

## 인용구
### 짧은 인용구
```
<body>
	<p>본문이 이어지다가 
	<q>인용구가 나오고</q>
	다시 본문</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138821255-5a5c7f30-c26d-46d8-a444-8859812798e0.png)

### 블록 인용구
```
<body>
	<p>단어</p>
	<blockquote>
	단어의 정의를 길게 작성하게될 때 이렇게 블록 인용구를 사용하면 좋다.
    </blockquote>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138821502-bb62acf1-f1ce-4861-816b-7e757e6797ef.png)

### 축약형 표현
```
<body>
	<p>단어 위에 마우스를 올려놓게 되면</p>
	<p><strong><abbr title="마우스를 올렸을 때 나오는 글">마우스 올리기</abbr></strong>
	마우스를 올리면 "마우스를 올렸을 때 나오는 글"이 표시된다.</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138822065-cc1b6d15-4722-4a76-819a-4532655e2132.png)

### 주소 표현
```
<body>
	<address>
		서울특별시<br> 
		강남구 테헤란로
	</address>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138822396-864eb91f-6cf2-4e3b-8cdc-b0d1f09e7b1c.png)

## 주석
### 주석(comment)
```
<body>
  <!-- 주석 삽입 -->
<body>
```

## 엔티티
### 대표적인 엔티티
```
<body>
  <p>가나다&nbsp;라마바 -> 공백</p>
  <p>가나다&lt;라마바 -> 보다 작은</p>
  <p>가나다&gt;라마바 -> 보다 큰</p>
  <p>가나다&amp;라마바 -> AND 기호</p>
  <p>가나다&quot;라마바 -> 큰 따옴표</p>
  <p>가나다&apos;라마바 -> 작은 따옴표</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138823262-18f2678a-4644-477a-a678-45985d8ddb2c.png)

### 발음 구별 부호
```
<body>
  <p>a&#768;</p>
  <p>a&#769;</p>
  <p>a&#770;</p>
  <p>a&#771;</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138823490-4ad873e4-3d75-44d5-b6da-1e9fa9514808.png)

### 심볼(Symbol) 특수문자
```
<body>
  <p>&cent; : 센트</p>
  <p>&pound; : 파운드화</p>
  <p>&yen; : 엔화</p>
  <p>&euro; : 유로화</p>
  <p>&copy; : 저작권</p>
  <p>&reg; : 등록상표</p>
  <p>&times; : 곱셈</p>
  <p>&divide; : 나눗셈</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138823969-d6f8beb7-01d0-43ac-ad69-fe5feef53f0f.png)

## 문자셋
### 문자셋(Charcter set)
```
<head>
  <meta http-equiv=""Content-Type" content="text/html; charset=euc-kr" /> -> 한글 사이트
  <meta http-equiv=""Content-Type" content="text/html; charset=utf-8" /> -> 한글 사이트
  <meta http-equiv=""Content-Type" content="text/html; charset=iso-8859-1" /> -> 영문 사이트
  <meta charset="UTF-8"> -> HTML5
</head>

*문자셋 종류*
1. ASCII : 가장 처음 만들어진 문자셋, 127개의 영문자와 숫자
2. ANSI : 윈도우즈에서 만든 문자셋, 총256개 문자코드
3. ISO-8859-1 : 256개 문자코드 지원, HTML4 기본 문자셋
4. UTF-8 : 세상에 있는 거의 모든 문자(유니코드 문자), HTML5 기본 문자셋
```

# 기본 요소
## 스타일
### HTML 스타일(Style)
```
<태그이름 style="속성이름:속성값">
```

### 배경색 변경
```
<body style="background-color:#33CCFF">

	<h1 style="background-color:white">
		배경색 변경
	</h1>

</body>
```
![image](https://user-images.githubusercontent.com/76677629/138828106-61e08cec-3189-42db-9910-4ccc2da5e7f6.png)

### 글자색 변경
```
<body>

	<h1 style="color:blue">
		글자색 변경
	</h1>

</body>
```
![image](https://user-images.githubusercontent.com/76677629/138828390-d58e1592-ea50-4aeb-a0fc-2435a297405c.png)

### 글자 크기 변경
```
<body>

    <h1>
		h1 크기
	</h1>
	<h1 style="font-size:250%">
		글자 크기 변경
	</h1>

</body>
```
![image](https://user-images.githubusercontent.com/76677629/138828606-097c9786-7529-471d-93f7-5c55f5bfbdea.png)

### 문단 정렬 변경
```
<body>
	<h1 style="text-align:left">
		왼쪽 정렬
	</h1>
	<h1 style="text-align:center">
		가운데 정렬
	</h1>
  <h1 style="text-align:right">
		오른쪽 정렬
	</h1>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138828768-cdc25cb1-5f4d-4818-a00f-60d981fbd591.png)

### 여러 속성 적용
```
<body style="background-color:violet">

	<h1 style="background-color:white; color:maroon; font-size:150%; text-align:center">
		여러개 속성 적용
	</h1>

</body>
```
![image](https://user-images.githubusercontent.com/76677629/138828912-6fa9da83-41da-410c-9e27-720435b38046.png)

## 색
### 색(color)표현
```
<body>

	<h1 style="color:blue">색상 이름</h1>
	<h1 style="color:rgb(0,0,255)">색상값</h1>
	<h1 style="color:#0000FF">16진수 색상값</h1>

</body>
```
![image](https://user-images.githubusercontent.com/76677629/138829295-1fa41b86-06ba-43ba-9b9f-6a487f23112d.png)

## 링크
### 링크(Link)
```
*URL 방식*
<body>
    <a href="https://www.naver.com" target="_blank">새 창</a> -> 새 창이나 새 탭
    <a href="https://www.naver.com" target="_self">현재 프레임</a> -> 현재 프레임(frame) => 기본
    <a href="https://www.naver.com" target="_parent">부모 프레임</a> -> 부모 프레임
    <a href="https://www.naver.com" target="_top">가장 상위 프레임</a> -> 현재 창의 가장 상위 프레임
    <a href="https://www.naver.com" target="myframe">myframe</a> -> 지정된 프레임
    
    <iframe name="myframe" style="width:50%; height:330px"></iframe>
</body>

*path 방식*
<body>
    <p>1.<a href="contacts.html">같은 디렉토리</a></p>
    <p>2.<a href="projects/index.html">하위 디렉토리</a></p>
    <p>3.<a href="../pdfs/project-brief.pdf">부모 디렉토리</a></p>
</body>

+ 추가
<body>
    <a href="https://www.naver.com" title="네이버홈페이지" target="_blank">네이버</a>
</body>
-> 마우스를 올렸을 때 '네이버홈페이지'라는 문구가 뜬다.
-> **축약형 표현** 방식도 가능
```
![image](https://user-images.githubusercontent.com/76677629/138651442-071aa767-51e0-40f7-b6d2-37a00f045106.png)
![image](https://user-images.githubusercontent.com/76677629/138041870-30bcb188-af35-4370-b852-15916ff87df0.png)

### 내부링크(북마크)
```
<body>
    <!-- 상단 책갈피 위치 지정 -->
    <a id="top"></a> <!-- "위로" 클릭 시 도착-->
    [<a href="#a">메뉴 1</a>]&nbsp;&nbsp;
    [<a href="#b">메뉴 2</a>]
    <br><br><br><br>
    <!-- 메뉴 1 위치 지정 -->
    <hr width="100%" size="3">
    [<a id="a">메뉴 1</a>] <!-- 메뉴1 클릭 시 도착-->
    <br><br><br><br>
    <!-- 메뉴 2 위치 지정-->
    <hr width="100%" size="3">
    [<a id="b">메뉴 2</a>] <!-- 메뉴 2 클릭 시 도착 -->
    <br><br><br><br>
    <!-- 상단으로 올라갈 버튼 -->
    <p align="right"><a href="#top">위로</a></p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138043505-57263253-b69f-44de-9969-d1cd24f3382a.png)

## 이미지
## 이미지 삽입
```
<body>
  <img src="이미지 경로[URL]" style="width:너비; height:높이; alt:대체문자열; border:그림 테두리">
</body>
=> 이미지 경로는 상대경로, 절대경로 모두 가능
```
![image](https://user-images.githubusercontent.com/76677629/138194838-61e5196b-af18-4acf-b7de-e6302dd0dd35.png)

## 그림에 링크 설정
```
<body>
    <a href="https://www.naver.com">
        <img src="img.jpg" width="200" height="200">
    </a>
</body>
=> 그림 누르면 링크로 연결

// 테두리 없애고 싶을 때
<body>
    <a href="https://www.naver.com">
        <img src="img.jpg" width="200" height="200" border="0">
    </a>
</body>
```

## 리스트
### 순서 없는 리스트
```
<body>
  <p>검정색 작은 원 모양 (기본설정)</p>
	<ul>
		<li>사과</li>
		<li>멜론</li>
		<li>바나나</li>
	</ul>

	<p>흰색 작은 원 모양</p>
	<ul style="list-style-type: circle">
		<li>수박</li>
		<li>참외</li>
		<li>옥수수</li>
	</ul>

	<p>검정색 사각형 모양</p>
	<ul style="list-style-type: square">
		<li>감자</li>
		<li>상추</li>
		<li>고구마</li>
	</ul>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138831222-d4c7ba85-23a1-4bbe-b742-b75bb666243b.png)

## 순서 있는 목록
```
<body>
    <p>숫자 (기본설정)</p>
		<ol>
			<li>사과</li>
			<li>멜론</li>
			<li>바나나</li>
		</ol>

	<p>영어 대문자</p>
		<ol style="list-style-type: upper-alpha">
			<li>수박</li>
			<li>참외</li>
			<li>옥수수</li>
		</ol>

	<p>영어 소문자</p>
		<ol style="list-style-type: lower-alpha">
			<li>감자</li>
			<li>상추</li>
			<li>고구마</li>
		</ol>

	<p>로마자 대문자</p>
		<ol style="list-style-type: upper-roman">
			<li>오이</li>
			<li>배추</li>
			<li>시금치</li>
		</ol>
		
	<p>로마자 소문자</p>
		<ol style="list-style-type: lower-roman">
			<li>고추</li>
			<li>호박</li>
			<li>양파</li>
		</ol>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138831436-2b7f47b1-69e8-48d2-abdb-997fb0959512.png)

## 정의 리스트(description list)
```
<body>
    <dl>
        <dt>html</dt>
        <dd>태그로 나타냄</dd>
        <dt>html 태그</dt>
        <dd>input</dd>
        <dd>button</dd>
        <dd>div</dd>
      </dl>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138831763-4d074aed-7853-4cd4-8014-04c4ffc5ee57.png)

## 테이블
### 테이블(Table)
```
<body>
    <table>
        <tr style="background-color:lightgrey">
            <td>1행 1열</td>
            <td>1행 2열</td>
        </tr>
        <tr>
            <td>2행 1열</td>
            <td>2행 2열</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138832475-62188ae7-941a-4e3e-a79c-b0b5052aa2f3.png)

## 테이블 크기 바꾸기
```
<body>
    <table width="400" height="200" border="1">
        <tr>
            <td>테이블 크기 1</td>
        </tr>
    </table>
    <br>
    <table width="200" height="100" border="1">
        <tr>
            <td>테이블 크기 2</td>
        </tr>
    </table>
</body>
=> width, height를 %로 표시하면 브라우저 화면 크기에 따라 표 크기가 달라진다.
```
![image](https://user-images.githubusercontent.com/76677629/138198505-9656731f-dcf8-44ff-86ce-7f3b4088e1f3.png)

## 테두리 두께 조절
```
<body>
    <table width="200" height="100" border="10">
        <tr>
            <td>테이블 두께 1</td>
        </tr>
    </table>
    <br>
    <table width="200" height="100" border="5">
        <tr>
            <td>테이블 두께 2</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138198729-00c633f9-a183-4057-a437-b8e68ed4abb7.png)

## 테이블 위치
```
<table width="200" height="100" border="5" align="left">
        <tr>
            <td>왼쪽 정렬</td>
        </tr>
    </table>
    <br><br><br><br><br>
    <table width="200" height="100" border="5" align="center">
        <tr>
            <td>가운데 정렬</td>
        </tr>
    </table>
    <table width="200" height="100" border="5" align="right">
        <tr>
            <td>오른쪽 정렬</td>
        </tr>
    </table>
```
![image](https://user-images.githubusercontent.com/76677629/138223087-2f85aae7-9ce0-417a-bdf7-623e5b37b5cc.png)

## 테이블 배경
```
<body>
    <table width="200" height="100" border="5" bgcolor="purple">
        <tr>
            <td>bgcolor</td>
        </tr>
    </table>
    <br><br><br><br><br>
    <table width="200" height="100" border="5" background="image.jpg">
        <tr>
            <td>background</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138223362-5555a925-1d58-4dd2-923f-55af37820d46.png)

## 테이블 캡션 넣기
```
<body>
    <table width="200" height="100" border="1">
        <caption>테이블 캡션</caption>
        <tr>
            <td>테이블1</td>
        </tr>
        <tr>
            <td>테이블2</td>
        </tr>
        <tr>
            <td>테이블3</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138223595-4e3c90d6-2102-4649-a87c-bf7d84cad0b7.png)








## HTML5 이전
## css, JavaScript 적용
```
<head> 
  <link rel="stylesheet" href="my-css-file.css">
</head>
<body>
  <script src="my-js-file.js"></script>
</body>
```



# 텍스트 입력과 편집
## 글씨체 바꾸기
```
<body>
  <font face="굴림">굴림체</font>
  <font face="돋움">돋움체</font>
  <font face="궁서">궁서체</font>
  <font face="바탕">바탕체</font>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138040006-ef063ba8-c6c3-42b7-8e2c-44d122d508d8.png)



## 중첩 리스트
```
<body>
    <ul>
        <li type="circle">빈 원형</li>
        <li type="disc">검은색 원형</li>
        <ol>
            <li>첫번째</li>
            <li>두번째</li>
            <li>세번째</li> 
        </ol>
        <li type="square">검은색 사각형</li>
    </ul>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138648900-496ddf10-634a-4c9e-a4b7-77a666831f31.png)




## 컴퓨터 코드 나타내기
```
<body>
    <pre><code>var para = document.querySelector('p');

    para.onclick = function() {
        alert('Owww, stop poking me!');
    }</code></pre>
    
    <p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>
    
    <p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>
    
    
    <p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>
    
    <pre>$ <kbd>ping mozilla.org</kbd>
    <samp>PING mozilla.org (63.245.215.20): 56 data bytes
    64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138656281-e2498e8a-d6e3-4920-9dae-e6d4be1a7785.png)



# 하이퍼링크 설정


## 링크 설정 글자색 바꾸기
```
<body>
    <a href="https://www.naver.com"><font color="red">네이버</font></a>
    <a href="https://www.daum.net"><font color="green">다음</font></a>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138042540-44f3adbc-0539-4a26-bc1b-e864bdf76326.png)

# 멀티미디어 삽입


## 웹 페이지 배경 그림 삽입
```
<body background="xx.jpg">
</body>
```



## 그림 주변 여백 설정
```
<body>
    <img src="img.jpg" width="200" height="200" hspace="100" vspace="50" border="1">
</body>
=> hspace : 좌우 여백
=> vspace : 상하 여백
```
![image](https://user-images.githubusercontent.com/76677629/138195918-003483fe-809d-43db-9df9-d339b92b5a03.png)

## 그림에 말풍선 추가
```
<body>
    <img src="img.jpg" alt="HTML, CSS, JavaScript" width="200" height="200" border="1">
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138196133-69bd3309-74a9-48d2-8844-c083185778b1.png)

## 그림과 글자 위치
```
<body>
    <p><img src="img.jpg" width="200" height="200" align="top"><font>top 이미지</font></p>
    <p><img src="img.jpg" width="200" height="200" align="middle"><font>middle 이미지</font></p>
    <p><img src="img.jpg" width="200" height="200" align="bottom"><font>bottom 이미지</font></p>
    <p><img src="img.jpg" width="200" height="200" align="left"><font>left 이미지</font></p>
    <br><br><br><br><br><br><br>
    <p><img src="img.jpg" width="200" height="200" align="right"><font>right 이미지</font></p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138196638-5626a0f5-9fc3-4e9d-b4a2-9199725ec71e.png)

## 그림 일부분에만 링크 설정
```
<body>
    <img src="image.jpg" width="500" height="300" usemap="#Map">
        <Map name="Map">
            <area shape="rect" coords="205,100,270,140" href="#"> -> 사각형
            <area shape="circle" coords="430,260,40" href="#"> -> 원형
            <area shape="poly" coords="10,50,90,50,90,70,130,70,130,100,10,99" href="#"> -> 다각형
        </Map>
</body>
```

## 배경음악 설정
```
<body>
  <bgsound src="URL" loop="반복횟수">
</body>
=> loop : -1이나 infinite 입력 시 무한 반복
```

## 웹페이지에 멀티미디어 삽입
```
<body>
  <embed src="URL" autostart="true/false" hidden="true/false" loop="true/false" width="너비" heignt="높이">
</body>
autostart: true(자동재생), false(재생 버튼으로 재생)
hidden: 플레이 컨트롤러 true(표시), false(숨김)
loop: true(무한 반복), false(숨김)
```

# 셀 속성 설정과 변경
## 테이블 셀 크기 지정
```
<body>
    <table width="200" height="100" border="5">
        <tr>
            <td width="20">첫번째 셀</td>
            <td>두번째 셀</td>
        </tr>
        <tr>
            <td>세번째 셀</td>
            <td>네번째 셀</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138224285-c1be9e38-d509-4a17-b9fe-cb2606831ffe.png)

## 셀 내용 정렬
```
<body>
    <table width="400" height="100" border="5">
        <tr>
            <td align="left">첫번째 셀</td>
            <td align="center">두번째 셀</td>
            <td align="right">세번째 셀</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138224591-ae710cd5-64fe-4da0-940d-d73c12f537cc.png)

## 제목 셀 만들기
```
<body>
    <table width="400" height="100" border="1">
        <tr><th>제목셀</th></tr>
        <tr><td align="left">첫번째 셀</td></tr>
        <tr><td align="center">두번째 셀</td></tr>
        <tr><td align="right">세번째 셀</td></tr>
    </table>
</body>
=> <th></th> 태그는 가운데 정렬, 볼드체
```
![image](https://user-images.githubusercontent.com/76677629/138224788-dccf765a-4c2f-4ec2-877b-54ff2f4c88fd.png)

## 셀 가로로 합치기
```
<body>
    <table width="400" height="100" border="1">
        <tr>
            <td colspan="2">첫 번째 셀</td>
        </tr>
        <tr>
            <td align="left">두번째 셀</td>
            <td align="center">세번째 셀</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138225483-d2e0b1ee-6dbb-4248-aded-60bdbf7b0304.png)

## 셀 세로로 합치기
```
<body>
    <table width="400" height="100" border="1">
        <tr>
            <td rowspan="2">첫 번째 셀</td>
            <td>두번째 셀</td>
        </tr>
        <tr>
            <td>세번째 셀</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138225658-5c0f772f-158b-44ab-8776-ffa7164f6ef5.png)

# 다양한 테이블 활용 방법
## 셀 배경 지정
```
<body>
    <table width="400" height="100" border="1">
        <tr>
            <td bgcolor="blue">첫 번째 셀</td>
            <td>두번째 셀</td>
        </tr>
        <tr>
            <td bgcolor="red">세번째 셀</td>
            <td>네번째 셀</td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138378166-0e22a620-52ea-4446-a79e-517026ccac69.png)

## 테이블 활용 직선 만들기
```
<body>
    <table width="400" height="100" border="0">
        <tr>
            <td height="1" bgcolor="black"></td>
        </tr>
        <tr>
            <td height="30"></td>
        </tr>
        <tr>
            <td height="2" bgcolor="black"></td>
        </tr>
        <tr>
            <td height="30"></td>
        </tr>
        <tr>
            <td height="4" bgcolor="black"></td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138378695-5dc8af21-0470-447d-8a7f-773b1199dfdb.png)

## 폼(Form)
## 로그인 양식
```
<body>
    <table width="300" height="150" border="1">
        <tr>
            <td width="50"></td>
            <td width="250"><table width="230" height="90" border="0">
                <tr>
                    <td><b>로그인</b></td>
                </tr>
                <tr>
                    <td align="right"><b>아이디: </b></td>
                    <td><input name="textField" type="text" size="15"></td>
                </tr>
                <tr>
                    <td align="right">비밀번호: </td>
                    <td><input name="textField2" type="password" size="15"></td>
                </tr>
            </table></td>
        </tr>
    </table>
    <table width="300" height="150" border="0">
        <tr>
            <td width="50"></td>
            <td width="250"><table width="230" height="90" border="0">
                <tr>
                    <td><b>로그인</b></td>
                </tr>
                <tr>
                    <td align="right"><b>아이디: </b></td>
                    <td><input name="textField" type="text" size="15"></td>
                </tr>
                <tr>
                    <td align="right">비밀번호: </td>
                    <td><input name="textField2" type="password" size="15"></td>
                </tr>
            </table></td>
        </tr>
    </table>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138380088-86ab957f-504d-4589-b4a7-dd6d44d09109.png)

## 숨김 양식
```
<body>
  <input type="hidden" />
</body>
```

## 데이터 입력 막기
```
<body>
    <input type="text" disabled>

    <input type="text">
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138644952-f5ff8f01-c390-4694-baf0-d8f298bdcaa2.png)
