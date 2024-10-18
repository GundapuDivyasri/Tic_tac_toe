let box=document.querySelectorAll(".button");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msgcontainer=document.querySelector(".container1");
let para=document.querySelector("p");
let turnO=true;
const winnum=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
};
box.forEach((button) =>{
    button.addEventListener("click",() =>{
    console.log("box selected");
    if(turnO){
        button.innerText="O";
        turnO=false;
    }
    else{
        button.innerText="X";
        turnO=true;
    }
    button.disabled=true;
    checkWinner();
    });
});
const disablebox = () =>{
    for(let boxes of box){
        boxes.disabled=true;
    }
};
const enablebox = () =>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
};
const showWinner =(winner) =>{
    para.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
const checkWinner= () =>{
    for(let pattern of winnum){
        let pos1= box[pattern[0]].innerText;
        let pos2 =box[pattern[1]].innerText;
        let pos3= box[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);