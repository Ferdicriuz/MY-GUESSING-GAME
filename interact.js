"use strict"

let number = Math.trunc(Math.random() * 20 + 1);
const revealNum = document.querySelector(".number");

let score = 20;
let highScore = 0;

function displayMessage(content){
    document.querySelector(".message").textContent = content;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);

    if (!guess){
    displayMessage("⛔ NO input")
    } else if (guess === number){
        revealNum.textContent = number;
        displayMessage("🎊 Correct Number");
        document.querySelector("body").style.background = "rgb(167, 40, 131)";

        // high score
        if (score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }else if ( guess !== number){
        if(score > 1){
        displayMessage(guess > number ? "😒Too high!" :
            "Too Low 🥱");
        score--;
        document.querySelector(".score").textContent = score;
    }else{
        displayMessage("Game Over 💀💀💀");
        document.querySelector(".score").textContent = 0;
    };
}
});

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...🙂");
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "??";
    document.querySelector("body").style.backgroundColor = " #166ac3";
})