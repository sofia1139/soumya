let message="Will you be my Valentine? 💖";
let i=0;

function typing(){
if(i<message.length){
document.getElementById("text").innerHTML+=message.charAt(i);
i++;
setTimeout(typing,80);
}
}

setTimeout(()=>{
document.getElementById("text").innerHTML="";
typing();
},2000);

function yesClicked(){
alert("Yay! 💕");
}

function moveButton(){
let btn=document.getElementById("noBtn");

let x=Math.random()*400;
let y=Math.random()*300;

btn.style.left=x+"px";
btn.style.top=y+"px";
}