const paginator = require('../utils/paginator');
const {ObjectId} = require('mongodb');

// 글쓰기
async function writePost(collection, post) { // 글쓰기 함수
    // 생성일시와 조회수를 넣어줍니다
    post.hits = 0;
    // 날짜는 ISO 포맷으로 저장
    post.createdDt = new Date().toISOString();
    // 몽고디비에 post를 저장 후 결과 반환
    return await collection.insertOne(post);
}
// 글 목록
async function list(collection, page, search) {
    const perPage = 10;
    // title이 search와 부분일치하는지 확인
    const query = {title: new RegExp(search, 'i')};
    // limit는 10개만 가져온다는 의미 skip은 설정된 개수만큼 건너뛴다(skip)
    // 생성일 역순으로 정렬
    const cursor = collection.find(query, {limit: perPage, skip: (page - 1) * perPage}).sort({
        createdDt: -1,
    });
    // 검색어에 걸리는 게시물의 총합
    const totalCount = await collection.count(query);
    // 커서로 받아온 데이터를 리스트로 변경
    const posts = await cursor.toArray();
    // 페이지네이터 생성
    const paginatorObj = paginator({totalCount, page, perPage: perPage});
    return [posts, paginatorObj];
}
// 패스워드는 노출할 필요가 없으므로 결괏값으로 가져오지 않음
const projectionOption = {
    projection: {
        // 프로젝션(투영) 결괏값에서 일부만 가져올 때 사용
        password: 0,
        "comments.password" : 0,
    },
};
// 글 상세 
async function getDetailPost(collection, id) {
    // 몽고디비 Collection의 findOneAndUpdate() 함수를 사용
    // 게시글을 읽을 때마다 hits를 1 증가
    return await collection.findOneAndUpdate({_id: ObjectId(id)}, {$inc: {hits: 1}}, projectionOption);
}
// id와 password로 게시글 데이터 가져오기 
async function getPostByIdAndPassword(collection, {id, password}) {
    // findOne() 함수 사용
    return await collection.findOne({_id: ObjectId(id), password: password}, projectionOption);
}
// id로 데이터 불러오기
async function getPostById(collection, id) {
    return await collection.findOne({_id: ObjectId(id)}, projectionOption);
}
// 게시글 수정
async function updatePost(collection, id, post) {
    const toUpdatePost = {
        $set: {
            ...post,
        },
    };
    return await collection.updateOne({_id: ObjectId(id)}, toUpdatePost);
}


// require()로 파일을 임포트 시 외부로 노출하는 객체
module.exports = {
    writePost,
    list,
    getDetailPost,
    getPostById,
    getPostByIdAndPassword,
    updatePost,
};