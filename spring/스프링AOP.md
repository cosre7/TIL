## Advice
### 1. Before Advice
```
대상 객체의 메서드 실행 이전에 공통 기능을 적용하고 싶을 때 사용되는 Advice
```
- Before Advice에서 예외를 발생시키면 대상 객체의 메서드는 호출되지 않는다.
- 이를 이용해서 메서드 실행 전 접근권한을 검사해서 접근 권한이 없는 경우 예외를 발생시키는 기능 구현에 적합하다.

### 1.1. 클래스 작성
```
@Aspect
public class LoggingAspect {
  
  @Before("execution(public * medvirus.spring.chap05..*(..))") // pointcut 표현식을 사용한 예
  public void before() {
    System.out.println("[LA] 메서드 실행 전 전처리 수행");
  }
}
```
  - `madvirus.spring.chap05` 패키지 또는 하위 패키지에 있는 모든 `public` 메서드가 호출되기 이전에 호출된다.
  - `@Before` 애노테이션 값으로는 AspectJ의 Pointcut 표현식이나 `@Pointcut` 애노테이션에 적용된 메서드 이름이 올 수 있다.
### 2. After Returning Advice
```
대상 객체의 메서드가 정상적으로 실행된 후 공통 기능을 적용하고 싶을 때 사용되는 Advice
```

### 2.1. 클래스 작성
```
// 기본
@Aspect
public class LoggingAspect {
  
  @AfterReturning("madvirus.spring.chap05.aop.annot.PublicPintcut.publicMethod()")
  pulbic void afterReturning() {
    System.out.println("[LA] 메서드 실행 후 후처리 수행");
  }
}

// Acvice 구현 메서드 내에서 Advice 대상 객체가 리턴한 값을 사용하고 싶은 경우
@AfterReturning(
  pointcut = "medvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  returning = "ret")
public void afterReturning(Object ret) {
  System.out.println("[LA] 메서드 실행 후 후처리 수행, 리턴값=" + ret);
}

// 리턴된 객체가 특정 타입인 경우에 한해서 메서드를 실행하고 싶은 경우
@AfterReturning(
  pointcut = "medvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  returning = "ret")
public void afterReturning(Article ret) {
  // 대상 객체의 메서드가 정상적으로 실행된 이후에 적용할 기능 구현
  ..
}

// 대상 객체 및 호출되는 메서드에 대한 정보나 전달되는 파라미터에 대한 정보가 필요한 경우
@AfterReturning(
  pointcut = "medvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  returning = "ret")
public void afterReturning(JoinPoint joinPoint, Object ret) {
  // 대상 객체의 메서드가 정상적으로 실행된 이후에 적용할 기능 구현
  ..
}
```

### 3. After Throwing Advice
```
대상 객체의 메서드가 예외를 발생시킨 경우에 적용되는 Advice
```

### 3.1. 클래스 작성
```
// 기본
@Aspect
public class LoggingAspect {
  
  @AfterThrowing("madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()")
  public void afterThrowing() {
    System.out.println("[LA] 메서드 실행 중 예외 발생");
  }
}

// Advice 구현 메서드 내에서 Advice 대상 메서드가 발생시킨 예외 객체에 접근하려는 경우
@AfterThrowing(
  pointcut = "madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  throwing = "ex")
public void afterThrowing(Throwable ex) {
  System.out.println("[LA] 메서드 실행 중 예외 발생, 예외=" + ex.getMessage());
}

// 특정 타입의 예외에 대해서만 처리하고 싶은 경우
// ex) ArticleNotFoundException인 경우
@AfterThrowing(
  pointcut = "madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  throwing = "ex")
public void afterThrowing(ArticleNotFoundException ex) {
  // 대상 객체의 메서드가 예외를 발생시킨 경우에 적용할 기능 구현
  ..
}

// 대상 객체 및 호출되는 메서드에 대한 정보나 전달되는 파라미터에 대한 정보가 필요한 경우
@AfterThrowing(
  pointcut = "madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
  throwing = "ex")
public void afterThrowing(JointPoint joinPoint, Throwable ex) {
  // 대상 객체의 메서드가 예외를 발생시킨 경우에 적용할 기능 구현
  ..
}
```

### 4. After Advice
```
대상 객체의 메서드가 정상적으로 실행되었는지, 예외를 발생시켰는지 여부에 상관없이 메서드 실행 종료 후 적용되는 Advice
```
- `try-catch-finally` 블록에서 `finally` 블록과 비슷한 기능을 한다.

### 4.1. 클래스 작성
```
// 기본
@Aspect
public class LoggingAspect {
  
  @After("madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()")
  public void afterFinally() {
    System.out.println("[LA] 메서드 실행 완료");
  }
}

// 대상 객체 및 호출되는 메서드에 대한 정보나 전달되는 파라미터에 대한 정보가 필요한 경우
@After("madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()")
public void afterFinally(JoinPoint joinPoint) {
  ..
}
```

