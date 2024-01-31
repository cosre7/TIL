const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

// 몽고디비 연결 함수
const mongodbConnection = require("./configs/mongodb-connection");

app.engine(
    'handlebars', 
    handlebars.create({ // 핸들바 생성 및 엔진 반환 
        helpers: require('./configs/hanclebars-helpers'),
    }).engine,
); 
app.set('view engine', 'handlebars'); // 웹 페이지 로드 시 사용할 템플릿 엔진 설정
app.set('views', __dirname + '/views'); // 뷰 디렉터리를 view로 설정

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

let collection;
app.listen(3000, async() => {
    console.log('Server started');
    // mongodbConnection()의 결과는 mongoClient
    const mongoClient = await mongodbConnection();
    // mongoClient.db()로 디비 선택 collection()으로 컬렉션 선택 후 collection에 할당
    collection = mongoClient.db().collection('post');
    console.log('MongoDB connected');
});