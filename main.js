//랜덤번호 지정
//유저가 번호를 입력하고 go를 누름
//만약에 맞추면 맞췄습니다!.
// 랜덤번호 < 유저번호 down!!
// 랜덤번호 > 유저번호 up!!
// reset누르면 게임 리셋
// 5번의 기회를 다쓰면 게임 끝 (더이상 추측불가, 버튼disable)
// 1~100 사이 숫자가 아니면 1~100입력하라고 알려준다(기회 안깎음)
// 이미 입력한 숫자를 입력하면 알려주고 기회 안깍음


let computerNum = 0
let playbutton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area")
let resetbutton = document.getElementById("reset-button")
let chance = 5
let gameOver = false
let restchance = document.getElementById("rest-chance")
let history =[]


resetbutton.addEventListener("click",reset);
playbutton.addEventListener("click", play);
userInput.addEventListener("focus",function(){userInput.value=""});

function RandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play(){


    let userValue = userInput.value;

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력하세요"
        return;

    }


    
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해 주세요"
        return;

    }

    


    chance --;
    history.push(userValue);
    console.log("chance",chance)
    restchance.textContent = `남은 찬스 :${chance}번`

    
   
    if(userValue<computerNum){
        resultArea.textContent = "up"

      

    }else if(userValue>computerNum){
        resultArea.textContent = "down"
       

    }else {
        resultArea.textContent = "맞춤"
        playbutton.disabled = true;

    }

    if(chance<1){
        if(userValue=computerNum){
            resultArea.textContent = "맞춤"
        }else{gameOver=true
            restchance.textContent = `실패 정답은 ${computerNum}이었습니다.`}
        
    }
    if(gameOver==true){
        playbutton.disabled = true;
        
    }
}


function reset(){
    userInput.value =""
    RandomNum()

    resultArea.textContent = "결과가 나온다"

    chance= 5;
    restchance.textContent = "남은 찬스 :"
    playbutton.disabled = false;
    history.length=0;
    gameOver=false;
}
RandomNum()
