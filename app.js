const inputDay = document.querySelector(".day")
const inputMonth = document.querySelector(".month")
const inputYear = document.querySelector(".year")
const msg = document.querySelector(".msg")
const btn = document.querySelector("img")
const advices = document.querySelectorAll(".data p")
const calculateYears = document.querySelector(".py")
const calculateMonth = document.querySelector(".pm")
const calculateDay = document.querySelector(".pd")

btn.addEventListener("click", calculateAge)
let ansyear
let ansmonth
let ansday
const date = new Date()
const currentYear = date.getFullYear()
console.log(currentYear)


function calculateAge(){
if(
    (!inputDay.value || inputDay.value > 31 || inputDay.value < 0)||
    (!inputMonth.value || inputMonth.value > 12 || inputMonth.value < 0)||
    (!inputYear.value || inputYear.value > currentYear || inputYear.value<0)
){
    inputDay.classList.add("error")
    msg.style.visibility = "inherit"
    advices[0].style.color = "red"
    inputMonth.classList.add("error")
    advices[1].style.color = "red"
    inputYear.classList.add("error")
    advices[2].style.color = "red"

}
else{

    if(!inputDay.value || inputDay.value > 31 || inputDay.value < 0){
        inputDay.classList.add("error")
        msg.style.visibility = "inherit"
        advices[0].style.color = "red"
    }

    else{
        inputDay.classList.remove("error")
        msg.style.visibility = "hidden"
        ansday = Math.trunc((currentYear/365)-date.getDay())
        calculateDay.textContent = ansday
        advices[0].style.color = "gray"

    }
    

    handleErrorMonth(inputMonth)
    handleErrorYear(inputYear)
}    
}

function handleErrorMonth(input){
    if(!input.value || input.value > 12 || input.value < 0){
        input.classList.add("error")
        advices[1].style.color = "red"
    }
    else{
        input.classList.remove("error")
        ansmonth = 12 - input.value
        calculateMonth.textContent = ansmonth
        advices[1].style.color = "gray"
    }
}
function handleErrorYear(input){
    if(!input.value || input.value > currentYear || input.value<0){
        input.classList.add("error")
        advices[2].style.color = "red"
    }
    
    else{
        input.classList.remove("error")
        ansyear = currentYear - input.value
        calculateYears.textContent = ansyear
        advices[2].style.color = "gray"
    }

}

