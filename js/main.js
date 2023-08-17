a = document.querySelector(".EN")
ul =document.getElementById("ul")
a.onclick =  () => {
    if(ul.style.display === "block")
        ul.style.display = "none"
    else
        ul.style.display = "block"
}
console.log(ul)