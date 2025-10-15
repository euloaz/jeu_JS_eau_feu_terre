const choices = ["\u{1F525}", "\u{1F4A7}", "\u{1F331}"]
function computerChoice() {
    let random = Math.floor(Math.random() * choices.length);
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
function userChoice(choice) {
    return choice;
}
feu.addEventListener("click", () => {
    let player = userChoice("\u{1F525}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player, pc);
    userScore.textContent = uScore;
    computerScore.textContent = pcScore;
    checkScore()
})
eau.addEventListener("click", () => {
    let player = userChoice("\u{1F4A7}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player, pc);
    userScore.textContent = uScore;
    computerScore.textContent = pcScore;
    checkScore()
})
terre.addEventListener("click", () => {
    let player = userChoice("\u{1F331}");
    let pc = computerChoice();

    userResult.textContent = player;
    computerResult.textContent = pc;
    message.textContent = playGame(player, pc);
    userScore.textContent = uScore;
    computerScore.textContent = pcScore;
    checkScore()
})
function playGame(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Egalité';
    }
    else if (userChoice === "\u{1F525}" && computerChoice === "\u{1F331}") {
        uScore++;
        return 'Point pour toi';
    }
    else if (userChoice === "\u{1F4A7}" && computerChoice === "\u{1F525}") {
        uScore++;
        return 'Point pour toi';
    }
    else if (userChoice === "\u{1F331}" && computerChoice === "\u{1F4A7}") {
        uScore++;
        return 'Point pour toi';
    }
    else {
        pcScore++;
        return 'Point pour l\'ordinateur';
    }
}
const modal = document.getElementById('modal');
const titleModal = document.querySelector('#modal .box h2');
const commentModal = document.querySelector('#modal .box p');
const emojiModal = document.querySelector('#modal .box span')

function checkScore() {
    if (uScore == 10) {
        modal.style.display = 'initial';
        titleModal.textContent = 'Bravo ! Tu as gagné!';
        commentModal.textContent = 'T\'es peut-être pas si incompétent.e que ça finalement';
        emojiModal.textContent = '\u{1F3C6}';
    } else if (pcScore == 10) {
        modal.style.display = 'initial';
        titleModal.textContent = 'PERDU BOLOSS';
        commentModal.textContent = 'Je ne m\'attendais à rien, mais je suis quand même déçu.';
        emojiModal.textContent = '\u{1F9A7}';
    }
}
