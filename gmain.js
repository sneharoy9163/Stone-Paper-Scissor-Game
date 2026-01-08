alert(
    "*GAME RULES*\n" +
    "• Stone breaks Scissor\n" +
    "• Paper cover Stone\n" +
    "• Scissor cut Paper"
);

let uscore=0;
let cscore=0;
const c= document.querySelectorAll(".choice");
const m= document.querySelector("#msg");
const users= document.querySelector("#user");
const computers= document.querySelector("#com");

const gamechoice= ()=>{
    const option= ["stone", "paper", "scissor"];
    const idx= Math.floor(Math.random()*3);
    return option[idx];
};
function clearScore() {
    uscore = 0;
    cscore = 0;

    users.innerText = 0;
    computers.innerText = 0;

    msg.innerText = "New game started!";
    msg.style.backgroundColor = "rgb(155, 235, 26)";
}
const draw= ()=>{
    console.log("draw match");
    msg.innerText= "match draw!";
    msg.style.background= "linear-gradient(135deg, #f7971e, #ffd200)";
    msg.style.color = "#222";
};
const winner= (win, uchoice, comchoice)=>{
    if(win){
        uscore++;
        users.innerText= uscore;
        console.log("you win");
        msg.innerText= `you win.`;
        msg.style.background= "linear-gradient(135deg, #11998e, #38ef7d)";
        msg.style.color = "#222";
    }else{
        cscore++;
        computers.innerText= cscore;
        console.log("computer win");
        msg.innerText= `you lose.`;
        msg.style.background= "linear-gradient(135deg, #cb2d3e, #ef473a)";
        msg.style.color = "#222";
    }
};
const play= uchoice =>{
    console.log("user choice", uchoice);
    const comchoice= gamechoice();
    console.log("computer choice", comchoice);
    if(uchoice===comchoice){
        draw();
    }else{
        let win= true;
        if(uchoice==="stone"){
            win= comchoice==="paper"? false:true;
        }else if(uchoice==="paper"){
            win= comchoice==="stone"? true:false;
        }else{
            win= comchoice==="stone"? false:true;
        }
        winner(win, uchoice, comchoice);
    }
};
c.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const uchoice= choice.getAttribute("id");
        play(uchoice);
    });
});
let modeBtn= document.querySelector("#btw");
let body= document.querySelector("body");
let cmode= "light";
modeBtn.addEventListener("click", ()=>{
    if(cmode=="light"){
        cmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        cmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(cmode);
});
