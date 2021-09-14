# 목차
- [목차]

# 남의 클래스 & 남의 인스턴스
- 나의 클래스, 나의 인스턴스를 만들기 전에 남의 클래스와 인스턴스를 사용하는 법 알기

## 소스코드
- OthersOOP.java

```
import java.io.FileWriter;
import java.io.IOException;
 
public class OthersOOP {
 
    public static void main(String[] args) throws IOException {
        // class : System, Math, FileWriter
        // instance : f1, f2 -> f1이 가리키고 있는 값, f2가 가리키고 있는 값이 인스턴스
        // Math클래스 : 수학과 관련된 기능들이 모여있는 클래스
         
        System.out.println(Math.PI); // Math 클래스 안에 있는 PI라는 변수 -> 값 : 3.14~~
        System.out.println(Math.floor(1.8)); // Math 클래스 안에 소수점 내림 기능을 가지고 있는 메서드
        System.out.println(Math.ceil(1.8)); // Math 클래스 안에 소수점 올림 기능을 가지고 있는 메서드
         
        FileWriter f1 = new FileWriter("data.txt"); // 어떤 정보를 파일에 기록할 때 사용하는 클래스 // 파일이 없는 경우를 대비해 예외처리 throws IOException
        // "data.txt" -> 저장하고 싶은 파일의 이름
        // new FileWriter("data.txt") -> "data.txt"에 파일을 저장하겠다. 라고 하는 상태를 가지고 있는 FileWriter라는 클래스의 복제본 생성
        f1.write("Hello");
        f1.write(" Java"); 
        // Hello와 Java가 기록된 data.txt라는 파일이 만들어진다.
         
        FileWriter f2 = new FileWriter("data2.txt"); // FileWriter의 또다른 복제본인 f2 생성
        // f2 : data2.txt 파일에 내용을 저장하겠다! 라는 상태를 가진 FileWriter의 복제본
        f2.write("Hello");
        f2.write(" Java2");
        f2.close();
         
        f1.write("!!!");
        f1.close();
    }
 
}
```   
- 클래스
  - 변수와 메서드들이 많아지면서 생겨난 것 
  - 같은 주제를 가진 변수와 메서드들을 그룹화한 껍데기
- Math 클래스
  - Math.PI, Math.floor(1.8) 등의 형태로 그냥 사용
  - 내부적으로 어떠한 상태를 유지할 필요가 없다.
  - 필요할 때마다 사용하면 되는 일회용 같은 아이들
- FileWriter 클래스
  - new 의 형태로 복제본을 만들어 사용  
  - 긴 맥락의 작업들을 진행할 수 있다. (write~ close)
- 일회용같은 형태로 사용하는 클래스는 그냥 클래스.변수, 클래스.메서드 형태로 사용하지만 긴 흐름을 가지는 형태의 클래스는 복제본을 만들어 사용한다.

# 변수와 메소드
- 클래스 사용 전 클래스가 없으면 불편한 점 살펴보기

## 소스코드
- MyOOP.java

- 같은 코드가 계속해서 반복중 -> 재사용성 고려가 필요하다
- 연관된 코드에 이름을 붙이고 싶다 
- -> 메서드를 사용하자!
  ```
  <step1>
  public class MyOOP {

    public static void main(String[] args) {
      // 1억줄
      System.out.println("------"); // 구분자
      System.out.println("A"); // 엄청 중요한 출력이라고 생각
      System.out.println("A"); // 연관된 코드로 생각
      // 1억줄
      System.out.println("------");
      System.out.println("A");
      System.out.println("A");
      // 1억줄
    }
  }
  ```

- printA() 메서드를 만들어서 간략하게 표현
  ```
  <step2>
  public class MyOOP {

    public static void main(String[] args) {
      // 1억줄
      printA();
      printA();
    }

    public static void printA() {
      System.out.println("------");
      System.out.println("A");
      System.out.println("A");
    }
  }
  ```

- "B" 도 출력하고싶다!
  ```
  <step3>
  public class MyOOP {

    public static void main(String[] args) {
      // 1억줄
      printA();
      printA();
      printB();
      printB();
    }

    public static void printA() {
      System.out.println("------");
      System.out.println("A");
      System.out.println("A");
    }
    
    public static void printB() {
      System.out.println("------");
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```
  
- 구분자를 "\*" 로 출력하고싶다!
  ```
  <step4>
  public class MyOOP {

    public static void main(String[] args) {
      // 1억줄
      printA("------");
      printA("------");
      printB("------");
      printB("------");
      
      printA("******");
      printA("******");
      printB("******");
      printB("******");
    }

    public static void printA(String delimiter) {
      System.out.println(delimiter);
      System.out.println("A");
      System.out.println("A");
    }
    
    public static void printB(String delimiter) {
      System.out.println(delimiter);
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```
  
