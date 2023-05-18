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
fun sayHello() {
    println("안녕? 난 정대리야")
    println("너는 누구니?")
}

// 라면을 끓이는 함수
fun cookRamen() {
    println("주방에 간다")
    println("냄비를 선반에서 꺼낸다")
    println("냄비에 물 500ml를 담는다")
    println("선반에서 라면 1봉지를 꺼낸다")
    println("냄비에 불을 올려서 물을 끓인다")

    Timer().schedule(3000) {
        println("라면이 맛있게 익었다")
    }

    println("하하하")
}

// 무작위 수를 말하는 함수
fun sayRandomNumber() {
    val randomNumber = (1..999).random()
    println("무작위 수는 $randomNumber 입니다!")
}

// 프로그램이 실행되는 메인함수
fun main() {
    // sayHello 라는 함수를 호출, 즉 불렀다.
    sayHello()
    cookRamen()
    sayRandomNumber()
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