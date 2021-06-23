var open=document.querySelector(".open");
var close=document.querySelector(".close");
var container=document.querySelector(".container");
var circle=document.querySelector(".circle");
open.addEventListener('click',()=>{
  container.classList.add("show-nav");

});
close.addEventListener('click',()=>{
  container.classList.remove("show-nav");

});
