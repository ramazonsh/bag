let close = document.querySelector(".bar")
let smallbar = document.querySelector(".smallbar")
let closeq = document.querySelector(".close")
close.addEventListener("click", ()=>{
    smallbar.style.right="0"
})
closeq.addEventListener('click', ()=>{
    smallbar.style.right="-100%"
})