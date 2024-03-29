package com.jessieinapp.mytimer

import android.os.Bundle
import android.util.Log
import android.widget.Space
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.SnackbarResult
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jessieinapp.mytimer.ui.theme.MyTimerTheme
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyTimerTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    TimerScreen()
                }
            }
        }
    }
}

@Composable
fun TimerScreen() {

    // 데이터
    // 타이머 카운트
    var timerCount by remember { mutableStateOf(0) }

    // 타이머 활성화 여부
    var isActive by remember {
        mutableStateOf(false)
    }

    val snackbarHostState = remember {
        SnackbarHostState()
    }

    val coroutineScope = rememberCoroutineScope()

    LaunchedEffect(Unit) {
        while (true) {
            delay(1000L) // 1초
            if (isActive && timerCount > 0) timerCount--
            if (isActive && timerCount == 0) isActive = false
        }
    }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(timerCount.toString(),
            fontSize = 120.sp,
            modifier = Modifier.padding(vertical = 100.dp)
        )

        // 타이머 토글 버튼
        Button(onClick = {
            // 현재 스낵바가 출력되어있으면 리턴
            if (snackbarHostState.currentSnackbarData != null) {
                return@Button
            }

            if (timerCount == 0) {
                coroutineScope.launch {
                    snackbarHostState
                        .showSnackbar(
                            "시간을 먼저 설정해주세요!",
                        actionLabel = "닫기", true, SnackbarDuration.Short
                        ).let {
                            when(it) {
                                SnackbarResult.Dismissed -> Log.d("TAG", "스낵바 닫힘")
                                SnackbarResult.ActionPerformed -> Log.d("TAG", "스낵바 닫기 버튼 클릭")
                            }
                        }
                    return@launch
                }
                return@Button
            }

            // TODO:: 타이머 토글
            isActive = !isActive
        }) {
            Text(if (isActive) "종료" else "시작",
                fontSize = 30.sp,
                modifier = Modifier.padding(10.dp)
            )
        }

        AnimatedVisibility(visible = !isActive) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text("타이머 설정",
                    fontSize = 30.sp,
                    modifier = Modifier.padding(10.dp)
                )

                Row() {
                    Button(
                        modifier = Modifier.size(100.dp),
                        onClick = {
                            // TODO:: 시간 증가
                            timerCount++
                        }) {
                        Text("+",
                            fontSize = 30.sp,
                            modifier = Modifier.padding(10.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(30.dp))

                    Button(
                        modifier = Modifier.size(100.dp),
                        onClick = {
                            // TODO:: 시간 감소
                            if (timerCount != 0) timerCount--

                        }) {
                        Text("-",
                            fontSize = 30.sp,
                            modifier = Modifier.padding(10.dp)
                        )
                    }
                }
            }
        }

        Spacer(modifier = Modifier.weight(1f)) // 100%
        // 스낵바 위치
        SnackbarHost(hostState = snackbarHostState)

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
    MyTimerTheme {
        Greeting("Android")
    }
}