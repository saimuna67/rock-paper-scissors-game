let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score")
const compscorepara= document.querySelector("#computer-score")

const gencompchoice = ()=>{
const options = ["rock","paper","scissor"];
const randomidx= Math.floor(Math.random()*3);
 return options [randomidx];}

const playgame = (userchoice)=>{
  const compchoice = gencompchoice ();

  if(userchoice===compchoice){drawgame();}
  else {let userwin=true;
           if(userchoice==="rock"){userwin=  compchoice==="paper"? false:true; }
             else if(userchoice==="paper"){userwin=  compchoice==="scissor"? false:true;}
           else 
           { userwin= compchoice==="rock"? false:true ; }
   showwinner(userwin ,userchoice,compchoice); }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  const userchoice = choice.getAttribute ("id")
  playgame(userchoice);
  })
});

const drawgame = ()=>{
  msg.innerText = "game was drawwww";
  msg.style.backgroundColor="blue"
}


const showwinner= (userwin, userchoice, compchoice) => {
  if(userwin){
    userScore++ ;
    msg.innerText =`you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    userscorepara.innerText=userScore
  
  } 
  else{ compScore++ ;
    msg.innerText =`computer win. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    compscorepara.innerText=compScore
  }
}
