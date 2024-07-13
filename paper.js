let userSCore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userSCorepara = document.querySelector("#user-score");
 const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}
  const drawGame = () => {
    msg.innerText="Game Was Draw";
  };

  const showWinner = (userWin) => {
    if(userWin) {
      userSCore++;
      userSCorepara.innerText = userSCore;
        msg.innerText = "you Win !"
    }else {
        compScore++;
        compScorepara.innerText = compScore;
    
        msg.innerText="you lose $";
    }
  }

const playgame = (charanchoice) => {
    console.log("charan choices =", charanchoice);
    //Generate computer choice
    const CompChoice = genCompChoice();
    
     
    if (charanchoice === CompChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (charanchoice === "rock"){
          userWin =  CompChoice === "paper" ? false : true;
        } else if(charanchoice === "paper") {
            CompChoice === "scissors" ? false : true;
        }else {
            CompChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices .forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const charanchoice = choice.getAttribute("id");
      playgame(charanchoice);
    });
});