- printA()와 printB()가 1억줄이고 delimiter가 자주 바뀐다고 생각해보자
  ```
  <step5>
  public class MyOOP {

    public static void main(String[] args) {
      String delimiter = "------";
      printA(delimiter);
      printA(delimiter);
      printB(delimiter);
      printB(delimiter);
      
      delimiter = "******";
      printA(delimiter);
      printA(delimiter);
      printB(delimiter);
      printB(delimiter);
    }

    public static void printA(String delimiter) {
      System.out.println(delimiter);
      System.out.println("A");
      System.out.println("A");
    }
    
    public static void printB(String delimiter) {
      System.out.println(delimiter);
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```
  
- 인자를 변수로 주는것도 싫다!!
- main 메서드 안에 정의된 delimiter를 printA(), printB()에서 쓰면 되지 않을까?
- -> 메서드 안에 정의된 변수는 다른 메서드에서 접근할 수 없다. (유효범위)
- => 클래스 소속의 변수로 만들면 된다!
  ```
  <step6>
  public class MyOOP {
    public static String delimiter = "";
    public static void main(String[] args) {
      Print.delimiter = "----";
      Print.A();
      Print.A();
      Print.B();
      Print.B();

      Print.delimiter = "****";
      Print.A();
      Print.A();
      Print.B();
      Print.B();
    }
    
    public static void printA() {
      System.out.println(delimiter);
      System.out.println("A");
      System.out.println("A");
    }
    
    public static void printB() {
      System.out.println(delimiter);
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```

- delimiter와 printA(), printB()는 서로 굉장히 깊게 연관되어있다.
- 만약 연관이 없는 변수, 메서드가 1억개가 있다고 한다면 찾기 굉장히 힘들다 -> 그래서 나온게 클래스
  
# 클래스
- 클래스가 왜 필요한지, 왜 사용하는지 알자

## 클래스 - 존재 이유와 기본형식
- MyOOP.java

- 연관된 변수와 메서드를 클래스로 묶자
  ```
  class Print{ // Print와 연관된 변수와 메서드를 묶어서 클래스로 만들어준다.
      public static String delimiter = "";
      public static void A() {
          System.out.println(delimiter);
          System.out.println("A");
          System.out.println("A");
      }
      public static void B() {
          System.out.println(delimiter);
          System.out.println("B");
          System.out.println("B");
      }
  }
  public class MyOOP {
      public static void main(String[] args) {
          Print.delimiter = "----"; // Print 클래스의 delimiter라는 변수
          Print.A(); // Print 클래스의 A() 메서드
          Print.A();
          Print.B();
          Print.B();

          Print.delimiter = "****";
          Print.A();
          Print.A();
          Print.B();
          Print.B();
      }
  }
  ```
- 클래스 Print의 멤버 : delimiter, A(), B()   

## 클래스 - 형식
- 하나의 자바 파일 안에 2개의 클래스가 있으면 컴파일 후 MyOOP.class, Print.class 파일이 생성된다.
  - 각각의 클래스가 각각의 파일로 존재하게 된다.
  - -> 별도의 파일로 쪼갤 수 있다!
- main 메서드 : 실행되는 파일에서 필요한 메서드
  - 부품으로 사용될 클래스 파일에선 main메서드가 필요하지 않다.
- MyOOP.java
  ```
  public class MyOOP {
    public static void main(String[] args) {
      Print.delimiter = "----";
      Print.A();
      Print.A();
      Print.B();
      Print.B();

      Print.delimiter = "****";
      Print.A();
      Print.A();
      Print.B();
      Print.B();
    }
  }
  ```
- Print.java
  ```
  class Print {
    public static String delimiter = "";
 
    public static void A() {
      System.out.println(delimiter);
      System.out.println("A");
      System.out.println("A");
    }
 
    public static void B() {
      System.out.println(delimiter);
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```

# 인스턴스
- 여러 상태의 클래스가 동시에 필요할 때 클래스 앞에 new를 붙여 클래스의 복제본을 만들어 서로 다른 상태를 유지할 수 있다.
- 클래스의 복제본 = 인스턴스

## 소스코드
- 복제하기 전 원형의 상태 : 클래스 -> 클래스를 복제한 복제품 : 인스턴스
- 인스턴스 = new 클래스
- MyOOP.java
- 계속해서 구분자가 바뀌는 상황? -> 중복된 코드가 계속 발생한다, 같은 Print 클래스를 계~속 사용해야 한다.
  ```
  public class MyOOP {
    public static void main(String[] args) {
      Print.delimiter = "----";
      Print.A();
      Print.A();
      Print.B();
      Print.B();

      Print.delimiter = "****";
      Print.A();
      Print.A();
      Print.B();
      Print.B();
      
      Print.delimiter = "----";
      Print.A();
      Print.delimiter = "****";
      Print.A();
      Print.delimiter = "----";
      Print.A();
      Print.delimiter = "****";
      Print.A();
    }
  }
  ``` 
