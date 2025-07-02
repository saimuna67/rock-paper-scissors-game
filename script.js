let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompchoice = ()=>{
const options = ["rock","paper","scissor"];
const randomidx= Math.floor(Math.random()*3);
 return options [randomidx];}

const playgame = (userchoice)=>{
  console.log("user choice=",userchoice);
  const compchoice = gencompchoice ();
  console.log("comp choice=",compchoice);

  if(userchoice===compchoice){drawgame();}
  else {let userwin=true;
           if(userchoice==="rock"){userwin= compchoice==="paper"? false:true; }
             else if(userchoice==="paper"){userwin= compchoice==="scissor"? false:true;}
           else (usercoice==="scissor")
           { userwin= compchoice==="rock"? false:true ; }
   showwinner(userwin ,userchoice,compchoice); }
}

choices.forEach((choice)=>{
  const userchoice = choice.getAttribute ("id")
  choice.addEventListener("click",()=>{
  playgame(userchoice);
  })
});

const drawgame = ()=>{console.log("game was draw")
  msg.innerText = "game was drawwww";
  msg.style.backgroundColor="blue"
}

const userscorepara= document.querySelector("#user-score")
const compscorepara= document.querySelector("#computer-score")

const showwinner= (userwin, userchoice, compchoice) => {
  if(userwin){
    userScore++ ;
    msg.innerText =`you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    userscorepara.innerText=userScore
  
  } 
  else{console.log("computerwin")
     compScore++ ;
    msg.innerText =`computer win ${userchoice} beats your ${compchoice}`;
    msg.style.backgroundColor="red";
    compscorepara.innerText=compScore
  }
}

const msg= document.querySelector("#msg");

