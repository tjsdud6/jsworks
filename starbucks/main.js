//제목 애니메이션
let mainText = document.querySelector("h1")

window.addEventListener("scroll", function(){
    let value = this.window.scrollY; //마우스 스크롤의 Y좌표값 
    console.log(value);

    if(value > 300){  //slideOut - 들어가기
        mainText.style.animation = "slideOut 1s ease-out";
    }else{ //slideIn - 나타나기
        mainText.style.animation = "slideIn 1s ease-out";
    }
})