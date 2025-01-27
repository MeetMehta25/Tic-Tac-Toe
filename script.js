let btn = document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let newgame=document.querySelector("#new");
let msg_con=document.querySelector(".msg-con");
let msg=document.querySelector(".msg");
let turn0=true;


const winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const reset_game=() =>{
    turn0=true;
    boxenabled();

    msg_con.classList.add("hide");

};

btn.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("hi");
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
   
});
const boxdisabled =() =>{
    for(box of btn){
       
        box.disabled=true;
    }

};
const boxenabled =() =>{
    for(box of btn){
        box.innerHTML="";
        box.disabled=false;
    }

};
const drawWinner= () =>{
    msg.innerHTML=`Match Drawn`;
    msg_con.classList.remove("hide");
    boxdisabled();
    };
const showWinner= (winner) =>{
msg.innerHTML=`Congratulations, Winner is ${winner}`;
msg_con.classList.remove("hide");
boxdisabled();
};
const checkWinner = () => {
    for(Pattern of winPattern){
            let pos1=btn[Pattern[0]].innerHTML;
            let pos2=btn[Pattern[1]].innerHTML;
            let pos3=btn[Pattern[2]].innerHTML;
            
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    showWinner(pos1);
                }
            }
        
        }
        
       
};
reset.addEventListener("click",reset_game);
newgame.addEventListener("click",reset_game);