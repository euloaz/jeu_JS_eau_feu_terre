const choices = ["Feu","Eau","Terre"]
function computerChoice(){
    let random = Math.floor(Math.random()* choices.length);
    return choices[random];
}

const feu = document.querySelector('#feu');
const eau = document.querySelector('#eau');
const terre = document.querySelector('#terre');

const computerScore = document.querySelector('.computer-side .content .score span');
const userScore = document.querySelector('.player-side .content .score span');

const userResult = document.querySelector('.player-side .content .result');
const computerResult = document.querySelector('.computer-side .content .result');
const message = document.querySelector('.message');

let uScore = 0;
let pcScore = 0;
function userChoice(choice){
    return choice;
}
feu.addEventListener("click", () => {
    let player = userChoice('Feu');
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
    userScore.textContent = uScore;
    computerScore.textContent = pcScore;
})
eau.addEventListener("click", () =>{
    let player = userChoice('Eau');
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
})
terre.addEventListener("click", () =>{
    let player = userChoice('Terre');
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
})

function playGame(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'Egalité';
    }
    else if (userChoice === "Feu" && computerChoice === "Terre"){
        uScore++;
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "Eau" && computerChoice === "Feu"){
        uScore++;
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "Terre" && computerChoice === "Eau"){
        uScore++;
         return 'Bravo ! Tu as gagné!';
    }
    else{
        pcScore++;
        return 'PERDU BOLOSS';
    }
}

