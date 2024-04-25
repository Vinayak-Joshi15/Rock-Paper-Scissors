
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let score = 0;
let compScore = 0;


const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#comp");

const mid = document.querySelector("#mid");
const final = document.querySelector("#final");
//const button = document.querySelector("button");


let choice = "";

function Calculate(){
    let comp = Math.floor(Math.random()*3);
    return comp;
}

function playRound(choice) {

        let c = choice;
        let pc = Calculate();
        
        if(pc == 0){
            if(c == "paper"){
                mid.textContent = "Paper beats rock!!";
                score++;
            }
            else if(c == "scissor"){
                mid.textContent = "Rock beats scissors!!";
                compScore++;
            }
            else{
                mid.textContent = "Its a draw!!";
            }
        }else if(pc == 1){
            if(c == "rock"){
                mid.textContent = "Paper beats rock!!";
                compScore++;
            }
            else if(c == "scissors"){
                mid.textContent = "Scissors beats paper!!";
                score++;

            }
            else{
                mid.textContent = "Its a draw!!";
            }
        }else if(pc == 2){
            if(c == "rock"){
                mid.textContent = "Rock beats scissors";
                score++;
            }
            else if(c == "paper"){
                mid.textContent = "Scissors beats paper!!";
                compScore++;
            }
            else{
                mid.textContent = "Its a draw!!";
            }
        }else{
            mid.textContent = "OOPSIE!!!!!";
        }

        playerScore.textContent = "Your Score: "+ score;
        computerScore.textContent = "Computer Score: " + compScore;


        if(score == 5){
            final.textContent = "You win!!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;


        }else if(compScore == 5){
            final.textContent = "Better luck next time";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }

    }


rock.onclick = (e) => {
    choice = "rock";
    console.log(choice);
    playRound(choice);
    
};

paper.onclick = (e) => {
    choice = "paper";
    console.log(choice);    
    playRound(choice);

};

scissors.onclick = (e) => {
    choice = "scissors";
    console.log(choice);
    playRound(choice);
};


//playRound();




