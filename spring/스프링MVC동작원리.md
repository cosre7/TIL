# 스프링 MVC
- Servlet 기반의 웹 애플리케이션을 쉽게 만들 수 있도록 도와주는 프레임워크
- 기존의 ServletWeb Application에서 Spring을 도입한다?
  - Spring에서 제공하는 IoC Container를 사용한다는 뜻
  - Spring MVC를 사용한다는 뜻

## 1. Servlet에서 Spring IoC Contrainer 사용하기
### 1-1. 의존성 추가
- SpringFramework를 사용하기 위해서는 `pom.xml`에 의존성을 추가해야 한다.
  ```
  <!-- Spring mvc ->
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.1.3.RELEASE</version>
  </dependency>
  ```
  -> SprintFramework를 사용하는 데 필요한 Libraries가 추가된다.
  
### 1-2. Web.xml
- ServletContrainer는 web.xml에 기술되어 있는 내용을 바탕으로하여 ServletContainer를 초기화한다.
- -> IoC Contrainer를 사용하기 위해서는 이 곳에 기술을 해야만 한다.
  
  - ContextLoaderListener
      - ServletContext의 라이프 사이클에 맞춰 ApplicationContext를 ServletContext에 추가하고 삭제하도록 한다.
  ```
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>
  ```

# 주요 구성 요소 및 처리 흐름
- 스프링 MVC도 컨트롤러를 사용하여 클라이언트의 요청을 처리한다.
- 이 때 스프링에서 DispatcherServlet이 MVC에서의 C(Controller) 부분을 처리한다.

# 1. 주요 구성 요소
## 1-1. Dispatcher-Servlet(디스패처 서블릿)
### 1) 개념
- dispatch -> 보내다 라는 뜻을 내포한다.
- HTTP 프로토콜로 들어오는 클라이언트의 요청을 가장 앞단에서 전달받아 적합한 컨트롤러에게 클라이언트의 요청을 전달하는 프론트 컨트롤러(Front Controller)라고 정의할 수 있다.
  ```
  클라이언트로부터 요청이 온다 -> Tomcat(톰캣)과 같은 서블릿 컨테이너가 요청을 받는다. 
  -> 디스패처 서블릿이 요청을 받는다. -> 공통적인 작업을 처리한다. -> 해당 요청을 처리하는 세부 컨트롤러를 getBean()으로 가져온다.
  -> 정해진 메소드를 실행시켜 작업을 위임한다.
  ```
  - Front Controller(프론트 컨트롤러)
    - 서블릿 컨테이너의 제일 앞에서 서버로 들어오는 클라이언트의 모든 요청을 받아 처리해주는 컨트롤러
    - MVC 구조에서 함께 사용되는 디자인 패턴
- 컨트롤러가 리턴한 결과값을 View에 전달하여 알맞은 응답을 생성하도록 한다.

### 2) 흐름
1. URL로 접근하여 정보를 요청한다 `클라이언트`->`DispatcherServlet`
2. 해당 요청을 매핑한 컨트롤러가 있는지 검색한다. `DispatcherServlet` -> `HandlerMapping`
3. 처리를 요청한다. `HandlerMapping` -> `Controller`
4. 클라이언트의 요청을 처리하고 결과를 출력할 View의 이름을 리턴한다. `Controller` -> `DispatcherServlet`
5. 컨트롤러에서 보내온 View의 이름을 토대로 처리 View를 검색한다. `DispatcherServlet` -> `ViewResolver`
6. 처리 결과를 View에 송신한다. `ViewResolver` -> `View`
7. 처리 결과가 포함된 View를 송신한다 `View` -> `DispatcherServlet`
8. 최종 결과를 출력한다. `DispatcherServlet` -> `클라이언트`




참고   
- [Dispatcher-Servlet(디스패처 서블릿)이란?](https://mangkyu.tistory.com/18)






















































