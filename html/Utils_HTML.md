# 목차
- [목차](#목차)
- [HTML 문서 작성](#html-%EB%AC%B8%EC%84%9C-%EC%9E%91%EC%84%B1)
  - [웹 페이지 제목](#%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EB%AA%A9)  
  - [인코딩 설정](#인코딩-설정)
  - [주석 삽입](#주석-삽입)
- [텍스트 입력과 편집](#텍스트-입력과-편집)
  - [html 문서에 글자 삽입](#html-문서에-글자-삽입)
  - [글자 크기 바꾸기](#글자-크기-바꾸기)
  - [단락 제목 만들기](#단락-제목-만들기)
  - [글씨체 바꾸기](#글씨체-바꾸기)
  - [볼드체, 이탤릭체](#볼드체-이탤릭체)
  - [밑줄, 취소선](#밑줄-취소선)
  - [위첨자, 아래첨자](#위첨자-아래첨자)
  - [글자 정렬](#글자-정렬)
  - [줄바꿈](#줄바꿈)
  - [글자 사이 두 칸 이상 공백](#글자-사이-두-칸-이상-공백)
  - [문단 나누기](#문단-나누기)
  - [순서 없는 목록](#순서-없는-목록)
  - [순서 있는 목록](#순서-있는-목록)
  - [페이지 배경색 바꾸기](#페이지-배경색-바꾸기)
  - [글자색 바꾸기 - 영문 이름](#글자색-바꾸기---영문-이름)
  - [글자색 바꾸기 - 컬러코드](#글자색-바꾸기---컬러코드)
- [하이퍼링크 설정](#하이퍼링크-설정)
  - [글자에 링크 설정](#글자에-링크-설정)
  - [링크 설정 글자색 바꾸기](#링크-설정-글자색-바꾸기)
  - [내부링크](#내부링크)
- [멀티미디어 삽입](#멀티미디어-삽입)
  - [웹 페이지에 그림 삽입](#웹-페이지에-그림-삽입)
  - [웹 페이지 배경 그림 삽입](#웹-페이지-배경-그림-삽입)
  - [그림에 링크 설정](#그림에-링크-설정)
  - [그림 주변 여백 설정](#그림-주변-여백-설정)
  - [그림에 말풍선 추가](#그림에-말풍선-추가)
  - [그림과 글자 위치](#그림과-글자-위치)
  - [그림 일부분에만 링크 설정](#그림-일부분에만-링크-설정)
  - [배경음악 설정](#배경음악-설정)
  - [웹페이지에 멀티미디어 삽입](#웹페이지에-멀티미디어-삽입)

# HTML 문서 작성
## 웹 페이지 제목
```
<HEAD>
  <TITLE>제목 넣기</TITLE>
</HEAD>
```
![image](https://user-images.githubusercontent.com/76677629/138039637-a6e11621-1f98-4745-a7c9-ec9fc1ffdb84.png)

## 인코딩 설정
```
<HEAD>
  <META http-equiv=""Content-Type" CONTENT="text/html; charset=euc-kr" /> -> 한글 사이트
  <META http-equiv=""Content-Type" CONTENT="text/html; charset=utf-8" /> -> 한글 사이트
  <META http-equiv=""Content-Type" CONTENT="text/html; charset=iso-8859-1" /> -> 영문 사이트
</HEAD>
```

## 주석 삽입
```
<body>
  <!-- 주석 삽입 -->
<body>
```

# 텍스트 입력과 편집
## html 문서에 글자 삽입
```
<body>
    body : 이                렇게 적어도 
  출력은
  <pre>
    pre : 이                렇게 적으면 
  출력은 
  </pre>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138039789-5f19346f-c306-4654-b76d-221d23c13412.png)

## 글자 크기 바꾸기
```
<body>
  <font size="1">글자 크기 1</font>
  <font size="2">글자 크기 2</font>
  <font size="3">글자 크기 3</font>
  <font size="4">글자 크기 4</font>
  <font size="5">글자 크기 5</font>
  <font size="6">글자 크기 6</font>
  <font size="7">글자 크기 7</font>
</body>
=> 숫자가 클수록 크기가 커진다
=> 기본 크기는 3
```
![image](https://user-images.githubusercontent.com/76677629/138039910-a97a315d-8fcc-4eec-984c-bc168542fa5e.png)


## 단락 제목 만들기
```
<body>
  <h1>헤드라인 크기 1</h>
  <h2>헤드라인 크기 2</h>
  <h3>헤드라인 크기 3</h>
  <h4>헤드라인 크기 4</h>
  <h5>헤드라인 크기 5</h>
  <h6>헤드라인 크기 6</h>
</body>
=> 숫자가 클수록 크기가 작아진다
```
![image](https://user-images.githubusercontent.com/76677629/138039969-e957fc78-9334-42b8-94f5-81a36945a9bc.png)


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


## 볼드체, 이탤릭체
```
<body>
    <font>기본체</font><br/>
    <font><b>볼드체</b></font><br/>
    <font><i>이탤릭체</i></font><br/>
    <font><i><b>볼드이탤릭체</b></i></font>
</body>>
```
![image](https://user-images.githubusercontent.com/76677629/138040037-3b78a10b-2bf1-454f-830c-72f9f303b8b2.png)


## 밑줄, 취소선
```
<body>
    <font><u>밑줄</u></font><br/>
    <font><s>취소선</s></font><br/>
    <font><u><s>밑줄+취소선</s></u></font><br/>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138040066-a4807a41-f68f-48aa-a97e-cfb5cdd73e51.png)


## 위첨자, 아래첨자
```
<body>
    <font>문자<sub>아래첨자</sub></font><br/>
    <font>문자<sup>위첨자</sup></font><br/>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138036523-2e39fac8-e95f-4189-beeb-b6d7b4f442e0.png)

## 글자 정렬
```
<body>
    <center><font>문서 중앙 정렬</font></center>
    <p align="left">문단 왼쪽 정렬</p>
    <p align="center">문단 가운데 정렬</p>
    <p align="right">문단 오른쪽 정렬</p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138037083-b24e8777-4021-4ca7-be89-045549f061c5.png)

## 줄바꿈
```
<body>
    <font>한 번 줄바꿈<br></font>
    <font>두 번 줄바꿈<br><br></font>
    <font>세 번 줄바꿈<br><br><br></font>
    <font>확인</font>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138037328-ec1627ed-e1e4-431c-8776-1290e4d5a62c.png)

## 글자 사이 두 칸 이상 공백
```
<body>
    <font>한 번 공백&nbsp;한 번 공백</font><br>
    <font>두 번 공백&nbsp;&nbsp;두 번 공백</font><br>
    <font>세 번 공백&nbsp;&nbsp;&nbsp;세 번 공백</font><br>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138037621-3f3ba047-fa79-416c-872e-156d3562164d.png)

## 문단 나누기
```
<body>
    <font><p>문단 나누기</p></font><br>
    <font>문단 나누기<p></font><br>
    <font>문단 나누기<p><p><p><p></p></font><br>
    <font>확인</font>
</body>
=> <p> 태그 한 개, 두 개, 여러 개 상관없이 한 번
```

## 순서 없는 목록
```
<body>
    <ul>
        <li type="circle">빈 원형</li>
        <li type="disc">검은색 원형</li>
        <li type="square">검은색 사각형</li>
    </ul>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138038215-83debd62-2054-4e14-a99a-66b30ce78cea.png)

## 순서 있는 목록
```
<body>
    <ol start="3">
        <li type="1">아라비아 숫자형</li>
        <li type="A">영문 대문자형</li>
        <li type="a">영문 소문자형</li>
        <li type="I">로마숫자 대문자형</li>
        <li type="i">로마숫자 소문자형</li>
    </ol>
</body>
=> start 숫자부터 차례대로 증가
=> 기본은 아라비아 숫자
```
![image](https://user-images.githubusercontent.com/76677629/138038548-fdb24098-1147-47ea-8163-539ba12e085d.png)

## 페이지 배경색 바꾸기
```
<body bgcolor="#FF00FF">
    <font>#FF0000 은 빨간색<br><br>
        #00FF00 은 파란색<br><br>
        #0000FF 는 초록색</font>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138039232-38964fe9-0d4a-4480-b7b7-ce4c9195b9a6.png)

## 글자색 바꾸기 - 영문 이름
```
<body bgcolor="#FF00FF">
    <font color="red">빨간색</font><br>
    <font color="blue">파란색</font><br>
    <font color="green">초록색</font><br>
    <font color="black">검정색</font><br>
    <font color="white">흰색</font><br>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138039478-213e9e4e-6a84-4ec6-8cf2-0a31097c4cf0.png)

## 글자색 바꾸기 - 컬러코드
```
<body bgcolor="#FF00FF">
    <font color="#FF0000">빨간색</font><br>
    <font color="#0000ff">파란색</font><br>
    <font color="#00ff00">초록색</font><br>
    <font color="#000000">검정색</font><br>
    <font color="#ffffff">흰색</font><br>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138040282-6fc6c61f-09c4-4df3-910e-76f5e15f8e52.png)

# 하이퍼링크 설정
## 글자에 링크 설정
```
<body>
    <a href="https://www.naver.com" target="_blank">네이버</a> -> 새 창
    <a href="https://www.daum.net" target="_self">다음</a> -> 현재 창(기본)
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138041870-30bcb188-af35-4370-b852-15916ff87df0.png)

## 링크 설정 글자색 바꾸기
```
<body>
    <a href="https://www.naver.com"><font color="red">네이버</font></a>
    <a href="https://www.daum.net"><font color="green">다음</font></a>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138042540-44f3adbc-0539-4a26-bc1b-e864bdf76326.png)

## 내부링크
```
<body>
    <!-- 상단 책갈피 위치 지정 -->
    <a name="top"></a> <!-- "위로" 클릭 시 도착-->
    [<a href="#a"<font>메뉴 1</font></a>]&nbsp;&nbsp;
    [<a href="#b"<font>메뉴 2</font></a>]
    <br><br><br><br>
    <!-- 메뉴 1 위치 지정 -->
    <hr width="100%" size="3">
    [<a name="a"><font>메뉴 1</font></a>] <!-- 메뉴1 클릭 시 도착-->
    <br><br><br><br>
    <!-- 메뉴 2 위치 지정-->
    <hr width="100%" size="3">
    [<a name="b"><font>메뉴 2</font></a>] <!-- 메뉴 2 클릭 시 도착 -->
    <br><br><br><br>
    <!-- 상단으로 올라갈 버튼 -->
    <p align="right"><a href="#top">위로</a></p>
</body>
```
![image](https://user-images.githubusercontent.com/76677629/138043505-57263253-b69f-44de-9969-d1cd24f3382a.png)

# 멀티미디어 삽입
## 웹 페이지에 그림 삽입
```
<body>
  <img src="xx.jpg" width="200" height="200">
  <img src="이미지 경로[URL]" width="너비" height="높이" alt="풍선 도움말" border="그림 테두리">
</body>
=> 이미지 경로는 상대경로, 절대경로 모두 가능
```
![image](https://user-images.githubusercontent.com/76677629/138194838-61e5196b-af18-4acf-b7de-e6302dd0dd35.png)

## 웹 페이지 배경 그림 삽입
```
<body background="xx.jpg">
</body>
```

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

# 테이블 삽입과 편집
## 테이블 삽입
```
<body>
    <table border="1">
        <tr>
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
![image](https://user-images.githubusercontent.com/76677629/138198156-76f32313-d326-4f2c-ba16-7489deacb22e.png)

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
