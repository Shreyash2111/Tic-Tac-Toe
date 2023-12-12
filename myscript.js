console.log("hi");
let btn=document.querySelectorAll(".btnbox");
let bt=false;
let win=document.querySelector(".winner-segment");
let ct=0;
let renew=document.querySelector(".btnreset");
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
renew.addEventListener("click",enableboxes);
function draw(){
    win.classList.remove("hide");
    win.innerText=`It's a draw`;
    disableboxes();
}
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(!bt){
            box.innerText='X';
            bt=true;
        }
        else{
            box.innerText='O';
            bt=false;
        }
        ct++;
        box.disabled=true;
        let winner=checkWinner();
        if(ct===9 && !checkWinner()){
            draw();
        }
    })
})
function disableboxes(){
    for(let box of btn){
        box.disabled=true;
    }
}
function enableboxes(){
    ct=0;
    win.classList.add("hide");
    for(let box of btn){
        box.disabled=false;
        box.innerText='';
    }
}
function showWinner(winner){
    win.classList.remove("hide");
    win.innerText=`Congrats ${winner} for wining`;
    disableboxes();
}
function checkWinner(){
    for(let pattern of winpattern){
        let val1=btn[pattern[0]].innerText;
        let val2=btn[pattern[1]].innerText;
        let val3=btn[pattern[2]].innerText;
        if(val1!='' && val2!='' && val3!=''){
           
            if(val1==val2 && val2 ==val3){
                showWinner(val1);
                return true;
                
            }
        }
    }
    }
