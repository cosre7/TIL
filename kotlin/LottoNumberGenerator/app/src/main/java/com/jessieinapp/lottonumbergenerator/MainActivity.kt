package com.jessieinapp.lottonumbergenerator

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jessieinapp.lottonumbergenerator.ui.theme.LottoNumberGeneratorTheme
import kotlin.random.Random

fun main() {
//    // 변수
//    var name = "제시"
//    name = "하하하"
//    name = "호호호"
//
//    // 상수
//    val title = "로또앱만들기"
//
//    println(title)

//    val lottoNumberRange = (1..45)
//
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())
//    println(lottoNumberRange.random())

}

fun Color.Companion.random() : Color {
    // 배경색
    val red = Random.nextInt(256)
    val green = Random.nextInt(256)
    val blue = Random.nextInt(256)
    return Color(red, green, blue)
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LottoNumberGeneratorTheme {
                // 데이터
                // 상수
                val buttonTitle = "로또번호 생성"

                // 로또 번호 생성 횟수
                var generatedCount by remember { mutableStateOf(0) }

                // 로또 번호
                var number01 by remember { mutableStateOf(0) }
                var number02 by remember { mutableStateOf(0) }
                var number03 by remember { mutableStateOf(0) }
                var number04 by remember { mutableStateOf(0) }
                var number05 by remember { mutableStateOf(0) }
                var number06 by remember { mutableStateOf(0) }
                var number07 by remember { mutableStateOf(0) }

                // 로또 수 범위 (1 ~ 45)
                val lottoNumberRange = (1..45)

                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        // 로또 번호들
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(all = 10.dp)
                                .padding(vertical = 40.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            LottoBall(number01)
                            LottoBall(number02)
                            LottoBall(number03)
                            LottoBall(number04)
                            LottoBall(number05)
                            LottoBall(number06)
                            LottoBall(number07)
                        }

                        Spacer(modifier = Modifier.height(150.dp))

                        Text("생성된 횟수: $generatedCount", fontSize = 30.sp)

                        Spacer(modifier = Modifier.height(30.dp))

                        // 로또 번호 생성 버튼
                        Button(onClick = {
                            number01 = lottoNumberRange.random()
                            number02 = lottoNumberRange.random()
                            number03 = lottoNumberRange.random()
                            number04 = lottoNumberRange.random()
                            number05 = lottoNumberRange.random()
                            number06 = lottoNumberRange.random()
                            number07 = lottoNumberRange.random()

                            generatedCount += 1
                        }) {
                            Text(buttonTitle, fontSize = 30.sp)
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun LottoBall(number: Int) {
    Box(
        modifier = Modifier
            .size(50.dp) // 크기 50
            .clip(CircleShape) // 원 모양으로 자름
            .background(Color.random()), // 배경색
        contentAlignment = Alignment.Center // 가운데 정렬
    ){
        Text(
            number.toString(),
            fontSize = 20.sp,
            color = Color.White
        )
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
    LottoNumberGeneratorTheme {
        Greeting("Android")
    }
}