import http from 'k6/http';

export const options = {
    vus: 100, // 가상 유저 설정
    duration: '10s' // 몇 초 동안 테스트를 진행할지 선택
};

export default function() {
    http.get('http://localhost:8000'); // 테스트에 사용할 함수
}

// -> 100명이 10초 동안 http://localhost:8000에 동시에 계속해서 요청을 보낸다는 의미