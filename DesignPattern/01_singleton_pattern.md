참고)   
[책]실전 개발을 위한 자바 디자인 패턴   
[인프런]자바 디자인 패턴의 이해 - Gof Design Pattern

# 객체란?
- 객체 : 속성과 기능을 갖춘 것   
  ex) 자동차 - 속성(기름량, 속도), 기능(달린다) 
- 클래스 : 속성과 기능을 정의한 것, 설계도   
  ex) 자동차를 만들기 위해 필요한 설계도
- 인스턴스 : 속성과 기능을 가진 것 중 실제 하는 것   
  ex) 공장에서 만들어져 나온 자동차 하나 하나
- 객체 안에 클래스와 인스턴스가 있다.

# 1. 싱글턴(Singleton)
## 1.1 정의
- 어디서나 접근 가능한 단 하나의 인스턴스를 생성하기 위한 패턴
- 하나만 생성해야할 객체를 위한 패턴

## 1.3 구성요소
### 1.3.1 Singleton
- 하나의 인스턴스만을 생성
- 어디에서나 접근 가능한 클래스메서드`getInstance()`를 가지고 있다.
- `getInstance()` 메서드를 통해 모든 클라이언트에 동일한 인스턴스 제공

## 1.4 사용시점
- 프로그램 상에서 단 하나만 존재해야 하는 객체가 있을 때 사용

## 1.5 효과
- 운용 객체가 하나이기 때문에 관리를 집중하여 유지 보수 비용을 줄이고 높은 신뢰성을 확보할 수 있다.

## 1.6 사용예
- 컬러선택 대화상자
- 파일선택 대화상자
- 사용자 설정 및 레지스트리 설정을 처리하는 객체
- 프로그램 히스토리 관리자

## 1.7 구현예제I
### 1.7.1 요구사항
```
두개의 수(100, 20)에 대한 사칙연산을 수행하고 그 결과 출력
```

### 1.7.2 실행결과
```
100 + 20 = 120
100 - 20 = 80
100 * 20 = 2000
100 / 20 = 5
```

### 1.7.3 구현방법
- 사칙연산 기능을 가지는 클래스로부터 단 하나의 인스턴스를 생성하여 수행

### 1.7.5 구현소스
- OperationSingleton.java   

```
public class OperationSingleton {
  
  public static final int ADD_OPERATION = 1;
  public static final int SUBSTRACT_OPERATION = 2;
  public static final int MULTIPLY_OPERATION = 3;
  public static final int DIVIDE_OPERATION = 4;
  
  private static OperationSingleton singleton = new OperationSingleton();
  
  private OperationSingleton() {
    super();
  }
  
  public static OperationSingleton getInstance() {
    return singleton;
  }
  
  public void operate(int operatorType, int firstNumber, int secondNumber) {
    
    int answer = 0;
    String operator = null;
    
    switch (operatorType) {
      case ADD_OPERATION:
        answer = firstNumber + secondNumber;
        operator = "+";
        break;
      case SUBSTRACT_OPERATION:
        answer = firstNumber - secondNumber;
        operator = "-";
        break;
      case MULTIPLY_OPERATION:
        answer = firstNumber * secondNumber;
        operator = "*";
        break;
      case DIVIDE_OPERATION:
        answer = firstNumber / secondNumber;
        operator = "/";
        break;
    }
    
    String result = firstNumber + operator + secondNumber + "=" + answer;
    
    print(result);
  }
  
  private void print(String result) {
    System.out.println(result);
  }
}
```   

- Client.java   

```
public class Client {

  public static void main(String[] args) {
  
    OperationSingleton calculatorSingleton = OperationSingleton.getInstance();
    
    int firstNumber = 100;
    int secondNumber = 20;
    
    calculatorSingleton.operate(OperationSingleton.ADD_OPERATION, firstNumber, secondNumber);
    calculatorSingleton.operate(OperationSingleton.SUBSTRACT_OPERATION, firstNumber, secondNumber);
    calculatorSingleton.operate(OperationSingleton.MULTIPLY_OPERATION, firstNumber, secondNumber);
    calculatorSingleton.operate(OperationSingleton.DIVIDE_OPERATION, firstNumber, secondNumber);
  }
}
```   

## 1.8 구현예제II
### 1.8.1 요구사항
```
개발 중인 시스템에서 스피커에 접근할 수 있는 클래스 생성
```
- 만약
- 스피커에 접근할 수 있는 클래스가 하나 이상이라면 하나의 스피커의 볼륨을 올리려면 다 찾아다니면서 볼륨을 올려야 한다. -> 싱글톤 개발의 필요성

### 1.8.2 구현방법
- 하나만 있어야하는 SystemSpeaker를 만든다.

### 1.8.3 구현소스
- SystemSpeaker.java   

```
public class SystemSpeaker {

  static private SystemSpeaker instance; // 하나의 인스턴스만 생성되게 하기 위해 static, 다른 곳에서 접근할 수 없도록 private
  private int volume;
  
  private SystemSpeaker() { // 다른 곳에서는 생성함수 호출 불가 -> private
    volume = 5;
  }
  
  public static SystemSpeaker getInstance() { // getInstance()를 받기 위해 static
    if (instance == null) { // getInstance를 호출할 때 생성되어야하기 때문에
      instance = new SystemSpeaker();  // 이곳에서 초기화를 해준다. // 인스턴스가 null 이면 생성
    }
    return instance;
  }
  
  public int getVolume() {
    return volume;
  }
  
  public void setVolume(int volume) {
    this.volume = volume;  
  }
}
```

- Main.java

```
public class Main { 
  
  public static void main(String[] args) {
    // SystemSpeaker speaker = new SystemSpeaker(); // 불가능 -> private
    SystemSpeaker speaker1 = SystemSpeaker.getInstance();
    SystemSpeaker speaker2 = SystemSpeaker.getInstance();
    
    // 5, 5
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());
    
    speaker1.setVolume(11);
    // 11, 11
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());
    
    speaker2.setVolume(22);
    // 22, 22
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());
  }
}
```
- `speaker1`과 `speaker2`로 이름을 다르게하여 인스턴스를 호출했지만 하나의 볼륨을 바꾸면 함께 변한다.
- -> 같은 인스턴스라는 뜻 
- `speaker1`과 `speaker2`는 같은 주소를 가지고 있다 -> 동일한 인스턴스
