const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막음 (ex. submit 이벤트 발생 시 새로고침)
    const username = loginInput.value;
    console.log(username);

}

loginForm.addEventListener('submit', onLoginSubmit);