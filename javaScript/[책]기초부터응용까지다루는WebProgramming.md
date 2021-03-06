# 목차
- [목차](#목차)
- [Chapter02 자바스크립트 시작하기](#chapter02-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
  - [3. 자바스크립트 배경](#3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EA%B2%BD) 
    - [3-2. 자바스크립트 개발용도](#3-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9A%A9%EB%8F%84) 
    - [3-3. 자바스크립트 버전](#3-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B2%84%EC%A0%84)
  - [4. 자바스크립트 특징](#4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%8A%B9%EC%A7%95)
  - [5. 자바스크립트 맛보기](#5-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%A7%9B%EB%B3%B4%EA%B8%B0) 
    - [5-1. write() 메서드 명령문 실습](#5-1-write-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%AA%85%EB%A0%B9%EB%AC%B8-%EC%8B%A4%EC%8A%B5) 
    - [5-2. alert() 메서드 명령문](#5-2-alert-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%AA%85%EB%A0%B9%EB%AC%B8)
- [Chapter03 자바스크립트 기본개념](#chapter03-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8%EA%B0%9C%EB%85%90)
  - [1. 자바스크립트 사용법](#1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%82%AC%EC%9A%A9%EB%B2%95) 
    - [1-1. 웹 페이지 레이아웃(Web Page Layout)](#1-1-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83web-page-layout)
    - [1-2. 웹 프로그래밍 모듈(Web Programming Module)](#1-2-%EC%9B%B9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%AA%A8%EB%93%88web-programming-module)
    - [1-3. 자바스크립트 명령문 코딩방법](#1-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%85%EB%A0%B9%EB%AC%B8-%EC%BD%94%EB%94%A9%EB%B0%A9%EB%B2%95)
    - [1-4. 외부파일로 작성된 자바스크립트 명령문을 삽입하는 방법](#1-4-%EC%99%B8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EC%9E%91%EC%84%B1%EB%90%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%85%EB%A0%B9%EB%AC%B8%EC%9D%84-%EC%82%BD%EC%9E%85%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
  - [2. 자바스크립트 문장규칙](#2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EC%9E%A5%EA%B7%9C%EC%B9%99)
    - [2-1. 문장](#2-1-%EB%AC%B8%EC%9E%A5)  
    - [2-2. 주석](#2-2-%EC%A3%BC%EC%84%9D)
    - [2-3. 객체(Object), 메서드(Method), 속성(Property)](#2-3-%EA%B0%9D%EC%B2%B4object-%EB%A9%94%EC%84%9C%EB%93%9Cmethod-%EC%86%8D%EC%84%B1property)
    - [2-4. 자주 사용하는 메서드](#2-4-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%A9%94%EC%84%9C%EB%93%9C)
  - [3. 자바스크립트 기본 문법](#3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95)
    - [3-1. 자바스크립트 변수 선언 방법](#3-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98-%EC%84%A0%EC%96%B8-%EB%B0%A9%EB%B2%95)
    - [3-2. 자바스크립트 데이터 형태](#3-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%98%95%ED%83%9C)
- [Chapter04 자바스크립트 연산자(Operator)](#chapter04-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%B0%EC%82%B0%EC%9E%90operator)
  - [1. 연산 규칙](#1-%EC%97%B0%EC%82%B0-%EA%B7%9C%EC%B9%99) 
    - [1-1. 자바스크립트 연산자](#1-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [1-2. 자바스크립트의 연산자와 수식에 대한 연산 규칙](#1-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%97%B0%EC%82%B0%EC%9E%90%EC%99%80-%EC%88%98%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%9C-%EC%97%B0%EC%82%B0-%EA%B7%9C%EC%B9%99)
  - [2. 기본 연산자](#2-%EA%B8%B0%EB%B3%B8-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [2-1. 산술 연산자](#2-1-%EC%82%B0%EC%88%A0-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [2-2. 증감 연산자](#2-2-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [2-3. 단축 대입 연산자](#2-3-%EB%8B%A8%EC%B6%95-%EB%8C%80%EC%9E%85-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [2-4. 결합 연산자](#2-4-%EA%B2%B0%ED%95%A9-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [2-5. 결합 연산자 - ES6 버전 기능 추가](#2-5-%EA%B2%B0%ED%95%A9-%EC%97%B0%EC%82%B0%EC%9E%90---es6-%EB%B2%84%EC%A0%84-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80)
  - [3. 비교 연산자](#3-%EB%B9%84%EA%B5%90-%EC%97%B0%EC%82%B0%EC%9E%90)
  - [4. 논리 연산자](#4-%EB%85%BC%EB%A6%AC-%EC%97%B0%EC%82%B0%EC%9E%90) 
  - [5. 비트 연산자](#5-%EB%B9%84%ED%8A%B8-%EC%97%B0%EC%82%B0%EC%9E%90)
  - [6. 기타 연산자](#6-%EA%B8%B0%ED%83%80-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [6-1. 조건 연산자(3항 연산자)](#6-1-%EC%A1%B0%EA%B1%B4-%EC%97%B0%EC%82%B0%EC%9E%903%ED%95%AD-%EC%97%B0%EC%82%B0%EC%9E%90)
- [Chapter05 자바스크립트 제어문](#chapter05-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%9C%EC%96%B4%EB%AC%B8)
  - [1. 제어문 이해](#1-%EC%A0%9C%EC%96%B4%EB%AC%B8-%EC%9D%B4%ED%95%B4)
    - [1-1. 프로그램 구조](#1-1-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EA%B5%AC%EC%A1%B0)
    - [1-2. 프로그램 제어문 분류](#1-2-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%A0%9C%EC%96%B4%EB%AC%B8-%EB%B6%84%EB%A5%98)
  - [2. if 문](#2-if-%EB%AC%B8)
    - [2-2. if 조건문 실습](#2-2-if-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [3. if ~ else 문](#3-if--else-%EB%AC%B8)
    - [3-2. if ~ else 조건문 실습](#3-2-if--else-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%8B%A4%EC%8A%B5) 
  - [4. 다중 if ~ else 문](#4-%EB%8B%A4%EC%A4%91-if--else-%EB%AC%B8)
    - [4-2. 다중 if ~ else 조건문 실습](#4-2-%EB%8B%A4%EC%A4%91-if--else-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [5. switch ~ case 문](#5-switch--case-%EB%AC%B8)
    - [5-2. switch ~ case 조건문 실습 1](#5-2-switch--case-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%8B%A4%EC%8A%B5-1)
    - [5-3. switch ~ case 조건문 실습 2](#5-3-switch--case-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%8B%A4%EC%8A%B5-2)
  - [6. 기타 제어문](#6-%EA%B8%B0%ED%83%80-%EC%A0%9C%EC%96%B4%EB%AC%B8)
    - [6-1. break 제어문](#6-1-break-%EC%A0%9C%EC%96%B4%EB%AC%B8) 
    - [6-2. continue 제어문](#6-2-continue-%EC%A0%9C%EC%96%B4%EB%AC%B8)
- [Chapter06 자바스크립트 반복문](#chapter06-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%98%EB%B3%B5%EB%AC%B8)
  - [1. 반복문 이해](#1-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%9D%B4%ED%95%B4)
    - [1-3. 배열](#1-3-%EB%B0%B0%EC%97%B4)
    - [1-4. 객체(Object), 메서드(Method), 속성(Property)](#1-4-%EA%B0%9D%EC%B2%B4object-%EB%A9%94%EC%84%9C%EB%93%9Cmethod-%EC%86%8D%EC%84%B1property)
  - [2. while 문](#2-while-%EB%AC%B8)
    - [2-2. while 반복문 실습](#2-2-while-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [3. do ~ while 문](#3-do--while-%EB%AC%B8)
    - [3-1. 일반 형식](#3-1-%EC%9D%BC%EB%B0%98-%ED%98%95%EC%8B%9D)
    - [3-2. do ~ while 반복문 실습](#3-2-do--while-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [4. for 문](#4-for-%EB%AC%B8)
    - [4-2. for 반복문 실습](#4-2-for-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [5. for ~ in 문](#5-for--in-%EB%AC%B8)
    - [5-1. 일반 형식](#5-1-%EC%9D%BC%EB%B0%98-%ED%98%95%EC%8B%9D)
    - [5-2. for ~ in 반복문 실습1](#5-2-for--in-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B51)
    - [5-3. for ~ in 반복문 실습2](#5-3-for--in-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B52)
  - [6. 중첩 loop문](#6-%EC%A4%91%EC%B2%A9-loop%EB%AC%B8)
    - [6-1. 일반 형식](#6-1-%EC%9D%BC%EB%B0%98-%ED%98%95%EC%8B%9D)
    - [6-2. 중첩 loop 문 실습](#6-2-%EC%A4%91%EC%B2%A9-loop-%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
  - [7. for ~ of 문](#7-for--of-%EB%AC%B8)
    - [7-1. 일반 형식](#7-1-%EC%9D%BC%EB%B0%98-%ED%98%95%EC%8B%9D)
    - [7-2. for ~ of 반복문 실습](#7-2-for--of-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%8B%A4%EC%8A%B5)
- [Chapter07 자바스크립트 함수](#chapter07-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%A8%EC%88%98)
  - [1. 함수 이해](#1-%ED%95%A8%EC%88%98-%EC%9D%B4%ED%95%B4) 
    - [1-1. 함수란?](#1-1-%ED%95%A8%EC%88%98%EB%9E%80)
    - [1-2. 자바스크립트의 함수 표현식](#1-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%95%A8%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D)
  - [2. Function 문](#2-function-%EB%AC%B8)
    - [2-1. 자바스크립트 선언적 함수](#2-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A0%EC%96%B8%EC%A0%81-%ED%95%A8%EC%88%98) 
    - [2-2. 자바스크립트 익명 함수](#2-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B5%EB%AA%85-%ED%95%A8%EC%88%98)
  - [3. Function 문 인수](#3-function-%EB%AC%B8-%EC%9D%B8%EC%88%98)
    - [3-1. 자바스크립트의 매개변수 정의 방법](#3-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98-%EC%A0%95%EC%9D%98-%EB%B0%A9%EB%B2%95)
    - [3-2. 자바스크립트의 매개변수 정의 방법 개선 - ES6](#3-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98-%EC%A0%95%EC%9D%98-%EB%B0%A9%EB%B2%95-%EA%B0%9C%EC%84%A0---es6)
    - [3-3. 자바스크립트의 전개 연산자 정의 방법 추가 - ES6](#3-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%A0%95%EC%9D%98-%EB%B0%A9%EB%B2%95-%EC%B6%94%EA%B0%80---es6)
    - [3-4. 자바스크립트의 일반 매개 변수와 전개 연산자의 가변 매개변수를 조합하여 정의하는 방법 추가 - ES6](#3-4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9D%BC%EB%B0%98-%EB%A7%A4%EA%B0%9C-%EB%B3%80%EC%88%98%EC%99%80-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EC%9D%98-%EA%B0%80%EB%B3%80-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EB%A5%BC-%EC%A1%B0%ED%95%A9%ED%95%98%EC%97%AC-%EC%A0%95%EC%9D%98%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%B6%94%EA%B0%80---es6)
  - [4. Function 문 함수 호출](#4-function-%EB%AC%B8-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C)
    - [4-1. 일반 함수 호출 방법](#4-1-%EC%9D%BC%EB%B0%98-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C-%EB%B0%A9%EB%B2%95)
    - [4-2. 멤버 함수 호출 방법](#4-2-%EB%A9%A4%EB%B2%84-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C-%EB%B0%A9%EB%B2%95)
    - [4-3. \<a> 태그를 이용한 함수 호출 방법](#4-3-a-%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C-%EB%B0%A9%EB%B2%95)
    - [4-4. 이벤트 핸들러를 이용한 함수 호출 방법](#4-4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%9F%AC%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C-%EB%B0%A9%EB%B2%95)
  - [5. Function 문 Return 값](#5-function-%EB%AC%B8-return-%EA%B0%92) 
  - [6. 기타 Function 문](#6-%EA%B8%B0%ED%83%80-function-%EB%AC%B8)
    - [6-1. 자바스크립트의 function 문 변수 스코프(Scope)](#6-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-function-%EB%AC%B8-%EB%B3%80%EC%88%98-%EC%8A%A4%EC%BD%94%ED%94%84scope)
    - [6-2. 자바스크립트의 콜백 함수(Callback Function)](#6-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98callback-function)
    - [6-3. 자바스크립트의 클로저(Closure)](#6-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%81%B4%EB%A1%9C%EC%A0%80closure)
- [Chapter08 자바스크립트 Form](#chapter08-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-form)
  - [1. Form 객체](#1-form-%EA%B0%9D%EC%B2%B4)
    - [1-1. 자바스크립트의 웹 폼(Form)](#1-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9B%B9-%ED%8F%BCform)
    - [1-2. 자바스크립트 웹 문서의 주요 폼(Form) 요소](#1-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9B%B9-%EB%AC%B8%EC%84%9C%EC%9D%98-%EC%A3%BC%EC%9A%94-%ED%8F%BCform-%EC%9A%94%EC%86%8C) 
    - [1-3. 자바스크립트 Form 객체](#1-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-form-%EA%B0%9D%EC%B2%B4)
    - [1-4. 자바스크립트의 Form 객체에 대한 메서드](#1-4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-form-%EA%B0%9D%EC%B2%B4%EC%97%90-%EB%8C%80%ED%95%9C-%EB%A9%94%EC%84%9C%EB%93%9C)
  - [2. Form 객체 컨트롤 종류](#2-form-%EA%B0%9D%EC%B2%B4-%EC%BB%A8%ED%8A%B8%EB%A1%A4-%EC%A2%85%EB%A5%98)
    - [2-1. 자바스크립트의 Form 컨트롤 종류](#2-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-form-%EC%BB%A8%ED%8A%B8%EB%A1%A4-%EC%A2%85%EB%A5%98)
    - [2-2. 자바스크립트의 \<input> 태그 속성](#2-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-input-%ED%83%9C%EA%B7%B8-%EC%86%8D%EC%84%B1)

# Chapter02 자바스크립트 시작하기
## 3. 자바스크립트 배경
### 3-2. 자바스크립트 개발용도
- 2010년 이전 : 웹 클라이언트 개발 용도로 활용
- 2010년 이후
  - 다양하게 활용 중
    1. 웹 클라이언트 애플리케이션 개발
    2. 웹 서버 애플리케이션 개발 (Node.js 이용)
    3. 모바일 애플리케이션 개발
    4. 데스크톱 애플리케이션 개발
    5. 게임 클라이언트 애플리케이션 개발
    6. 게임 서버 애플리케이션 개발
    7. 데이터베이스 관리(MongoDB, NoSQL 데이터베이스)   

### 3-3. 자바스크립트 버전
- 유럽 컴퓨터 제조 협회(European Computer Manufacturer's Association)에서 ECMAScript 이름으로 표준화했다. 
  - -> 표준 명칭은 ECMAScript 이지만 자바스크립트라는 이름으로 더 많이 사용되고 있다.    

## 4. 자바스크립트 특징
- 함수 및 처리과정 등이 자바(Java)의 구문(Syntax)과 유사한 면이 많다.
- HTML 문서 내에 \<script> 태그를 사용하여 직접 삽입하여 시동한다.
- 자바스크립트는 브라우저 내에 내장된 인터프리터에 의해 수행되어 동적인 웹 페이지 화면 구현을 위해 사용한다.   
- 일반적인 특징
  1. 대소문자를 구별한다.
  2. 실행결과를 직접 확인할 수 있다.
     - 링크 클릭, 폼 채우기, 화면에서 마우스 움직임 등에 즉시 응답
  3. 보안성을 가지고 있지 않다.
     - 웹 페이지에서 소스보기를 선택하면 html 문서 뿐 아니라 자바스크립트 소스까지 확인 가능
     - 보안이 필요한 경우 서버 사이드 스크립트 언어(jsp, asp, php 등)로 코딩하는 것이 바람직
  4. 데이터 형을 선언하지 않아도 된다.
     - 자동으로 데이터 형 인식
  5. 변수를 선언하지 않아도 된다.
     - 별도로 선언하지 않으면 전역변수로 설정
  6. 별도로 컴파일이 필요 없다.
     - 별도 프로그램 작성이 아닌 HTML 문서 내에 직접 삽입하여 시동하기 때문에 별도의 컴파일이 필요 없음
  8. 객체기반 언어이다.      
     - 객체, 속성, 메서드 등 객체 개념의 일부 기능만 사용하기 때문에 객체지향 언어가 아닌 객체기반 언어라고 함
  9. 제한적인 기능을 가진다.
     - 한정적인 객체와 메서드를 가지고 있음
     - 복잡한 응용 프로그램을 작성할 경우 서버 사이드 스크립트 언어(jsp, asp, php 등)로 코딩하는 것이 바람직

## 5. 자바스크립트 맛보기
### 5-1. write() 메서드 명령문 실습
```
document.write("환영합니다");
```
- 브라우저 화면에 환영합니다 출력   

### 5-2. alert() 메서드 명령문
```
alert("환영합니다);
```
- 웹 페이지 메시지 화면으로 환영합니다 출력 (새 창)

---

# Chapter03 자바스크립트 기본개념
## 1. 자바스크립트 사용법
### 1-1. 웹 페이지 레이아웃(Web Page Layout)
- 웹 페이지 배치를 의미
- 웹사이트 설계 시 사용자에게 정보의 중요도를 구분하여 알려주고 정보를 적절한 곳에 배치하여 웹 사이트를 쉽게 접근할 수 있도록 만들어주는 역할

### 1-2. 웹 프로그래밍 모듈(Web Programming Module)
- 독립적인 하나의 웹 애플리케이션 소프트웨어 요소
- 웹 프로그래밍의 기능을 독립적인 단위로 분리한 것
- 서브루틴과 데이터 구조의 집합체로서 웹 프로그래밍 모듈 단위로 컴파일과 재사용이 가능하고 여러 다른 모듈의 개발에 사용될 수 있다.

### 1-3. 자바스크립트 명령문 코딩방법
- 독립적으로 사용할 수 없고 일반적으로 HTML의 \<head> 태그와 \<body> 태그에 \<script> 태그를 삽입하여 사용
1. HTML5의 \<head> 태그에 삽입
```
<head>
<script>
  document.write("자바스크립트 사용방법 1");
</script>
</head>
```   

2. HTML5의 \<body> 태그에 삽입
```
<body>
<script>
  document.write("자바스크립트 사용방법 2");
</script>
</body>
```

3. 클라이언트용
    - 클라이언트용 자바스크립트 태그는 HTML5의 \<head> 태그 또는 \<body> 태그 부분에 작성
    1. \<script type = "text/javascript">
    ```
    <script type = "text/javascript">
    document.write(" 첫 번째 방법");
    </script>
    ```

    2. \<script language="javascript"> -> HTNL4.0 버전 이후부터 사용 권장하지 않음
    ```
    <script language="javascript">
    document.write(" 두 번째 방법");
    </script>
    ```

    3. \<script?
    ```
    <script>
    document.write(" 세 번째 방법");
    </script>
    ```

4. 서버용
   - HTML5의 \<head> 태그 또는 \<body> 태그 부분에 작성
   1. \<script type = "text/javascript" runat = "server">
   ```
   <script type = "text/javascript" runat = "server">
     document.write(" 서버용 명령문 코딩");
   </script>
   ```
       
### 1-4. 외부파일로 작성된 자바스크립트 명령문을 삽입하는 방법
- 별도의 외부파일로 작성하여 외부 자바스크립트 파일(확장자 .js)을 HTML5 문서에 불러와서 삽입할 수 있다.
- 자바스크립트 태그의 src 속성에 연결하고자 하는 자바스크립트 외부파일의 이름을 지정한다.
- 외부파일의 명령문은 HTML5 웹 문서가 실행될 때 연결된다.
```
<script type = "text/javascript" src="연결할 자바스크립트 외부파일명">
  자바스크립트 명령문;
</script>
```
    
## 2. 자바스크립트 문장규칙
- 일반적으로 자바스크립트의 명령문은 문장으로 구성

### 2-1. 문장
1. 세미콜론(;)으로 종료한다.
```
<script type = "text/javascript">
  document.write("자바스크립트 문장");
</script>
```
2. 대문자와 소문자를 구별하여 사용한다.
```
<script type = "text/javascript">
  document.Write("자바스크립트 문장"); // -> write 를 Write로 작성 => 오류 
</script>
```

### 2-2. 주석
- 주석은 프로그램 동작과는 무관한 문장이다.
1. // 한줄 주석
2. /* 여러 줄 주석*/

### 2-3. 객체(Object), 메서드(Method), 속성(Property)
- 자바스크립트는 객체지향적인 언어 -> 완전한 객체지향 언어가 아니라 일부 구성요소만을 사용한다는 개념
```
  객체.메서드(값);
```
1. 객체(Object)
   - 실세계에서 나타내는 모든 사물을 프로그램 내에서 용이하도록 만들어 주는 구조
    
2. 메서드(Method)
   - 행위와 동작을 유발하는 동적개념
   - 멤버함수라고도 한다.
   - 프로그램 내에서 반복되는 행위와 동작을 실행할 때 메서드를 호출하여 프로그램을 간결하게 나타내기 위해 주로 사용한다.
   
3. 속성(Property)
   - 객체의 속성에 대한 값
   ```
   객체.속성 = "속성값";
   
   document.bgColor = "blue";
   ```

### 2-4. 자주 사용하는 메서드
1. alert()
   - 윈도우의 작은 화면을 나타내는 메서드
   - 메시지를 사용자에게 보내거나 정보를 나타내는데 사용하는 메서드
   ```
   alert("화면에 나타낼 메시지");
   ```
   
2. prompt()
   - 프롬프트 형식으로 프로그램 수행 도중에 입력할 수 있도록 입력상자를 나타냄
   - 사용자의 입력데이터를 전달하는데 사용하는 메서드
   ```
   var age = 0;
   prompt("당신의 나이는?", age); // 윈도우 작은 화면으로 나타남
   ```
   
3. confirm()
   - 사용자의 선택에 의해 선언된 문자열과 함께 \[확인]과 \[취소] 버튼을 나타낼 수 있다.
   - \[확인]을 누르면 참(true) 값 발생, \[취소]를 누르면 거짓(false)값 발생
   ```
   confirm("[확인] 또는 [취소] 버튼을 선택하세요"); // 윈도우 작은 화면으로 나타남
   ```

## 3. 자바스크립트 기본 문법
### 3-1. 자바스크립트 변수 선언 방법
1. 변수(Variable)
   - 데이터 값을 저장하는 기억장소
   - 숫자나 문자열의 데이터 값을 일시적으로 저장해 놓을 기억공간

2. var 키워드에 의한 변수 선언 방법 - ECMAScript 5(ES5) 버전
   - var라는 예약어와 함께 변수명을 지정하여 변수 선언
   - 변수 선언은 데이터 값이 저장될 메모리 공간을 미리 확보하는 과정 -> 먼저 변수 선언 후 변수를 사용하여야 한다.
   ```
   1) var 변수명;
   2) var 변수명 = 초기값;
   3) var 변수명1, 변수명2, 변수명3;
   4) var 변수명1 = 초기값1, 변수명2 = 초기값2, 변수명3 = 초기값3;
   ```

3. let 키워드에 의한 변수 선언 방법과 const 키워드를 사용한 상수 선언 방법 - ECMAScript6(ES6) 버전 추가 기능
   - ES6 버전부터 추가된 기능
   - ES5 버전까지는 변수를 선언하기 위해 var라는 예약어와 함께 변수명을 지정하여 변수를 선언하는 방법 뿐이었다.
   - ES6부터 let 키워드를 사용한 변수 선언방법과 const 키워드를 사용하여 상수를 선언하는 방법이 추가되었다.
    ```
    <var 키워드>
    var 변수명;
    var 변수명 = 초기값;
    
    <let 키워드>
    let 변수명;
    let 변수명 = 초기값;
    
    <const 키워드>
    const 변수명 = 상수값;
    ```
    1. var 키워드 변수와 let 키워드 변수의 차이점
       - 유효범위(스코프, Scope)가 다르다는 것
         - 어느 범위까지 참조하는지 (변수와 매개변수(Parameter)의 접근성과 생존기간)
       - 유효범위의 종류
         - 전역 스코프(Global Scope) : 자바스크립트 전역에서 참조되는 것을 의미
         - 지역 스코프(Local Scope) : 정의된 함수 안에서만 참조되는 것을 의미, 함수 밖에서는 참조하지 못한다는 의미
           ```
           // 전역 스코프(Global Scope)
              {
                  // 스코프 a
                  var aa = 55;
              }
              {
                  // 스코프 b
                  alert(aa);
              }
              // 전역 스코프
              alert(aa);
           ```
           - var 키워드로 선언된 aa 변수는 유효범위가 전역 스코프 -> 자바스크립트 전역에서 참조 가능
           ```
           // 지역 스코프(Local Scope)
              {
                  // 스코프 a
                  let bbb = 77;
                  alert(bb);
              }
           ```
           - let 키워드로 선언된 bb 변수는 유효범위가 지역 스코프 -> 정의된 문장 블록 또는 함수 안에서만 참조 가능        
          
    2. var, let, const 키워드에 의한 선언과 방법의 상호 차이점
       - var
         - 전역 스코프
         - 재 선언 가능
       - let
         - 지역 스코프
         - 재 선언 불가능
       - const
         - 지역 스코프
         - 재 선언 불가능 
    3. let 키워드 변수와 const 키워드 상수의 차이점
       - let
         - 변수
         - 변할 수 있는 값
       - const
         - 상수
         - 변하지 않는 값 
    4. 재 선언
       - 동일한 이름으로 변수 또는 상수를 다시 선언하는 것
       - var 키워드 변수만 가능
    5. 변수명 작성 규칙
       - 변수 선언 시 변수명은 반드시 지정되어야 한다.
         1. 첫 문자는 반드시 영문자 또는 _ 기호 또는 $ 기호 중 하나로 시작
         2. 첫 문자 이후 문자는 영문자, 숫자, _ 기호 조합하여 작성
         3. 영문자는 대소문자 구분
         4. 변수명에 공백 불가
         5. 미리 정해진 예약어 지정 불가
    6. 예약어(Reserved word) 및 비예약어(Nonreserved word)
       - 예약어 
         - 자바스크립트 언어에서 미리 지정되어 있는 명령어 또는 예약되어 있는 단어
       - 비예약어
         - 사용자 정의어(User defined word)
         - 사용자가 임의로 정의하여 사용하는 단어

### 3-2. 자바스크립트 데이터 형태
1. 데이터 형태(Data type)
   - 수치형
   - 문자형
   - 논리형
2. 수치형
   - 정수형
     - 양수 or 음수  
   - 실수형
     - 양수 or 음수
   1. 10진수 표현
      - 숫자 그대로 표현한다.
      - 55, -55..
   2. 8진수 표현
      - 숫자 앞에 접두어로 9을 붙여 표현한다.
      - 055, 066..
   3. 16진수 표현
      - 아라비아 숫자(0~9)와 A,B,C,D,E,F로 조합하여 나타낸다.
      - 숫자 앞에 접두어로 0x 또는 0X를 붙여 표현한다.
      - 0x55, 0X77..
   4. 고정 소수점과 부동 소수점(Floating point) 표현
      - 부동 소수점
        - 하나의 수를 가수부분(고정 소수점 부분), 지수부분(고정 소수점 위치)으로 나누어 표현하는 표기법
        - 컴퓨터에서 실수를 표현하는 방법으로 소수점의 위치가 고정되어있지 않다.
        - 가수와 지수를 사용하여 실수를 표현한다.
        - 55.0(고정 소수점) -> 55.2e15, .552e12, -55.2e12(부동 소수점) 
3. 문자형
   - 데이터 값으로 문자를 취하는 데이터 형
   1. 문자열(String) 표현
      - 홑 따옴표('') 또는 쌍 따옴표("")로 감싸서 나타낸다.
   2. 이스케이프시퀀스(Escape sequence)
      - \b : 백스페이스(Backspace)
      - \n : 새 줄(Line feed)
      - \' : 단일 따옴표
      - \" : 이중 따옴표
      - \t : 탭(Tab)
      - \r : 리턴(carriage return)
      - \\ : 백슬래시
4. 논리형(Boolean type)
   - 참(true)
   - 거짓(false)
5. null 데이터 형
   - 정의되지 않은 변수
   - 값이 비어 있는 상태를 의미하는 특별한 데이터 형
   - 공백 문자열과는 다른 의미를 나타낸다.
6. undefined 데이터 형
   - 변수가 선언되었지만 값이 지정되지 않은 상태를 의미하는 특별한 데이터 형
  
# Chapter04 자바스크립트 연산자(Operator)
## 1. 연산 규칙
### 1-1. 자바스크립트 연산자
- 연산 규칙에 의한 결과를 나타내는 기호
- 산술 연산자
  - 덧셈, 뺄셈, 곱셉, 나눗셈, 잉여 연산
  - +, -, *, /, %
- 증감 연산자
  - 1 증가 or 1감소 
  - ++, -- 
- 대입 연산자
  - 대입 연산자와 산술식에 대한 대입 연산
  - =, +=, -=, *=, /=, %=
- 결합 연산자
  - 피연산자와 결합 연산
  - +
- 비교 연산자
  - 피연산자에 대한 비교 연산
  - ==, !=, >, <, >=, <=, ===, !==, ?:
- 논리 연산자
  - AND, OR, NOT 논리 연산
  - &&, ||, !
- 비트 연산자
  - 0, 1 bit 연산
  - &, |, ^, ~, <<, >>, >>>

### 1-2. 자바스크립트의 연산자와 수식에 대한 연산 규칙
1. 연산자(Operator)
   - 연산 규칙에 의한 결과를 나타내는 기호
   - 피연산자를 의미하는 데이터를 처리하는데 사용된다.
2. 연산 수식
   ```
    var     score     =      score      +        100;
   예약어   변수명   연산자   피연산자   연산자   피연산자  
   ```
3. 대입기호(=)
   - 대입기호 우변의 수식을 연산하여 좌변의 수식에 대입한다는 의미
4. 연산 우선순위(Precedence)
   - 우선순위가 빠른 연산자부터 연산 수행
5. 연산 결합성(Associativity)
   - 대입기호 좌변이나 우변의 수식과 결합하여 수식의 연산이 수행된다는 의미

## 2. 기본 연산자
### 2-1. 산술 연산자
- 수치 값(또는 변수)들의 피연산자를 대상으로 수치와 관련된 연산 수식을 수행하는 연산자
- 덧셈 연산자 (+)
- 뺄셈 연산자 (-)
- 곱셈 연산자 (*)
- 나눗셈 연산자 (/)
- 잉여 연산자 (%)
```
<script type = "text/javascript">
  var x = 20;
  var y = 50;
  var z = 0;
  z = (x + y / 2) % 6;
  document.write(z);
</script>
```

### 2-2. 증감 연산자
- 증가 연산자
  - ++
    - ++x : 전위 증가 연산자
      - ex) x=5; ++x; 결과 x=6;
    - x++ : 후위 증가 연산자 
      - ex) x=5; x++; 결과 x=5; 다음 문장 결과 x=6; 
- 감소 연산자
  - -- 
    - --y : 전위 감소 연산자
      - ex) y=5; --y; 결과 y=4;
    - y-- : 후위 감소 연산자 
      - ex) y=5; y--; 결과 y=5; 다음 문장 결과 y=4; 

### 2-3. 단축 대입 연산자
- 대입 연산자와 대입기호(=)를 결합하여 연산을 수행하는 연산자
- 대입 연산자 (=)
- 덧셈 대입 연산자 (+=)
- 뺄셈 대입 연산자 (-=)
- 곱셈 대입 연산자 (*=)
- 나눗셈 대입 연산자 (/=)
- 잉여 대입 연산자 (%=)

### 2-4. 결합 연산자
- 문자열을 더하는 연산 수식
- 덧셈 또는 결합 연산자 (+)
  - 20 + 19 -> 39
  - 2019 + "년" -> "2019년"
  - "대한" + "민국" -> "대한민국" 

### 2-5. 결합 연산자 - ES6 버전 기능 추가
- \` 기호와 $ 기호를 이용한 결합 연산자
- \`5+15의 값은 ${5+15}입니다.\` -> 5+15의 값은 20입니다.

## 3. 비교 연산자
- x == y : x와 y가 같으면 참
- x != y : x와 y가 같지 않으면 참
- x > y : x가 y보다 크면 참
- x < y : x가 y보다 작으면 참
- x >= y : x가 y보다 크거나 같으면 참
- x <= y : x가 y보다 작거나 같으면 참
- x === y : x와 y의 값과 데이터 형이 모두 같으면 참
- x !== y : x와 y의 값이 다르거나 데이터 형이 다르면 참

## 4. 논리 연산자
- AND 연산 : &&
- OR 연산 : ||
- NOT 연산 : !

## 5. 비트 연산자
- 피연산자의 bit 값(1과 0)을 비트 연산자 &(AND), |(OR), ~(NOT), ^(XOR), <<(left bit shift), >>(right bit shift) 의 비트 연산자 수식에 맞게 연산을 수행하여 bit 값이 참이면 1, 거짓이면 0의 결과를 나타내는 연산자
  - ex) X = 0111(7), Y = 1000(8)
    - AND 연산 (X & Y)
      - 0000(0)
    - OR 연산 (X || Y)
      - 1111(15)
    - NOT 연산 (~X)
      - -1000(-8)  
      - 부호(양수, 음수)도 반전된다.
    - XOR 연산 (X ^ Y)
      - 1111(15)
      - X와 Y가 서로 다르면 참(1)
    - 비트 좌측 이동 (X << 2)
      - 011100(28)
      - X의 비트(2진수) 값 좌측 2비트 이동 (우측 2비트 0으로 채우기)
    - 비트 우측 이동 (X >> 2)
      - 01(1)
      - X의 비트(2진수) 값 우측 2비트 이동 (좌측 2비트 제거)
    - 비트 우측 이동 (X >>> 2)
      - 0001(1)
      - X의 비트(2진수) 값 우측 2비트 이동 (좌측 2비트 0으로 채움) 

## 6. 기타 연산자
### 6-1. 조건 연산자(3항 연산자)
```
조건식 ? 구문1 : 구문2
```
- 조건식의 결과가 참이면 구문1 실행, 거짓이면 구문2 실행
- ex)
  ```
  var x = 7;
  var y = 8;
  
  x > y ? document.write("x의 값이 y값보다 크다.") : 
          document.write("x의 값이 y값보다 작다.")
  ```
  - 결과 : x의 값이 y값보다 작다.

# Chapter05 자바스크립트 제어문
## 1. 제어문 이해
### 1-1. 프로그램 구조
- 제어문은 프로그램의 순서를 제어하는 명령문
- 조건에 맞는 기능을 실행하거나 특정 위치로 이동하거나 반복하는 기능 수행
1. 순차형 프로그램 구조 - 프로그램이 순차적으로 실행되는 구조
2. 선택형 프로그램 구조 (if ~ then ~ else 형) - 프로그램이 제어문의 조건(참 or 거짓)에 맞는 구문을 실행
3. 반복형 프로그램 구조 (do while 형) - 조건에 맞는 구문을 반복 실행

### 1-2. 프로그램 제어문 분류
- if 문
  - 주어진 참의 조건에 맞는 구문 실행
- if ~ else 문
  - 주어진 참과 거짓 조건에 맞는 구문 실행
- 다중 if ~ else 문
  - 다중 조건문의 참과 거짓 조건에 맞는 구문 실행
- switch ~ case 문
  - 조건에 맞는 구문 선택 실행
- break 문
  - 반복문 루프 강제 종료
- continue 문
  - 반복문 루프를 예외상황으로 컨트롤

## 2. if 문
### 2-2. if 조건문 실습
```
var score = 96;
if (score > 94) {
    document.write("학생 성적은 A+ 학점입니다.");
    }
```
- 결과 : 학생 성적은 A+ 학점입니다.

## 3. if ~ else 문
### 3-2. if ~ else 조건문 실습
```
var score = 92;
if (score > 94)
  {document.write("학생 성적은 A+ 학점입니다.");}
else 
  {document.write("학생 성적은 95점 미만 학점입니다.");}
```
- 결과 : 학생 성적은 95점 미만 학점입니다.

## 4. 다중 if ~ else 문
### 4-2. 다중 if ~ else 조건문 실습
```
var score = 92;
if (score >= 95) {
  document.write("학생 성적은 A+ 학점입니다.);
  } else if (score >= 90) {
    document.write("학생 성적은 AO 학점입니다.);
    } else if (score >= 85) {
      document.write("학생 성적은 B+ 학점입니다.);
      } else if (score >= 80) {
        document.write("학생 성적은 BO 학점입니다.);
        } else if (score >= 75) {
          document.write("학생 성적은 C+ 학점입니다.);
          } else if (score >= 70) {
            document.write("학생 성적은 CO 학점입니다.);
            } else if (score >= 65) {
              document.write("학생 성적은 D+ 학점입니다.);
              } else if (score >= 60) {
                document.write("학생 성적은 DO 학점입니다.);
                } else 
                  {document.write("학생 성적은 F 학점입니다.);}
```
- 결과 : 학생 성적은 AO 학점입니다.

## 5. switch ~ case 문
### 5-2. switch ~ case 조건문 실습 1
```
var score = prompt("학생 성적 총점(0~100)을 입력하세요.");
switch (true) {
  case score >= 95 : 
    document.write("학생 성적은 A+ 학점입니다.");
    break;
  case score >= 90 :
    document.write("학생 성적은 AO 학점입니다.");
    break;
  case score >= 85 :
    document.write("학생 성적은 B+ 학점입니다.");
    break;
  case score >= 80 :
    document.write("학생 성적은 BO 학점입니다.");
    break;
  case score >= 75 :
    document.write("학생 성적은 C+ 학점입니다.");
    break;
  case score >= 70 :
    document.write("학생 성적은 CO 학점입니다.");
    break;
  case score >= 65 :
    document.write("학생 성적은 D+ 학점입니다.");
    break;
  case score >= 60 :
    document.write("학생 성적은 DO 학점입니다.");
    break;
  default :
    document.write("학생 성적은 F 학점입니다.");
}
```

### 5-3. switch ~ case 조건문 실습 2
```
var score = prompt("성적 등급(A+ ~ F)을 입력하세요.")
switch (score) {
  case score = "A+" :
    document.write("A+ 학점은 95점 이상 100점 이하입니다.");
    break;
  case score = "AO" :
    document.write("AO 학점은 90점 이상 95점 미만입니다.");
    break;
  case score = "B+" :
    document.write("B+ 학점은 85점 이상 90점 미만입니다.");
    break;
  case score = "BO" :
    document.write("BO 학점은 80점 이상 85점 미만입니다.");
    break;
  case score = "C+" :
    document.write("C+ 학점은 75점 이상 80점 미만입니다.");
    break;
  case score = "CO" :
    document.write("CO 학점은 70점 이상 75점 미만입니다.");
    break;
  case score = "D+" :
    document.write("D+ 학점은 65점 이상 70점 미만입니다.");
    break;
  case score = "DO" :
    document.write("DO 학점은 60점 이상 65점 미만입니다.");
    break;
  default : 
    document.write("F 60점 미만입니다.");
```

## 6. 기타 제어문
### 6-1. break 제어문
- 실행중인 선택문(switch ~ case 문)이나 반복문(for문, while문, do ~ while문)의 해당 블록을 강제로 빠져 나가게 하는 제어문

### 6-2. continue 제어문
- 반복문(for문, while문, do ~ while문)에서 continue 이후의 구문은 강제로 중단하고 시작 블록으로 다시 되돌아가서 다시 시작하게 하는 제어문

# Chapter06 자바스크립트 반복문
## 1. 반복문 이해
### 1-3. 배열
- 동일한 특성을 가진 일정한 규칙에 의해 요소를 나열한 데이터의 집합
- 행과 열의 테이블 형태로 데이터를 표현하여 처리
- 배열명에 첨자를 붙여서 배열 요소를 식별

### 1-4. 객체(Object), 메서드(Method), 속성(Property)
- 자바스크립트는 객체지향적인 언어로 객체, 메서드, 속성 구성요소를 사용한다. -> 완전한 객체지향 언어가 아니라 객체지향 개념의 일부 구성요소만을 사용한다는 개념
1. 객체(Object)
   - 모든 사물을 프로그램 내에서 용이하도록 만들어주는 구조를 의미
2. 메서드(Method)
   - 행위와 동작을 유발하는 동적개념
   - 멤버함수라고도 한다.
   - 프로그램 내에서 반복되는 행위와 동작을 실행할 때 호출하여 프로그램을 간결하게 나타내기 위해 주로 사용
   - 메서드명 뒤에는 ()가 항상 붙는다.
3. 속성(Property)
   - 객체의 속성에 대한 값
   - 객체.속성 = 속성값

## 2. while 문
### 2-2. while 반복문 실습
```
var k = 0;
var sum = 0;
while (k <= 100) {
  sum = sum + k;
  k++;
}
document.write("1에서 100까지의 합계 : " + sum);
```
- 결과 : 1에서 100까지의 합계 : 5050

## 3. do ~ while 문
### 3-1. 일반 형식
- do ~ while 루프문의 조건식을 검사하기 전 먼저 do ~while 루프문의 문장 블록을 수행한 후 검사가 이루어지는 제어문
- do ~ while 루프문의 조건식이 참일 때까지 문장블록을 반복수행하며 조건식이 거짓이 되면 반복수행을 종료한다.
```
do {
  구문1;
  증감식;
}
while (조건식);
```

### 3-2. do ~ while 반복문 실습
```
var k = 0;
var sum = 0;
do {
  sum = sum + k;
  k = k + 5;
} while (k <= 1000)
document.write("1에서 1000까지 5의 배수의 합계 : " + sum);
```
- 결과 : 1에서 1000까지 5의 배수의 합계 : 100500

## 4. for 문
### 4-2. for 반복문 실습
```
var sum = 0;
for (k = 1; k <= 100; k = k+2) {
  sum = sum + k;
}
document.write("1에서 100까지 2의 제곱 합계 : " + sum);
```
- 결과 : 1에서 100까지 2의 제곱 합계 : 2500

## 5. for ~ in 문
### 5-1. 일반 형식
- 배열이나 객체의 첫 번째 원소부터 마지막 원소까지 나열할 때 사용하는 제어문
```
for (키변수 in 배열명) {
  구문1;
}

for (키변수 in 객체명) {
  구문1;
}
```

### 5-2. for ~ in 반복문 실습1
```
var month = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] ;
for (var k in month) {
  document.write("1차원 배열원소 " , k, "번째 값은 ", month[k], "입니다.", "<br>");
}
```
- 결과 
  ```
  1차원 배열원소 0번째 값은 1월입니다.
  1차원 배열원소 1번째 값은 2월입니다.
  1차원 배열원소 2번째 값은 3월입니다.
  1차원 배열원소 3번째 값은 4월입니다.
  1차원 배열원소 4번째 값은 5월입니다.
  1차원 배열원소 5번째 값은 6월입니다.
  1차원 배열원소 6번째 값은 7월입니다.
  1차원 배열원소 7번째 값은 8월입니다.
  1차원 배열원소 8번째 값은 9월입니다.
  1차원 배열원소 9번째 값은 10월입니다.
  1차원 배열원소 10번째 값은 11월입니다.
  1차원 배열원소 11번째 값은 12월입니다. 
  ```
  
### 5-3. for ~ in 반복문 실습2
- 객체(Object) 표현
```
var 객체명 = {이름1 : 값, 이름2 : 값, ..., 이름n : 값};
```
- 예시
```
var score = {번호 : 001, 이름 : "홍길동", 국어점수 : 90, 영어점수 : 95, 수학점수 : 97};
for (var k in score) {
  document.write("객체 속성 ", k, "는(은) ", score[k], "입니다", "<br>");
}
```
- 결과
  ```
  객체 속성 번호는(은) 1입니다
  객체 속성 이름는(은) 홍길동입니다
  객체 속성 국어점수는(은) 90입니다
  객체 속성 영어점수는(은) 95입니다
  객체 속성 수학점수는(은) 97입니다
  ```
  
## 6. 중첩 loop문
### 6-1. 일반 형식
- 반복문 속 반복문
- 외부에 있는 loop문 = 외부 loop 반복문, 안에 있는 loop문 = 내부 loop 반복문

### 6-2. 중첩 loop 문 실습
```
var gugudan = 0;
for (k = 2; k <= 9; k++) {
  document.write("<hr>" + k + "단" + "<hr>");
  for (kk = 1; kk <= 9; kk++) {
    gugudan = k * kk;
    document.write(k + " * " + kk + " = " + gugudan + "<br>");
  }
}
```
- 결과
- ![image](https://user-images.githubusercontent.com/76677629/130409878-1b6541e0-7aa8-41f0-b1a3-7d71892ddf2b.png)

## 7. for ~ of 문
### 7-1. 일반 형식
- ES6에서 추가된 기능
- 배열이나 객체의 첫 번째 원소부터 마지막 원소까지 나열할 때 앞의 반복 키변수에 요소 값을 바로 넣어 활용할 수 있다.
```
for (키변수 of 배열명) {
  구문1;
}
```
- 키변수는 배열의 첫 번째 원소부터 마지막 원소까지의 요소 값이 저장

### 7-2. for ~ of 반복문 실습
- 대괄호([]) 안에 숫자로 배열의 요소를 색인으로 나타낸다.
```
var month = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] ;
for (var k of month) {
  document.write(`1차원 배열원소의 요소는 ${k}입니다.`, "<br>");
}
```
- 결과
  ```
  1차원 배열원소의 요소는 1월입니다.
  1차원 배열원소의 요소는 2월입니다.
  1차원 배열원소의 요소는 3월입니다.
  1차원 배열원소의 요소는 4월입니다.
  1차원 배열원소의 요소는 5월입니다.
  1차원 배열원소의 요소는 6월입니다.
  1차원 배열원소의 요소는 7월입니다.
  1차원 배열원소의 요소는 8월입니다.
  1차원 배열원소의 요소는 9월입니다.
  1차원 배열원소의 요소는 10월입니다.
  1차원 배열원소의 요소는 11월입니다.
  1차원 배열원소의 요소는 12월입니다.
  ```

# Chapter07 자바스크립트 함수
## 1. 함수 이해
### 1-1. 함수란?
- 특정 작업을 수행하기 위해 독립적으로 만들어진 호출 가능한 루틴 -> 하나의 프로그램 단위
- 값을 계산하는 독립적인 프로그래밍 절차 -> 함수를 호출하고자 하는 범위 내에서 정의하고 선언해야 한다.
  1. 자바스크립트 함수의 주요 특징
     1. 함수는 객체
     2. 함수는 유효범위(Scope)를 제공 
  2. 자바스크립트에서의 함수는 다음과 같은 주요 특징을 가지고 있는 객체이다.
     - 함수 A가 객체로서 속성과 메서드를 가진다 -> 이 중 하나가 또 다른 함수인 B이다. -> 이 함수 B는 C라는 함수를 인자로 받아들인다. -> 실행결과 또 다른 함수 D를 반환할 수 있다.
     - 일반적인 함수는 하나의 객체
     - 자바스크립트의 함수는 사용자가 정의한 함수를 호출하여 실행가능하다.
     1. 프로그램 실행(Run time) 중 동적으로 생성 가능
     2. 변수에 할당 가능
     3. 다른 변수에 참조 복사 가능
     4. 확장 가능, 삭제 가능
  3. 자바스크립트 함수는 유효범위(Scope)를 제공한다.
     - 중괄호 {} 지역의 문장 블록으로 유효범위를 만드는 것이 아닌, 함수에서 유효범위를 제공한다는 뜻
       1. 어떤 변수이건 자바스크립트의 함수 내에서 var로 정의되면 지역변수, 함수 밖 참조 불가
       2. 변수를 if 조건문이나 for 문, while 문 내에서 var로 정의하더라도 이 변수가 if 문이나 for 문의 지역변수가 되지 않는다.
     - 해당 문장 블록을 감싸는 자바스크립트의 함수가 있을 때만 지역변수가 되고 감싸는 변수가 없으면 전역변수가 된다는 의미
  4. 자바스크립트의 변수 유효범위(Scope)
     1. 전역변수(Global Variable)
        - 함수 정의 외부에 선언된 변수
        - 프로그램의 모든 영역에서 사용가능한 변수
        - 사용자 정의 함수의 문장 블록 밖에서 만들어진 변수
        - 문장 블록 안에서 var를 사용하지 않고 만들어진 변수 -> 권장하지 않음
        - 함수 종료 후에도 메모리에 그대로 남아있다.
     2. 지역변수(Local Variable)
        - 지정된 영역(Scope)에서만 사용할 수 있는 특정한 변수
        - 사용자 정의 함수 내부에 선언된 변수
        - 사용자 정의 함수가 실행될 때마다 만들어지고 소멸 -> 외부의 코드에서 액세스 불가
        - 사용자 정의 함수의 문장 블록 안에서 var를 사용해서 선언
        - 함수 종료 후 소멸된 지역변수 호출 시 오류 발생

### 1-2. 자바스크립트의 함수 표현식
- 함수를 표현하는 식 = 함수 표현식(Function expression)
  - 이름을 생략한 함수 표현식 = 무명 함수 표현식(Unnamed function expression) = 익명 함수(Anonymous function)
  - 이름을 정의하여 선언한 함수 = 기명 함수 표현식(Named function expression)

## 2. Function 문
### 2-1. 자바스크립트 선언적 함수
1. 선언적 함수 정의
```
function 함수이름() {
  함수 구문;
}
```
   
2. 선언적 함수 호출하기
```
함수이름();
```
3. 선언적 함수 정의 (예)
```
function exam7_1() {
  var score = prompt("학생의 성적은? ", "숫자입력");
  document.write("학생의 성적은 " + score + "점입니다.");
}
```
4. 선언적 함수 호출 (예)
```
exam7_1();
```

### 2-2. 자바스크립트 익명 함수
1. 익명 함수 정의
   - 함수를 정의할 때 함수 이름을 익명으로 function 문을 정의하여 선언한 함수
   - 이름이 없으므로 함수 변수에 넣어 사용한다.
   - function 문을 정의하여 선언할 경우 함수변수에 직접 할당한다.
   - function() 문의 유효범위(Scope)를 참조하여 사용한다.
   ```
   var 함수변수 = function(매개변수) {
      함수 구문;
   }
   
   alert(함수변수); // 익명 함수 출력   
   ```
2. 익명 함수 정의 코딩 예
```
var AA = function(BB) {
  score = "학생의 성적은 " + BB + "점입니다.";
  return score;
}
```
3. 익명 함수 호출 코딩 예
```
alert(AA(96));
```

## 3. Function 문 인수
### 3-1. 자바스크립트의 매개변수 정의 방법
1. 선언적 함수 매개변수(가인수) 정의
   - function 문을 정의하여 선언하거나 호출할 때 매개변수의 인수를 정의하여야 한다.
     - 자바스크립트의 function문에 정의하여 선언한 매개변수의 인수를 가인수라고 한다. 
     - 사용자가 정의하여 선언한 함수를 호출할 때 선언한 매개변수의 인수를 실인수라고 한다.
   ```
   [선언적 함수 정의]
   function 함수이름(가인수1, 가인수2, .., 가인수n) {
      함수 구문;
   }
   ```
   - 매개변수의 가인수는 생략이 가능하며 여러 개를 선언할 수도 있다.
   - 가인수를 여러 개 선언할 경우 콤마에 의해 구분한다.
   - 함수의 가인수와 실인수의 개수는 같아야 하고 함수에 전달되는 데이터의 값이 대칭되도록 가인수를 선언하여야 한다.
   ```
   [선언적 함수 호출]
   함수이름(실인수1, 실인수2, .., 실인수n);
   ```
   - 매개변수의 실인수는 생략이 가능하지만 가인수의 개수만큼 지정하여야 한다.
2. 선언적 함수 매개변수(가인수) 정의 코딩 예
```
function exam7_3(KOR, ENG, MAT, number_of_subject) {
  var score = 0;
  document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
  document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
  document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
  score = (KOR + ENG + MAT) / number_of_subject;
  document.write("학생의 국영수 평균점수는 " + score + "점입니다.<br>");
}
```
3. 선언적 함수 매개변수(실인수) 호출 코딩 예
```
exam7_3(85, 95, 90, 3);
```

### 3-2. 자바스크립트의 매개변수 정의 방법 개선 - ES6
1. 선언적 함수 매개변수(가인수) 정의와 매개변수(실인수) 호출 - ES6
```
[선언적 함수 정의]
function 함수이름(가인수1, 가인수2 = <값>, .., 가인수n=<값>) {
  함수 구문;
}

[선언적 함수 호출]
함수이름(실인수1, 실잊수2, .., 실인수n);
```
2. 선언적 함수 정의(가인수) 실습 - ES6
```
function exam7_4(KOR, ENG, MAT, number_of_subject, score = ((KOR + ENG + MAT) / number_of_subject)) {
  document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
  document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
  document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
  document.write("학생의 국영수 평균점수는 " + score + "점입니다.<br>");
}
```
3. 선언적 함수 호출(실인수) 실습 - ES6
```
exam7_4(85, 95, 90, 3);
```

### 3-3. 자바스크립트의 전개 연산자 정의 방법 추가 - ES6
- 마침표 3개(...)를 기술하여 표기하는 방법
```
[선언적 함수 정의 - 전개 연산자 가변 매개변수] - ES6
function 함수이름(... 가변 매개변수) {
  alert(가변매개변수[0]);
  alert(가변매개변수[1]);
            ..
  alert(가변매개변수[n]);
}

[선언적 함수 호출 - 일반 매개변수]
함수이름(실인수1, 실인수2, .., 실인수n);
```
- 예시
  ```
  function exam7_5(...score) {
    document.write("학생의 국어점수는 " + score[0] + "점입니다.<br>");
    document.write("학생의 영어점수는 " + score[1] + "점입니다.<br>");
    document.write("학생의 수학점수는 " + score[2] + "점입니다.<br>");
    document.write("학생의 국영수 평균점수는 " + ((score[0] + score[1] + score[2]) / score[3]) + "점입니다.<br>");
  }
  
  exam7_5(85, 95, 90, 3);
  ```

### 3-4. 자바스크립트의 일반 매개 변수와 전개 연산자의 가변 매개변수를 조합하여 정의하는 방법 추가 - ES6
```
function 함수이름(가인수1, 가인수2, ...가변매개변수) {
  alert(가변매개변수);
}

함수이름(실인수1, 실인수2, .., 실인수n);
```
- 예시
  ```
  function exam7_6(KOR, ENG, MAT, ...score) {
    var score_avg = 0;
    document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
    document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
    document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
    score_avg = (KOR + ENG + MAT) / score[0];
    document.write("학생의 국영수 평균점수는 " + score_avg + "점입니다.<br>");
  }
  
  exam7_6(85, 95, 90, 3);
  ```

## 4. Function 문 함수 호출
- 다양한 방법으로 함수를 호출할 수 있다.

### 4-1. 일반 함수 호출 방법
```
[정의]
function 함수이름() {
  함수 구문;
}

[호출]
함수이름();
```

### 4-2. 멤버 함수 호출 방법
- 함수가 다른 객체의 멤버함수로 있을 때에 호출하는 방법
- 객체나 라이브러리 활용 시 자주 이용
```
[정의]
var 멤버변수 = {
  함수이름 : function(매개변수) {
    함수구문;
  }
}

[호출]
멤버변수.함수이름(매개변수);
```
- 예시
```
[정의]
var call_var = {
  exam7_7 : function(KOR, ENG, MAT, number_of_subject) {
    var score = 0;
    document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
    document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
    document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
    score = (KOR + ENG + MAT) / number_of_subject;
    document.write("학생의 국영수 평균점수는 " + score + "점입니다.<br>");
  }
}

[호출]
call_var.exam7_7(85, 95, 90, 3);
```

### 4-3. \<a> 태그를 이용한 함수 호출 방법
```
[정의]
function exam7_8(KOR, ENG, MAT, number_of_subject) {
  var score = 0;
  document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
  document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
  document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
  score = (KOR + ENG + MAT) / number_of_subject;
  document.write("학생의 국영수 평균점수는 " + score + "점입니다.<br>");
}

[호출]
<a href = "javascript: exam7_8(85, 95, 90, 3)">
```
  
### 4-4. 이벤트 핸들러를 이용한 함수 호출 방법
- 이벤트(Event) : 일반적으로 웹 페이지에서 일어나는 하나의 행위를 다루는 것
```
[정의]
function exam7_9(KOR, ENG, MAT, number_of_subject) {
  var score = 0;
  document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
  document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
  document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
  score = (KOR + ENG + MAT) / number_of_subject;
  document.write("학생의 국영수 평균점수는 " + score + "점입니다.<br>");
}

[호출]
<form>
  <input type = "button" value = "함수호출 버튼" onClick = "javaxcript: exam7_9(85, 95, 90, 3)">
</form>
```

## 5. Function 문 Return 값
- return 문은 선언적 함수에서 처리한 값을 반환하는 명령문
- 생략가능하지만 처리 값을 반환하고자 할 경우 function 문의 유효범위(Scope) 안에 선언되어야 한다.
```
function 함수이름(매개변수) {
  함수 구문;
  return 리턴수식;
}
```
- 여기서 매개변수는 가인수
- 예시
  ```
  [정의]
  function exam7_10(KOR, ENG, MAT, number_of_subject) {
    var score = 0;
    document.write("학생의 국어점수는 " + KOR + "점입니다.<br>");
    document.write("학생의 영어점수는 " + ENG + "점입니다.<br>");
    document.write("학생의 수학점수는 " + MAT + "점입니다.<br>");
    score = (KOR + ENG + MAT) / number_of_subject; 
    return score;
  }
  
  [호출]
  result = exam7_10(85, 95, 90, 3);
  document.write("학생의 국영수 평균점수는 " + result + "점입니다.");
  ```

## 6. 기타 Function 문
### 6-1. 자바스크립트의 function 문 변수 스코프(Scope)
```
[지역변수 정의]
function exam7_11(x, y) {
  var z = 0; // 지역변수
  document.write("x의 값은 " + x + "입니다.<br>");
  document.write("y의 값은 " + y + "입니다.<br>");
  z = x * y;
  return z; 
}

[전역변수 정의]
result = exam7_11(10, 30); // 전역변수
document.write("x * y = " + result + "입니다.<br>");
```

### 6-2. 자바스크립트의 콜백 함수(Callback Function)
- 매개변수로 전달하는 함수
```
[정의]
function exam7_12(function_call) {
  for(k = 0; k < 10; k++) {
    document.write("콜백 함수 " + k + "번째 호출입니다. <br>");
    function_call();
  }
}

[호출]
var function_call = function() {
  alert("콜백 함수 호출");
}
exam7_12(function_call);
```

### 6-3. 자바스크립트의 클로저(Closure)
1. 클로저(Closure)
   - 함수가 종료된 후라도 지역변수가 소멸되지 않고 해당 지역변수를 액세스할 수 있도록 지역변수를 제거하지 않고 남겨두는 현상
   - 리턴된 함수 자체
   ```
   function exam7_13(name) {
     var k = "당신의 이름은 " + name + "입니다.<br>";
   }
   document.write(k); // 함수 종료 후에 지역변수 k 가 소멸상태 -> 오류 발생
   ```
2. 클로저 실습1
   - 클로저로 지정하게 되면 함수 종료 후에도 지역변수 k를 다시 활용할 수 있다.
   ```
   [함수 선언]
   function exam7_14(name) {
     var k = "당신의 이름은 " + name + "입니다.<br>";
     return function () {
       document.write(k);
     }
   }
   
   [출력]
   exam7_14("홍길동")();
   exam7_14("김유신")();
   exam7_14("이순신")();
   ```
3. 클로저 실습2
   - output1(), output2(), output()3 함수를 호출하게 되면 지역변수 k가 그대로 남겨져 다시 활용할 수 있다.
   ```
   [함수 선언]
   function exam7_15(name) {
     var k = "당신의 이름은 " + name + "입니다.<br>";
     return function () {
       document.write(k);
     }
   }
   
   [변수 선언]
   var output1 = exam7_15("홍길동")();
   var output2 = exam7_15("김유신")();
   var output3 = exam7_15("이순신")();
   
   [함수 호출]
   output1();
   output2();
   output3();
   ```

# Chapter08 자바스크립트 Form
## 1. Form 객체
### 1-1. 자바스크립트의 웹 폼(Form)
- 폼을 통해 입력된 데이터를 서버로 전송 -> 전송한 데이터를 웹 서버가 처리 -> 결과에 따른 또 다른 웹 페이지를 보여주는 역할
- 폼 태그 동작
  1. 웹 페이지의 폼 방문
  2. 폼 내용 입력
  3. 내용의 데이터 웹 서버로 전송
  4. 전송받은 웹 서버가 폼 내용의 데이터를 웹 프로그램으로 전송
  5. 웹 프로그램에서 폼 내용의 데이터 처리
  6. 처리한 결과의 새로운 웹 페이지를 웹 서버로 전송
  7. 웹 서버가 받은 새로운 웹 페이지를 브라우저에게 전송
  8. 웹 브라우저가 웹 페이지를 사용자에게 보여줌

### 1-2. 자바스크립트 웹 문서의 주요 폼(Form) 요소
- \<form> 태그
  - 웹 문서에서 사용자의 입력을 서버로 전달하는 기능
  - \<form> 태그를 이용하여 구현할 때 사용
- \<input> 태그
  - 한 줄 정도의 짧은 텍스트를 입력받는 텍스트 박스
- \<fieldset> 태그
  - 특정 범위의 영역에 있는 요소와 레이블을 그룹으로 묶어 네모 박스를 만들 때 사용
- \<label> 태그
  - 데이터 입력 필드의 캡션을 만들 때 사용
- \<textarea> 태그
  - 한 줄 이상의 긴 문장을 입력받는 텍스트 박스
- \<select> 태그, \<option> 태그
  - 드롭박스 메뉴를 만들 때 사용
- \<optgroup> 태그
  - 셀렉트 박스의 옵션 내용을 그룹을 만들 때 사용

### 1-3. 자바스크립트 Form 객체
- 자바스크립트의 웹 폼 문서를 사용하기 위해 HTML5의 \<body> \</body> 태그 사이에 \<form> \</form> 태그를 사용해서 나타낸다.
1. 일반 형식
    ```
    <form name = "웹 문서 폼 이름" action = "nothing" method = "post 혹은 get">
    ..
    </form>
    ```
   - name : 웬도우 객체에 들어 있는 모든 프레임을 나타내는 속성 이름
   - action : 사용자가 입력한 데이터를 처리할 프로그래밍 URL 경로나 문서
   - method : 입력된 내용의 전송 방식을 지정하는 속성
     - post 
       - HTTP로 데이터를 전송하는 표준입력 방식
       - 입력 폼이 서버로 전송될 때 사용
       - ex) 방명록, 게시판
     - get 
       - URL로 데이터를 전송하는 입력 방식
       - 입력 폼의 내용에 대한 결과를 서버로부터 가져와 사용자에게 보여줌
       - ex) 검색 엔진의 검색 결과, 방문횟수 카운터
   - elements : 입력폼의 요소(텍스트, 버튼, 체크박스, 라디오 버튼, 보내기 버튼, 리셋 버튼)를 나타내는 속성
 
2. 웹 \<form> 태그 실습
    ```
    [함수선언]
    function exam8_1() {
      var idata;
      idata = "action 속성: " + document.iform.action + " ==> " +
              "method 속성: " + document.iform.method;
      alert(idata);
    }

    <form name = "iform" action = "학습예제 7-15.html" method = "post">
      <input type = "button" value = "웹 입력폼 속성확인" onClick = "exam8_1()" />
    </form>
    ```

### 1-4. 자바스크립트의 Form 객체에 대한 메서드
1. submit 및 reset 객체 일반 형식
    ```
    <input type = "submit" value = "전송">
    <input type = "reset" value = "리셋">
    ```
   - submit 객체는 사용자가 웹 폼에서 입력한 데이터들을 웹 서버로 전송하는 기능
   - reset 객체는 사용자가 웹 폼에서 입력한 데이터들을 리셋(reset) 시키는 기능
   - submit() 메서드와 reset() 메서드가 가지는 이벤트 핸들러 기능
     - onSubmit()
       - 전송 버튼을 클릭했을 때 발생하는 이벤트 핸들러 기능
     - onReset() 
       - 리셋 버튼을 클릭했을 때 발생하는 이벤트 핸들러 기능  

2. onReset() 메서드 실습
    ```
    [함수 선언]
    function Reset(form) {
      form.iname.value = "이름을 다시 입력하세요.";
      form.iaddress.value = "주소를 다시 입력하세요.";
    }

    <form name = "iform" action = "학습예제 8-1.html" method = "post">
      이름 : <input type = "text" name = "iname"> <br> <br>
      주소 : <input type = "text" name = "iaddress"> <br> <br>
      <input type = "reset" value = "리셋" onClick = "Reset(this.form);  return false;" />
    </form>
    ```

## 2. Form 객체 컨트롤 종류
### 2-1. 자바스크립트의 Form 컨트롤 종류
- 자바스크립트의 Form 객체는 웹 문서를 동적으로 꾸밀 때 가장 널리 쓰인다.
- 동적 기능
  - 버튼이나 링크 또는 이미지를 클릭
  - 마우스로 움직일 때 이벤트에 응답하고 사용자에 의해 동적으로 상호 작용하는 기능
1. \<input> 태그
    ```
    <input type = "text" name = "id" size = "12" value = "아이디" />
    <input type = "password" name = "passwd" size = "10" value = "비밀번호" />
    ```
   - \<input type = "text">
      - 텍스트 입력 폼 박스 생성
   - \<input type = "password">
     - 패스워드 입력 폼 생성
     - 입력 시 데이터를 못 보도록 숨기는 기능 -> 비밀번호 입력 시 주로 사용
   - \<input type = "hidden">
     - 화면에 value 값을 디스플레이할 때 안보이도록 숨기는 기능
   - \<input type = "button">
     - 입력을 위한 버튼 입력 폼 생성
   - \<input type = "checkbox">
     - 입력을 위한 체크박스 버튼 입력 폼 생성
   - \<input type = "radio">
     - 입력을 위한 라디오 버튼 입력 폼 생성
   - \<input type = "file">
     - 파일 업로드 입력 폼 생성
   - \<input type = "submit">
     - 웹 폼에서 입력한 데이터들을 웹 서버에 전송하는 버튼 생성
   - \<input type = "reset">
     - 웹 폼에서 입력한 데이터들을 리셋시키는 버튼 생성      
   - \<input> 태그 실습
    ```
    <head>
      <script type = "text/javascript">
        function Display() {
          var userINFO;
          var uID = document.userForm.userID.value;
          var uPW = document.userForm.userPW.value;
          userINFO = uID + "\n" + uFW;
          alert(userINFO);
        }
        function Reset(form) {
          form.userID.value = "사용자 아이디";
          form.userFW.vaalue = "사용자 비밀번호";
        }
      </script>
    </head>
    <body>
      <fieldset>
        <form name = "userForm" method = "get" action = "학습예제 8-2.html">
          <label>아이디: <input type = "text" name = "userID" size = "12" value = "아이디" /></label>
          <label>비밀번호: <input type = "password" name = "userFW" size = "10" value = "비밀번호" /><label>
          <input type = "submit" value = "확인" onClick = "Display()" />
          <input type = "reset" value = "리셋" onClick = "Rest(this.form) ; return false;" />
        </form>
      </fieldset>
    </body>
    ```

2. \<label> 태그
   - \<label> 태그로 묶은 요소의 텍스트는 클릭하면 동작을 토글할 수 있게 해준다.
   - \<label> 태그의 for 속성은 다른 요소의 레이블과 연결시켜 주는 역할을 한다.
    ```
    <fieldset>
      <label for = "name">성명</label>
      <input type = "text" name = "name">
      <input type = "submit" value = "확인">
    </fieldset>
    ```

3. \<fieldset> 태그와 \<legend> 태그
   - \<fieldset> 태그
     - 특정 범위의 영역에 있는 요소와 레이블을 그룹으로 묶어 네모 박스를 만들어주는 태그
   - \<legend> 태그
     - 네모 박스 테두리 사이에 글자가 들어갈 내용을 입력하여 \<fieldset> 태그 영역의 제목을 나타내주는 태그
    ```
    <fieldset>
      <legend>웹 폼 요소</legend>
         성명: <input type = "text" /><br />
         직업: <input type = "text" /><br />
    </fieldset>
    ```

4. \<textarea> 태그
   - 여러 줄을 입력할 수 있는 텍스트 박스를 만들어 주는 태그
    ```
    <textarea rows = "3" cols = "50" name = "AA"></textarea>
    ```
   - rows = "3" -> 입력할 행의 수
   - cols = 50" -> 입력할 열의 수

5. \<select> 태그
   - 웹 폼에서 선택 메뉴를 만들어주는 태그
    ```
    <select name = "menu" size = 4>
      <option value = "0. 돈까스">0. 돈까스
      <option value = "1. 피자">1. 피자
      <option value = "2. 햄버거">2. 햄버거
      <option value = "3. 치킨">3. 치킨
    </select>
    ```
   - name = "menu" -> 선택 메뉴의 이름을 지정
   - value -> 선택 요소의 이름을 지정

6. \<optgroup> 태그
   - 셀렉트 박스의 옵션 내용을 그룹을 만들어 주는 태그
    ```
    <select name = "menu">
      <optgroup label = "직업 분류">
        <option value = "공무원">공무원</option>
        <option value = "회사원">회사원</option>
        <option value = "자영업">자영업</option>
      </optgroup>
      <optgroup label = "업종 분류">
        <option value = "판매업">판매업</option>
        <option value = "생산업">생산업</option>
        <option value = "광고업">광고업</option>
      </optgroup>
    </select>
    ```
   - name = "menu" -> 선택 메뉴의 이름을 지정
   - value -> 선택 요소의 이름을 지정
   - optgroup label -> 옵션 그룹을 분류하는 이름을 지정
  
### 2-2. 자바스크립트의 \<input> 태그 속성
1. \<input> 태그의 type="password" 속성
   - 입력 컨트롤에 데이터 입력 시 내용을 알 수 없도록 점으로 나타나게 하는 기능
    ```
    <input type = "password" name = "passwd" value = "비밀번호" />
    ```
2. \<input> 태그의 type = "button" 속성
   - 버튼 입력 폼 컨트롤 기능
    ```
    <input type = "button" name = "ok" value = "확인 버튼" onClick=Display() />
    ```
3. \<input> 태그의 type = "checkbox" 속성
   - 체크박스 버튼 입력 폼 컨트롤 기능
    ```
    <input type = "checkbox" name = "job" value = "직업" />
    ```
4. \<input> 태그의 type = "radio" 속성
   - 라디오 버튼 입력 폼 컨트롤 기능
    ```
    <input type = "radio" name = "sex" value = "성별" />
    ```
5. \<input> 태그의 type = "file" 속성
   - 파일 업로드 입력 컨트롤 기능
    ```
    <input type = "file" name = "fileNAME" size = 100 />
    ```





























