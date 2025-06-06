// Task 1
//Ajax он отправляет запрос асинхронно на сервер и обновляет только ту часть который должен обновляться
//я думаю это ютуб комментарий либо в инстаграме лайки там когда обновляешь новые лайки либо комментарий появляются
//
// Task 2
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhr.onload = function () {
//     if (xhr.status == 200){
//         const data = JSON.parse(xhr.responseText)
//         console.log(data)
//     } else {
//         console.log(`Error: ${xhr.status} ${xhr.statusText}`)
//     }
// }
// xhr.onerror = function () {
//     console.log(`Error: ${xhr.status} ${xhr.statusText}`)
// }
// xhr.send()
//
// Task 3
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhr.onload = function () {
//     if (xhr.status == 200){
//         const data = JSON.parse(xhr.responseText)
//         render(data)
//         console.log(data)
//     } else {
//         console.log(`Error: ${xhr.status} ${xhr.statusText}`)
//     }
// }
// xhr.onerror = function () {
//     console.log(`Error: ${xhr.status} ${xhr.statusText}`)
// }
// xhr.send()
//
// function render(users) {
//     const ul = document.getElementById('list')
//     users.forEach(user => {
//         const li = document.createElement('li')
//         li.textContent = user.title
//         ul.appendChild(li)
//     })
// }
//
// TAsk 4
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhr.onload = function () {
//     if (xhr.status == 200){
//         const data = JSON.parse(xhr.responseText)
//         render(data)
//         console.log(data)
//     } else {
//         console.log(`Error: ${xhr.status} ${xhr.statusText}`)
//     }
// }
// xhr.onerror = function () {
//     console.log(`Error: ${xhr.status} ${xhr.statusText}`)
// }
// xhr.send()
//
// function render(users) {
//     const ul = document.getElementById('list')
//     users.forEach(user => {
//         const li = document.createElement('li')
//         li.textContent = `Заголовок: ${user.title}`
//         ul.appendChild(li)
//         body = document.createElement('li')
//         body.textContent = `Текст ${user.body}`
//         li.appendChild(body)
//         id = document.createElement('li')
//         id.textContent = `Айди пользователя ${user.id}`
//         body.appendChild(id)
//     })
// }
//
// Task 5
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhr.onload = function () {
//     if (xhr.status == 200){
//         const data = JSON.parse(xhr.responseText)
//         console.log(data)
//     } else {
//         console.log(`Error: ${xhr.status} ${xhr.statusText}`)
//     }
// }
// xhr.onerror = function () {
//     console.log(`Error: ${xhr.status} ${xhr.statusText}`)
// }
// xhr.send()
//
// Task 6
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
xhr.onload = function () {
    if (xhr.status == 200){
        const data = JSON.parse(xhr.responseText)
        render(data)
        console.log(data)
    } else {
        console.log(`Error: ${xhr.status} ${xhr.statusText}`)
    }
}
xhr.onerror = function () {
    console.log(`Error: ${xhr.status} ${xhr.statusText}`)
}
xhr.send()

function render(users) {
    const wait = document.getElementById('body')
    const h1 = document.createElement('h1')
    h1.textcontent = "Waiting..."
    wait.appendChild(h1)
    const ul = document.getElementById('list')
    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = `Заголовок: ${user.title}`
        ul.appendChild(li)
        body = document.createElement('li')
        body.textContent = `Текст ${user.body}`
        li.appendChild(body)
        id = document.createElement('li')
        id.textContent = `Айди пользователя ${user.id}`
        body.appendChild(id)
    })
    wait.removeChild(h1)
}