- Print 클래스를 인스턴스화한다.(복제한다)
- MyOOP.java
  ```
  public class MyOOP {
    public static void main(String[] args) {
      Print p1 = new Print(); // Print 클래스를 복제해서 Print 형태의 p1 변수에 넣는다.
      p1.delimiter = "----";
      p1.A();
      p1.A();
      p1.B();
      p1.B();

      Print p2 = new Print();
      p2.delimiter = "****";
      p2.A();
      p2.A();
      p2.B();
      p2.B();


      p1.A();
      p2.A();
      p1.A();
      p2.A();
    }
  }
  ```
- Print.java
  ```
  class Print {
    public String delimiter = ""; // 인스턴스에서 사용하기 위해 static 제거
 
    public void A() { // 인스턴스에서 사용하기 위해 static 제거
      System.out.println(delimiter);
      System.out.println("A");
      System.out.println("A");
    }
 
    public void B() { // 인스턴스에서 사용하기 위해 static 제거
      System.out.println(delimiter);
      System.out.println("B");
      System.out.println("B");
    }
  }
  ```
- static : 클래스의 소속이라는 뜻
- 인스턴스화 한 상태에서 사용하고 싶다면 static은 없어야 한다.
- static이 없는 상태? -> 인스턴스 소속

# static
- static 키워드 살펴보기
![image](https://user-images.githubusercontent.com/76677629/133211003-df5a7837-3c61-4b04-8261-25aaf70a9cf6.png)

## 소스코드
- StaticApp.java
```
Class Foo {
  public static String classVar = "I class var"; // 클래스 소속
  public String instanceVar = "I instance var"; // 인스턴스 소속
  public static void classMethod() {
    System.out.println(classVar); // Ok
//  System.out.println(instanceVar); // Error
  }
  public void instanceMethod() {
    System.out.println(classVar); // Ok
    System.out.println(instanceVar); // Ok
  }
}

public class StaticApp {
  
  public static void main(String[] args) {
    // 클래스를 통해서 클래스 변수, 인스턴스 변수에 접근이 가능할까?
    System.out.println(Foo.classVar); // ok
    // System.out.println(Foo.instanceVar); // error -> 인스턴스 변수는 인스턴스를 통해서 사용하도록 고안된 변수
    
    // 클래스를 통해서 클래스 메서드, 인스턴스 메서드에 접근이 가능할까?
    Foo.classMethod();
    // Foo.instanceMethod(); // error -> 인스턴스 메서드는 인스턴스 소속이기 때문에 클래스를 통해 접근하는 것이 금지!
    
    Foo f1 = new Foo();
    Foo f2 = new Foo();
//      
      System.out.println(f1.classVar); // I class var
      System.out.println(f1.instanceVar); // I instance var
//      
      f1.classVar = "changed by f1"; // classVar의 값이 모두 바뀐다.
      System.out.println(Foo.classVar); // changed by f1
      System.out.println(f2.classVar);  // changed by f1
//      
      f1.instanceVar = "changed by f1"; // f1의 instanceVar의 값만 바뀐다.
      System.out.println(f1.instanceVar); // changed by f1
      System.out.println(f2.instanceVar); // I instance var
  }
}
```
-instance f1 
  - class Foo를 원형으로 하기 때문에 멤버들을 복제해온다.
  - static String classVar
    - 클래스소속이기 때문에 f1에는 실제 값이 존재하지 않고 Foo라는 클래스를 가리키고 있을 뿐이다.
    - f1의 classVar 값을 바꾸면 Foo의 classVar 값이 바뀐다.
  - String instanceVar
    - 인스턴스가 생성될 때 같이 생성되면서 값이 존재한다면 f1에도 값까지 함께 존재한다. 
    - class Foo의 instanceVar와 연결되어있지 않기때문에 f1의 instanceVar의 값을 바꿔도 Foo의 instanceVar의 값은 바뀌지 않는다.
  - classMethod() 
    - Foo의 classMethod()를 참조한다. -> 연결되어있다.
  - instanceMethod()
    - Foo의 instanceMethod()를 복제한 것이다 -> 서로 독립적이다. 

- class Foo의 변수(classVar)를 바꾸면 모든 인스턴스의 변수(classVar)의 값이 바뀐다.
- f1의 classVar 변수의 값을 바꾸면 Foo의 classVar의 값도 바뀐다.

# 생성자와 this
- 인스턴스를 생성할 때 해야 할 초기화 작업을 정의하는 생성자에 대해 알아본다.

## 소스코드



















