// 대문자 26자를 배열에 저장


let alphabet = new Array(26); // 배열에 26개의 공간을 생성
let ch = 'A';  //코드값 65 (로 약속 되어있다고 함)
ch = ch.charCodeAt(0);  // 코드값 65

// console.log(ch)                      // 결과값 'A'
// console.log(ch.charCodeAt(0));          // 결과값 '65'


//저장
for(var i=0; i < alphabet.length; i++){
    alphabet[i] = ch; // 0번 인덱스에 65가 저장 됨
    ch++;
}


//출력
for(var i=0; i < alphabet.length; i++){
    console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]))
}