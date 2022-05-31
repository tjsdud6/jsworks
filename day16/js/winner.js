
    //응모자수
    let member = prompt("전체 응모자 수 : "); // 응모자 수
    let winner = new Array(5); // 당첨자 수 5명 배열 선언
    
    if(member == null){
        document.write("<p>입력이 취소되었습니다.</p>");
    }
    else{
        // 발표
        document.write("<p>전체 응모자수 : " + member + "명</p>");
        document.write("<p>당첨자 : ");
        
        // 추첨(저장)
        for (let i = 0; i < winner.length; i++) {
            let pickedOne = Math.floor(Math.random() * member) + 1;
            winner[i] = pickedOne;
            for (let j = 0; j < i; j++) { // j가 i보다 작다는 소리는 이전에 추첨한 값들이랑 비교하라는 소리
                if (winner[i] == winner[j]) { // 이전 인덱스들이랑 값이 하나라도 같으면
                    i--; // i를 다시 1을 줄여버림. 
                  // 그럼 첫번째 for문 돌때 다시 추첨해서 이전 인덱스에 넣고 다시 여기로 들어옴. 그걸 계속 반복.
                } // 그러다가 첫번째 for문 조건 winner.length랑 같을때까지 i가 증가되게 되면 for문 전체 종료
            }
        }
    
        // 출력
        for(var i = 0; i < winner.length; i++) {
            document.write(winner[i] + "번, ");
        }
        document.write("</p>");
    }

    /* 
        예) 응모자 수 20명
        i = 0, winner[0]=4, j = 0, false
        i = 1, winner[1]=14, j = 0, winner[0]=4, j = 1, false
        i = 2, winner[2]=11, j = 0, winner[0]=4, j = 1, winner[1]=14, j = 2 false
        i = 3, winner[2]=11, j = 0, winner[0]=4, j = 1, winner[1]=14, j = 2, winner[2]=11
                i--
        i = 4, winner[3] = 5, j = 0, winner[0]=4, j = 1, winner[1]=14, j = 2, winner[2]=11
    */

    //출력
    for(var i = 0; i < winner.length; i++){
        document.write(winner[i] + "번");
    }


    document.write("</p>")