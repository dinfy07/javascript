// Task 1
localStorage.setItem("greeting", "Привет, мир!")
console.log(localStorage.getItem("greeting"))

// TAsk 2
localStorage.removeItem("greeting")
console.log(localStorage.getItem("greeting"))

// Task 3
let person = {
    name: "Beybit",
    email: "fcsmfxklvz@mail.ru",
    password: "fdcs",
    phone: "fwdcsfwed",
}
let savedPerson = JSON.stringify(person)
localStorage.setItem("person", savedPerson)
let parsedPerson = JSON.parse(localStorage.getItem("person"))
console.log(parsedPerson)

// Task 4
let parsePerson = JSON.parse(localStorage.getItem("person"))
parsePerson.country = "Kazakhstan"
localStorage.setItem("person", JSON.stringify(parsePerson))
console.log(JSON.parse(localStorage.getItem("person")))

// TAsk 5
if (localStorage.getItem("person")){
    console.log(JSON.parse(localStorage.getItem("person")))
}else{
    let user = {
        name: "Beybit",
        email: "fdcs",
    }
    localStorage.setItem("person1", JSON.stringify(user))
}

// Task 6
localStorage.clear()

// Task 7
let arr1 = [
    {
        "title": "Beg",
        "completed": false,
    },
    {
        "title": "sfsrgs",
        "completed": false,
    },
    {
        "title": "sfdc",
        "completed": true,
    }
]
localStorage.setItem("tasks", JSON.stringify(arr1))
console.log(JSON.parse(localStorage.getItem("tasks")))

// Task 8
let arr2 = JSON.parse(localStorage.getItem("tasks"))
arr2[1].completed = true;
localStorage.setItem("tasks", JSON.stringify(arr2))
console.log(JSON.parse(localStorage.getItem("tasks")))






















