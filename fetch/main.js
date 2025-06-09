// // Task 1
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//
// // Task 2
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: 'Hello World',
//         body: 'Hello World!',
//         id: 2
//     })
// })
//     .then(res => {
//         console.log(`Статус обработки: ${res.status}`)
//         return res.json();
//     })
//     .then(data => console.log(data))
//
// Task 3
// fetch('https://jsonplaceholder.typicode.com/nonexistent')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error (`Error: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//     })
//     .catch(err => console.log(err))
//
// Task 4
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Hello World JSON',
//         body: 'Hello World JSON goodbye'
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data))
//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//
// Task 5
// async function createPost() {
//     try {
//         const api = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 title: 'frsvc',
//                 body: 'fsgvrege',
//                 id: 1
//             })
//         })
//         if (!api.ok){
//             throw new Error(api.statusText);
//         }
//         const data = await api.json()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createPost()
//
fetch('https://jsonplaceholder.typicode.com/comments',{
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
})
.then(res => res.json())
.then(data => console.log(data));