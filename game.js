console.log("Lets Play!!");

function start(){
    let n = prompt("Enter your move: ");
    n = n.toLowerCase();
    return n
}

function computer(){
    let m = Math.floor(1 + Math.random()*2);

    switch(m){
        case 1:
        return "rock";
        break;
        case 2:
        return "paper"
        break;
        case 3:
        return "scissor"
        break;
    }
}

function game(start,computer){
    if(start == computer){
        console.log("Its a Draw!!");
    }
    else if(start == "rock"){
        if(computer == "paper"){
            console.log("Computer won with paper");
        }
        else{
            console.log("You win");
        }
    }
    
    else if(start == "paper"){
        if(computer == "scissor"){
            console.log("Computer won with scissor");
        }
        else{
            console.log("You win with paper");
        }
    }

    else if(start == "scissor"){
        if(computer == "rock"){
            console.log("Computer won with rock");
        }
        else{
            console.log("You win with scissor");
        }
    }
    else{
        console.log("It works lmao");
    }
}

game(start(),computer());
