let classfication = prompt("아동, 청소년, 성인 중 선택 입력")

switch(classfication){
    case"아동" : 
        classfication += " : 입장료 무료";
        break
    case"청소년" : 
        classfication += " : 입장료 2000원";
        break
    case"성인" : 
        classfication += " : 입장료 5000원";
        break
    default :classfication = "입력값을 다시 확인 하세요";
}
  document.write(classfication);