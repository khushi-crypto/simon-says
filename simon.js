let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","blue"]

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started==false){ //if game not start yet
    console.log("game is started");
    started=true;

    levelUp();
  }    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash") 
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
       btn.classList.remove("userFlash") 
    },200);
}

function levelUp(){
userSeq=[];//userSeq empty hoti rhegi or jo b hum button press krte ja rhe h new level k lia wo match hota ja rha h gameSeq k same idx se
level++;
h2.innerText=`level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let ranColor=btns[randIdx];
let randbtn=document.querySelector(`.${ranColor}`)
gameSeq.push(ranColor);
gameFlash(randbtn);
}

function  checkAns(idx){
// let idx=level-1; remove fix idx for matchinng the seq
if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){  
       setTimeout(levelUp,1000);
    }
    console.log("same")
}
else{
   h2.innerHTML=`Game over! Your score was <b>${level}</b> Press any key to start`;
  document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
   document.querySelector("body").style.backgroundColor="white";
   },150);
   reset();
}
}


function btnPress(){ //clicked by user
   let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");//accessing the color or id through btn
     userSeq.push(userColor);
     checkAns(userSeq.length-1);//userSeq pass kr rhe h qki user jo btn press kr rha h(last button)
    }                         //hum usko hi compare krte jara h ..same idx pr jo gameSeq me

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[]; //
    level=0;
}


