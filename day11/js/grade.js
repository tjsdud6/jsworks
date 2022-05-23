/* 학점 계산 프로그램 - 구분(점수) 
A - 90~100점 
B - 80~89점 
C - 70~79점 
D - 60~69점 
F - 60점 미만
*/

var score = Number(prompt("당신의 점수를 입력하세요"))
var grade = "";

if(score < 60 ){
    grade = "F";
}else if(score < 70){
    grade = "D";
}
else if(score < 80){
    grade = "C";
}
else if(score < 89){
    grade = "B";
}
else{
    grade = "A";
}
document.write("학점은 <span class='accent'>" + grade + "</span> 입니다")