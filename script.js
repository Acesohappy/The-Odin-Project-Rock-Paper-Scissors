let choices=["rock","paper","scissors"];
let human_score=0;
let computer_score=0;
function getComputerChoice()
{
    let choice;
    choice=choices[Math.floor(Math.random()*3)]
    console.log(choice);
    return choice;
}

function getUserChoice() {
    let inp;
    inp=prompt("What is your choice?\n(Rock,Paper,Scissors)");
    inp.toLowerCase();
    while(inp!="rock" && inp!="paper" &&  inp!="scissors"){
        inp=prompt("Input the correct choice!");
        inp.toLowerCase();
    
    }
    console.log(inp);
    return inp;
}
function playGame(){
    function playRound(u,c){
        if(u==c){
            console.log("Tie!!!");
        }
        else{
            if(u=="rock"){
                if(c=="scissors"){
                    console.log("YOU WIN!!");
                    human_score++;
                }
                else{
                    console.log("YOU LOSE!!");
                    computer_score++;
                }
                
            }
            else if(u=="paper"){
                if(c=="rock"){
                    console.log("YOU WIN!!");
                    human_score++;
                }
                else{
                    console.log("YOU LOSE!!");
                    computer_score++;
                }
            }
            else{
                if(c=="paper"){
                    console.log("YOU WIN!!");
                    human_score++;
                }
                else{
                    console.log("YOU LOSE!!");
                    computer_score++;
                }
            }
        }
    }
    for(let i=1;i<=5;i++){
        playRound(getUserChoice(),getComputerChoice());
    }
    console.log("YOUR SCORE: ",human_score);
    console.log("COMPUTER'S SCORE: ",computer_score);
}
playGame();

