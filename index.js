document.addEventListener("DOMContentLoaded",()=>{

    let button = document.querySelector("#one")
let info = document.getElementById("info")

button.addEventListener("click",()=>{
    console.log("hago click")
    info.classList.remove("hidden")
    button.classList.add("hidden")
})
})