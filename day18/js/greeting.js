//인사말 바꾸기 -  2초 간격으로 설정

let message = ["안녕하세요.", "감사합니다.", "오늘도 좋은 하루!"];

let msgIdx = 0;

myGreeting();

function myGreeting(){
    let greeting = document.getElementById("demo");
    greeting.innerHTML = message[msgIdx];
    msgIdx++;

    if(msgIdx == message.length)
        msgIdx = 0;

    setTimeout(myGreeting, 2000); //콜백 함수 (자기가 자기 안에 들어가있는?)
    //함수의 매개변수가 함수인 경우
} 