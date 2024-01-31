const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars.engine()); // 1) 템플릿 엔진으로 핸들바 등록
app.set('view engine', 'handlebars'); // 2) 웹 페이지 로드 시 사용할 템플릿 엔진 설정
app.set('views', __dirname + '/views'); // 3) 뷰 디렉터리를 view로 설정

// 4) 라우터 설정
app.get('/', (req, res) => {
    res.render('home', {title: '테스트 게시판'});
});
app.get('/write', (req, res) => {
    res.render('write', {title: '테스트 게시판'});
});
app.get('/detail/:id', async (req, res) => {
    res.render('detail', {
        title: "테스트 게시판",
    });
});

app.listen(3000);