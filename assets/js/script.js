const choices = ["\u{1F525}","\u{1F4A7}","\u{1F331}"]
function computerChoice(){
    let random = Math.floor(Math.random()* choices.length);
    return choices[random];
}

const feu = document.querySelector('#feu');
const eau = document.querySelector('#eau');
const terre = document.querySelector('#terre');

const computerScore = document.querySelector('.arena .computer-side .score');
const userScore = document.querySelector('.arena .player-side  .score');

const userResult = document.querySelector('.player-side .result');
const computerResult = document.querySelector('.computer-side .result');
const message = document.querySelector('.message');

let uScore = 0;
let pcScore = 0;
function userChoice(choice){
    return choice;
}
feu.addEventListener("click", () => {
    let player = userChoice("\u{1F525}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
    userScore.textContent = uScore;
    computerScore.textContent = pcScore;
})
eau.addEventListener("click", () =>{
    let player = userChoice("\u{1F4A7}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
})
terre.addEventListener("click", () =>{
    let player = userChoice("\u{1F331}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player,pc);
})
function playGame(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'Egalité';
    }
    else if (userChoice === "\u{1F525}" && computerChoice === "\u{1F331}"){
        uScore++;
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "\u{1F4A7}" && computerChoice === "\u{1F525}"){
        uScore++;
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "\u{1F331}" && computerChoice === "\u{1F4A7}"){
        uScore++;
         return 'Bravo ! Tu as gagné!';
    }
    else{
        pcScore++;
        return 'PERDU BOLOSS';
    }
}
