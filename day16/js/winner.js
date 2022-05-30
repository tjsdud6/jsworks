
    //응모자수
    let member = prompt("전체 응모자 수 : ")
    let winner = new Array(5);

    if(member == null){
        document.write("입력이 취소되었습니다.")
    }

    //발표
    document.write("<p>전체 응모자수 : " + member + "명</p>")
    document.write("<p>당첨자 : " )

    //추첨(저장)
    for(var i = 0; i < winner.length; i++){
        let pickdeOne = Math.floor(Math.random()*member) + 1;
        winner[i] = pickdeOne;
        for(let j = 0; j < i ; j++){
            if(winner[j] == winner[i]){ //이전 인덱스와 값이 같으면
                i--; //인덱스 1감소
                break;
            }
        }
    }

    //출력
    for(var i = 0; i < winner.length; i++){
        document.write(winner[i] + "번");
    }


    document.write("</p>")