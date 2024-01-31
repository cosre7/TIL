const {MongoClient} = require('mongodb');

// 몽고디비 연결 주소
const uri = "mongodb+srv://cosre7:Ohpark7878@cluster0.ncufuge.mongodb.net/board";

// 몽고디비 커넥션 연결 함수 반환
module.exports = function(callback) {
    return MongoClient.connect(uri, callback);
}