let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#restart");
let newbtn=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let playerO=true;
const winningConditions=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
   [2,5,8],
   [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame=()=>{
  playerO=true;
  enableBoxes();
  msgcont.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      
      box.innerText = "O";
      playerO = false;
    }
    
    else {
     
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;

    checkWinner()
  });
});

const disableboxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner=(winner)=>{
  msg.innerText=`congratulations winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
  };

const checkWinner= ()=>{
  for(let patterns of winningConditions ){
    let pos1=boxes[patterns[0]].innerText;
    let pos2=boxes[patterns[1]].innerText;
    let pos3=boxes[patterns[2]].innerText;

     if (pos1 != "" && pos2 != "" && pos3 != "") {
    if(pos1==pos2 && pos2==pos3){
      
      showWinner(pos1);
      
    }
     }
  }
};
newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);