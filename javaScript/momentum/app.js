const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막음 (ex. submit 이벤트 발생 시 새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    // greeting.innerText = 'Hello ' + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener('submit', onLoginSubmit);