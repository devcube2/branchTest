let 게시물목록 = [
    '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3',
    '두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2',
    '세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0'
]

// [3] 출력함수 , 실행조건 : js열렸을때 최초 1번 실행 , 등록/삭제/수정 처리 성공시 실행
출력함수() // <----- JS가 실행될때 최초 1번만 실행
function 출력함수(){
    // (1) 어디에 , table > tbody
    let tbody = document.querySelector('table > tbody')
    // (2) 무엇을 , 배열 요소들을
    let html = ''
    for (let index = 0; index < 게시물목록.length; index++) {
        let board = 게시물목록[index]
        let info = board.split(',') // csv 형식은 ,(쉼표)로 구분했기 때문에 ,(쉼표) 다시 분해한다.
        // 각 정보들을 HTML 과 연동해서 작성하기
        html += `
            <tr>
                <td> ${ info[3] } </td>
                <td> <a href="#" onclick="상세출력함수(${index})">${ info[0] }</a> </td>
                <td> ${ info[4] } </td>
            </tr>
        `        
    }
    // (3) 출력 , .innerHTML
    tbody.innerHTML = html
}