### 5. Around Advice
```
Before, After Returning, After Throwing, After Advice를 모두 구현할 수 있는 Advice
```
- ProceedingJoinPoint가 반드시 첫 번째 파라미터로 지정되어야 한다. 아니면 예외가 발생된다.
- ProceedingJoinPoint는 JoinPoint 인터페이스를 상속받았기 때문에 대상 객체, 메서드 및 전달되는 파라미터에 대한 정보를 구할 수 있다.
- ProceedingJoinPoint 인터페이스는 프록시 대상 객체를 호출할 수 있는 proceed() 메서드를 제공하고 있다.

### 5.1. 클래스 작성
```
@Aspect
public class ArticleCacheAspect {
  
  private Map<Integer, Article> cache = new HashMap<Integer, Article>();
  
  @Around("execution(public * *..ReadArticleService.*(..))")
  public Article cache(ProceedingJoinPoint joinPoint) throws Throwable {
    Integer id = (Integer) joinPoint.getArgs()[0];
    Article article = cache.get(id);
    if (article != null) {
      System.out.println("[ACA] 캐시에서 Article[" + id + "] 구함");
      return article;
    }
    Article ret = (Article) joinPoint.proceed();
    if (ret != null) {
      cache.put(id, ret);
      System.out.println("[ACA] 캐시에 Article[" + id + "] 추가함");
    }
    return ret;
  }
}
```
  - `ProceedingJoingPoint`의 `proceed()` 메서드를 호출하면 프록시 대상 객체의 실제 메서드를 호출한다.
  - 따라서 `ProceedingJoinPoint.proceed()` 메서드를 호출하기 전과 후에 필요한 작업을 수행할 수 있다.

## Pointcut
### @Pointcut 애노테이션을 이용한 Pointcut 설정
```
@Aspect
public class ProfilingAspect {
  
  @Pointcut("execution(public * madvirus.spring.chap05.board..*(..))") // Pointcut 표현식을 값으로 가지는 @Pointcut 애노테이션
  private void profileTarget() {}
  
  @Around("profileTarget()")
  public Object trace(ProceedingJoinPoint joinPoint) throws Throwable {
    ..
  }
}
```
- `@Pointcut` 애노테이션이 적용된 메서드는 리턴 타입이 void 여야만 한다.
- `@Pointcut` 애노테이션에 적용된 메서드는 메서드 몸체에 코드를 갖지 않는다.
- `@Pointcut` 애노테이션을 이용해 Pointcut을 정의하면 Advice 관련 애노테이션에 `@Pointcut` 애노테이션이 적용된 메서드의 이름을 이용해서 Pointcut을 참조할 수 있다.
  - 같은 클래스에 위치한 `@Pointcut` 메서드는 `메서드 이름`만 입력
  - 같은 패키지에 위치한 `@Pointcut` 메서드는 `클래스단순이름.메서드이름`을 입력
  - 다른 패키지에 위치한 `@Pointcut` 메서드는 `완전한클래스이름.메서드이름`을 입력
  ```
  @Aspect
  public class LoggingAspect {
    
    // 클래스의 단순한 이름을 사용
    @Before("PublicPointcut.publicMethod()")
    public void before() {
      System.out.println("[LA] 메서드 실행 전 전처리 수행");
    }
    
    // 클래스의 완전한 이름을 사용
    @AfterReturning(
      pointcut = "madvirus.spring.chap05.aop.annot.PublicPointcut.publicMethod()",
      returning = "ret")
    public void afterReturning(Object ret) {
      System.out.println("[LA] 메서드 실행 후 후처리 수행, 리턴값=" + ret);
    }
  }
  ```
  
### private으로 설정된 @Pointcut 메서드
```
public class CommonPointcut {
  
  @Pointct("execution(public * *(..))")
  private void publicMethod() {}
}

* 다른 클래스 *
@Aspect
public class LoggingAspect {
  
  // publicMethod()는 private 이므로 접근할 수 없다는 예외 발생
  @Before("CommonPointcut.publicMethod()")
  public void before() {
    ..
  }
}
```

## JoinPoint
- Around Advice를 제외한 나머지 Advice 타입을 구현한 메서드에서는 선택사항
- JoinPoint를 파라미터로 전달받는 경우 반드시 첫 번째 파라미터로 지정
```
// JoinPoint이 첫 번째 파라미터가 아닌 경우 예외 발생
public void afterLogging(Object retVal, JoinPoint joinPoint) {
  ..
}
```

### JoinPoint 인터페이스가 제공하는 호출되는 대상 객체, 메서드, 전달되는 파라미터 목록에 접근할 수 있는 메서드
- `Signature getSignature()` - 호출되는 메서드에 대한 정보를 구한다.
- `Object getTarget()` - 대상 객체를 구한다.
- `Object[] getArgs()` - 파라미터 목록을 구한다.

### org.aspectj.lang.Signature 인터페이스가 호출되는 매서드와 관련된 정보를 제공하는 메서드
- `String getName()` - 메서드의 이름을 구한다.
- `String toLongString()` - 메서드를 완전하게 표현한 문장을 구한다. (메서드의 리턴 타입, 파라미터 타입 모두 표시)
- `String toShortString()` - 메서드를 축약해서 표현한 문장을 구한다. (기본 구현은 메서드의 이름만)

