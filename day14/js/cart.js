//장바구니 배열 사용하기
let cart = new Array(5);
// console.log(cart.length + "개");

//입력
cart = ["생수", "라면", "커피", "계란", "쌀"]

/* 
위에꺼랑 똑같은 방식이라고 함, 위의 형태를 더 많이 사용
let cart = new Array("생수", "라면", "커피", "계란");
*/

//"커피"를 출력하세요
document.write(cart[2] + "<br>");

// "계란"을 "사과" 로 변경하세요
cart[3] = "사과";

//"라면"을 삭제하세요
delete cart[1];

//목록 전체를 출력하세요
for(i=0; i < cart.length; i++){
 document.write(cart[i] + " ");
}

//객체(object) 출력
console.log(cart);

