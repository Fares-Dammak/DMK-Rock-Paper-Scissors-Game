let userScoreCompteur = 0;
let DMKScoreCompteur = 0;

const userScore = document.getElementById("user-score");
const DMKScore = document.getElementById("DMK-score");

const scoreBoard_div = document.querySelector(".scoreBoard");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissor_div = document.getElementById("S");

function getDMKChoice(){
    const choices =['R','P','S'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convert(letter){
    if(letter === "R") return "Rock";
    if(letter === "P") return "Paper";
    return "Scissors";
}

function win(userChoice,DMKChoice){
    userScoreCompteur++;
    userScore.innerHTML=userScoreCompteur;
    DMKScore.innerHTML=DMKScoreCompteur;
    result_p.innerHTML= convert(userChoice) + " Beats " + convert(DMKChoice) + ". You WIN !!";
    document.getElementById(userChoice).classList.add('greenWin');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greenWin');},1000);

}

function lose(userChoice,DMKChoice){
    DMKScoreCompteur++;
    userScore.innerHTML=userScoreCompteur;
    DMKScore.innerHTML=DMKScoreCompteur;
    result_p.innerHTML= convert(userChoice) + " Loses to " + convert(DMKChoice) + ". You LOST :( ";
    document.getElementById(userChoice).classList.add('redLost');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('redLost');},1000);
}

function draw(userChoice,DMKChoice){
    userScore.innerHTML=userScoreCompteur;
    DMKScore.innerHTML=DMKScoreCompteur;
    result_p.innerHTML= convert(userChoice) + " equal to " + convert(DMKChoice) + ". It's a DRAW !!"
    document.getElementById(userChoice).classList.add('orangeDraw');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('orangeDraw');},1000);

}

function game(userChoice){
    const DMKChoice = getDMKChoice();
    switch (userChoice + DMKChoice){
        case "RS":
        case "PR":
        case "SP":
            win(userChoice,DMKChoice);
            console.log("win");
            break;
        case "SR":
        case "RP":
        case "PS":
            lose(userChoice,DMKChoice);
            console.log("lost");
            break;
        case "SS":
        case "RR":
        case "PP":
            draw(userChoice,DMKChoice);
            console.log("draw");
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("R");
    })

    paper_div.addEventListener('click',function(){
        game("P");
    })

    scissor_div.addEventListener('click',function(){
        game("S");
    })

}

main();
