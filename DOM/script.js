// Task 1
let changeP = document.getElementById("message")
changeP.textContent = "Добро пожаловать в JavaScript!"

// Task 2
let changeBox = document.getElementsByClassName("box")
for (let box of changeBox) {
    box.style.backgroundColor = "green";
}

// TAsk 3
let text = document.querySelector("#message")
text.textContent = "Хеллоу"
let boxes = document.querySelectorAll(".box")
for (let box of boxes) {
    box.style.backgroundColor = "pink";
}

// TAsk 4
let highLighted = document.querySelectorAll(".highlight")
for (let el of highLighted) {
    el.style.color = "red"
}