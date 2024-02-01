const paginator = require('../utils/paginator');

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

// require()로 파일을 임포트 시 외부로 노출하는 객체
module.exports = {
    writePost,
    list,
};