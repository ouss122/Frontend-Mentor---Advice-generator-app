let text= document.querySelector('.text');
let adivceId= document.querySelector('.adviceId');
let dice= document.querySelector('.dice');


async function getAdvice() {
var j = await fetch('https://api.adviceslip.com/advice' ,{ cache: "no-cache" });
j = await j.json();
j= j['slip'];
adivceId.textContent=`advice  #${j.id}`;
text.textContent=`“${j.advice}”`;
 }

getAdvice();


dice.addEventListener('click',()=>{
getAdvice();
   
});