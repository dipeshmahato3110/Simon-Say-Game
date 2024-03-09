let start = true;
let level = 0;
let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");
let maxscr = document.querySelector(".max");
let color = ["green", "red", "yellow", "purple"];
let gameSeq = [];
let mySeq = []
let maxScore = 0;
// gameSeq.push("blue");
// console.log(gameSeq);

document.addEventListener("click", function() {
    if (start == true) {
        start = false;
        levelUp();
    }
});

function levelUp() {
    level++;

    // console.log(level);
    h2.innerText = `Level ${level}`
    let rIdx = Math.floor(Math.random() * 3);
    let clr = color[rIdx];
    gameSeq.push(clr);
    console.log(gameSeq);
    flashGame(clr)

}


function flashGame(clr) {
    // console.log(clr);
    document.querySelector(`.${clr}`).classList.add("flash")
    setTimeout(function() {
        document.querySelector(`.${clr}`).classList.remove("flash");
    }, 300);
}

function flashUser(clr) {
    document.querySelector(`.${clr}`).classList.add("user")
    setTimeout(function() {
        document.querySelector(`.${clr}`).classList.remove("user");
    }, 200);
}


for (btn of btns) {
    btn.addEventListener("click", addUserSeq);
}

function addUserSeq() {
    let clr = this.getAttribute("id");
    mySeq.push(clr);
    flashUser(clr);
    check();
}

function check() {

    let idx = mySeq.length - 1;
    // console.log(mySeq)
    if (mySeq[idx] == gameSeq[idx] && idx == gameSeq.length - 1) {
        mySeq = [];
        levelUp();
    } else if (mySeq[idx] != gameSeq[idx]) {

        h2.innerHTML = `GAME OVER! <br> Your score is <b> ${gameSeq.length} </b> `;
        maxScore = Math.max(maxScore, gameSeq.length);
        maxscr.innerText = `MAX SCORE IS ${maxScore}`;
        // document.querySelector("body").style.backgroundColor="red";
        // setTimeout(function () {
        //     document.querySelector("body").style.backgroundColor="white";
        // }, 150);

        reset();
    }
}

function reset() {
    
    gameSeq = [];
    mySeq = [];
    start = true;
    level = 0;
    // h2.innerText
}