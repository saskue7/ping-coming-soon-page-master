const input = document.querySelector(".input")

const btn = document.querySelector(".button")
const error = document.querySelector(".error")

btn.addEventListener("click",function(){

 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(input.value.match(validRegex) && input.value!==""){
   error.classList.add("hidden")
   input.value=""
 }
 else{
  error.classList.remove("hidden")
 }

})
input.addEventListener("focus",function(){
 error.classList.add("hidden")
})