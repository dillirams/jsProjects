let boxes=document.querySelectorAll('.btn');
let resetBtn=document.getElementById("reset-btn");

let newGameBtn=document.getElementById("new-btn");
let msgContainer=document.getElementById("msg-contianer");
let msg=document.getElementById("msg");

let turnX=true;

const winPattern= [
    [0,1,2],
    [0,1,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("the box was clicked");

        if(turnX){
            box.innerText="O";
            turnX=false;
        }
        else{
            box.innerText="x";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    // msgContainer.classList.remove("hide");
}

const checkWinner= () => {
    for(let pattern of winPattern){
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;

        if(pos1Value!=""&& pos2value!=""&&pos3value!=""){
            if(pos1Value==pos2value&&pos2value==pos3value){
                console.log("winner", pos1Value);
                showWinner(pos1Value);
            }
        }
    }
}