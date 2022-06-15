// const d = new Date();
// document.getElementById("timer1").innerHTML = d;

// const { assertLiteral } = require("babel-types");

// const timer1 = document.querySelector("#timer1");
// timer1.textContent = new Date();


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-90px";
//   }
// }
// window.onload = function() {
//     var prev = document.getElementById("prev");
//     var next = document.getElementById("next");

//     prev.onclick = function(){
//         alert("previous");
//     }
//     next.onclick = function(){
//         alert("next");
//     }
// };


var img = document.getElementsByTagName("img")[0];
var imgarr =["Picture1.png","Picture2.png","Picture3.png","Picture4.png"]
var index =0;
var info = document.getElementById("info");
const btn = document.querySelector('.submitbtn');
const ul = document.querySelector('.list');
const nameinput = document.getElementById('nameinput');
const cityinput = document.getElementById('cityinput');
const clearbtn = document.querySelector(".clearbtn");
let nameArray = localStorage.getItem('namekey') ? JSON.parse(localStorage.getItem('namekey')) : [];
let cityArray = localStorage.getItem('citykey') ? JSON.parse(localStorage.getItem('citykey')) : [];

const data1 = JSON.parse(localStorage.getItem('namekey'));
const data2 = JSON.parse(localStorage.getItem('citykey'));
var audio = document.getElementById("audio");
function prev(){
    index--;
    if(index<0){
        index= imgarr.length-1;
    }
    img.src = imgarr[index];
    info.innerHTML= "This is No. " +(index+1)+ " out of "+(imgarr.length+1);
    
    audio.play();
};
function next(){
    index++;
    if(index>imgarr.length-1){
        index=0;
    }
    img.src = imgarr[index];
    info.innerHTML= "This is No. " +(index+1)+ " out of "+(imgarr.length+1);
    audio.play();
};
function submitfunction(){
    if(!nameinput.value==""&&!cityinput.value==""){
        nameArray.push(nameinput.value);
        cityArray.push(cityinput.value);
        localStorage.setItem('namekey', JSON.stringify(nameArray));
        localStorage.setItem('citykey', JSON.stringify(cityArray));
        liMaker(nameinput.value,cityinput.value);
        //liMaker2(cityinput.value);
        nameinput.value = "";
        
    }
   
}
const liMaker = (text1,text2) => {
    const li = document.createElement('p');
    li.textContent = text1 + " , "+ text2;
    ul.appendChild(li); 
  
  }
 for(i=0;i<nameArray.length;i++){
    liMaker(data1[i],data2[i]);
 }
  clearbtn.addEventListener('click', function () {
    localStorage.removeItem("namekey");
    localStorage.removeItem("citykey");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    
  });
