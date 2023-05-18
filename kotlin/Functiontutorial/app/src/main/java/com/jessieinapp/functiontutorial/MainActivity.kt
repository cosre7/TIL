package com.jessieinapp.functiontutorial

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.jessieinapp.functiontutorial.ui.theme.FunctiontutorialTheme
import java.util.Timer
import kotlin.concurrent.schedule

// 함수를 정의한다, 선언한다
fun sayHello(name: String = "이름없음") : Unit {
    println("안녕? 난 ${name}야")
    println("너는 누구니?")

    // 생략 상태
    return Unit
}

fun isNumberValid(number: Int) : Boolean {
    return number < 300 || number %2 == 0
}

fun prepareRamen(ramenKind: String) {
    println("주방에 간다")
    println("냄비를 선반에서 꺼낸다")
    println("냄비에 물 500ml를 담는다")
    println("선반에서 $ramenKind 라면 1봉지를 꺼낸다")
    println("냄비에 불을 올려서 물을 끓인다")
}

// 라면을 끓이는 함수
fun cookRamen(ramenKind: String = "일반") {
    prepareRamen(ramenKind)

    val randomNumber = getRandomNumber(min = 400)

    if (isNumberValid(randomNumber)) {
        println("라면을 끓이는 데 실패 하였다.")
        return
    }

    Timer().schedule(3000) {
        println("라면이 맛있게 익었다")
    }

    println("하하하")
}

// 무작위 수를 말하는 함수
//fun getRandomNumber(min: Int = 1, max: Int = 999) : Int {
//    // 반환 방법1
////    val randomNumber = (min..max).random()
////    return randomNumber
//
//    // 반환 방법2
////    return (min..max).random()
//}
// 반환 방법3
//fun getRandomNumber(min: Int = 1, max: Int = 999) : Int = (min..max).random()

// 반환 방법 4
fun getRandomNumber(min: Int = 1, max: Int = 999) = (min..max).random()

// 프로그램이 실행되는 메인함수
fun main() {
    // sayHello 라는 함수를 호출, 즉 불렀다.
    sayHello() // name = "이름없음"
    sayHello("정대리") // name = "정대리"
    cookRamen()
//    cookRamen("짜장")
//    sayRandomNumber() // min = 1, max = 999
//    sayRandomNumber(max = 10) // min = 1, max = 10
//    sayRandomNumber(min = 999) // min = 999, max = 999
//    val randomNumber = getRandomNumber()
//    println("main() - randomNumber: $randomNumber")
//    println("main() - randomNumber: ${getRandomNumber()}")
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            FunctiontutorialTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    FunctiontutorialTheme {
        Greeting("Android")
    }
}