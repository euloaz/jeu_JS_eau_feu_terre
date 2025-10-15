const choices = ["Feu","Eau","Terre"]
function computerChoice(){
    let random = Math.floor(Math.random()* choices.length);
    return choices[random];
}

const feu = document.querySelector('#feu');
const eau = document.querySelector('#eau');
const terre = document.querySelector('#terre');

function userChoice(choice){
    return choice;
}
feu.addEventListener("click", () => {
    playGame(userChoice('Feu'),computerChoice())
})
eau.addEventListener("click", () =>{
   playGame(userChoice('Eau'),computerChoice())
})
terre.addEventListener("click", () =>{
    playGame(userChoice('Terre'),computerChoice())
})

function playGame(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'Egalité';
    }
    else if (userChoice === "Feu" && computerChoice === "Terre"){
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "Eau" && computerChoice === "Feu"){
        return 'Bravo ! Tu as gagné!';
    }
    else if (userChoice === "Terre" && computerChoice === "Eau"){
         return 'Bravo ! Tu as gagné!';
    }
    else{
        return 'PERDU BOLOSS';
    }

}

