const input = document.querySelector(".input");
const btn = document.querySelectorAll(".btn");
const forResul = document.querySelectorAll(".for_resolt");
const resolt2 = document.querySelector(".resolt2");
const input2 = document.querySelector(".input2")

function calc(distance, speed) {
    return distance / speed
}

btn[0].addEventListener("click", () => {

    forResul[0].innerHTML = `${(input.value/3.6).toFixed(2)} hours`
    forResul[1].innerHTML = `${calc(input.value,20.1 ).toFixed(2)} hours`
    forResul[2].innerHTML = `${calc(input.value, 70).toFixed(3)} hours`
    forResul[3].innerHTML = `${calc(input.value,800).toFixed(4)} hours`

})


btn[1].addEventListener("click", () => {
    resolt2.innerHTML = `c ${(input2.value*9/5)+32}`

})