let div = document.querySelector(".div")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let buttons = document.querySelector('.buttons')
div.style.width ="200px"
div.style.height ="200px"
div.style.backgroundColor ="white"
div.style.border ="2px solid black"
div.style.borderRadius ="20px"
div.style.margin ="0 auto"
div.style.marginTop ="50px"
btn1.addEventListener("click", () =>{
div.style.backgroundColor ="#ff0000ff"
})
btn2.addEventListener("click", () =>{
div.style.backgroundColor ="#00ff73ff"
})
btn3.addEventListener("click", () =>{
div.style.backgroundColor ="#2200ffff"
})
btn4.addEventListener("click", () =>{
div.style.backgroundColor ="rgba(168, 118, 234, 1)"
})
btn5.addEventListener("click", () =>{
div.style.backgroundColor ="#ffffff"
})
btn1.style.width ="100px"
btn1.style.height ="50px"
btn1.style.borderRadius ="10px"
btn1.style.color ="white"
btn1.style.backgroundColor ="#ff2e2eff"
btn1.style.borderStyle ="none"
btn2.style.width ="100px"
btn2.style.height ="50px"
btn2.style.borderRadius ="10px"
btn2.style.color ="white"
btn2.style.backgroundColor ="#00ff73ff"
btn2.style.borderStyle ="none"
btn3.style.borderStyle ="none"
btn3.style.width ="100px"
btn3.style.height ="50px"
btn3.style.borderRadius ="10px"
btn3.style.color ="white"
btn3.style.backgroundColor ="#2200ffff"
btn4.style.width ="100px"
btn4.style.height ="50px"
btn4.style.borderRadius ="10px"
btn4.style.color ="white"
btn4.style.backgroundColor ="rgba(168, 118, 234, 1)"
btn4.style.borderStyle ="none"
btn5.style.borderStyle ="none"
btn5.style.width ="100px"
btn5.style.height ="50px"
btn5.style.borderRadius ="10px"
btn5.style.color ="black"
btn5.style.backgroundColor ="#ffffff"
buttons.style.display ="flex"
buttons.style.justifyContent ="center"
buttons.style.gap ="30px"
buttons.style.marginTop ="100px"
buttons.style.alignItems ="center"
let form = document.querySelector(".form")
let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
form.addEventListener('submit',(event)=>{
event.preventDefault()
alert(input.value)
input.value =""
})
input.style.width ="100px"
input.style.height ="30px"
input.style.borderRadius ="20px"
input.style.borderStyle ="none"
submit.style.width ="80px"
submit.style.height ="45px"
submit.style.borderRadius ="20px"
submit.style.backgroundColor ="blue"
submit.style.color ="white"
submit.style.borderStyle ="none"
form.style.display ="flex"
form.style.justifyContent ="center"
form.style.marginTop ="100px"
form.style.gap ="30px"
form.style.alignItems ="center"
let btnn2 = document.querySelector(".btnn2")
let btnn = document.querySelector(".btnn")
btnn.addEventListener('click', ()=> {
if (div.style.display === "none") {
    div.style.display ="flex"
}else{
    div.style.display ="none"
}
})
btnn.style.width ="100px"
btnn.style.height ="50px"
btnn.style.borderRadius ="10px"
btnn.style.backgroundColor ="orange"
btnn.style.color ="#ffffff"
btnn.style.borderStyle ="none"