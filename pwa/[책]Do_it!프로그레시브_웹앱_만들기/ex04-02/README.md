# 단방향 바인딩과 v-bind 디렉티브
### 데이터 바인딩이란?
- HTML의 어트리뷰트값을 수정할 때 v-bind라는 디렉티브를 이용해 데이터를 브라우저 화면에 자동으로 반영하는 것
- 변숫값을 HTML 어트리뷰트값에 연결함으로써 변수가 새로운 값으로 바뀔 때마다 HTML 엘리먼트에 실시간으로 렌더링

### v-bind 디렉티브
- 데이터가 한쪽으로만 바인딩되는 단방향 바인딩
- HTML 엘리먼트의 어트리뷰트값을 바꾸더라도 이와 연결된 변숫값은 변경되지 않는다.

### 머스태시와 v-bind의 차이점
```
<p>{{ sTitle }}</p>          // HTML 엘리먼트값을 만듦
<input v-bind:value="sDate"> // HTML 어트리뷰트값을 만듦
```