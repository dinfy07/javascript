// TAsk 2
let clickMe = document.querySelector("#jsButton");
clickMe.addEventListener("click", function () {
    alert("Click me with JS!");
})

// TAsk 3
let div = document.querySelector(".myDiv");
div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "blue";
})
div.addEventListener("click", function () {
    alert("Элемент нажат");
})
// TAsk 4
let input = document.querySelector("#textInput");
input.addEventListener("keydown", function (event) {
    console.log(event.key);
})
// TAsk 5
let link = document.querySelector("#myLink");
link.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Переход по ссылке отменен");
})
// TAsk 6
let list = document.querySelectorAll("li");
list.forEach(li => {
    li.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    })
}) // если добавим на ul мы же будем сразу все li выводить на консоль нет?
// TAsk 7
let code = document.querySelector("#keyboardInput")
code.addEventListener("keydown", function(event){
    console.log(event.keyCode)
})


















