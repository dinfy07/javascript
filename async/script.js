// Task 1
setTimeout(() =>{
    console.log("Hello World!");
},2000)

// Task 2
const time = setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
},1000)

// Task 3
setTimeout(() =>{
    clearInterval(time);
}, 5000)

// Task 4
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve ("Данные получены 4. 6")
    }, 3000)
})
fetchData.then(result => console.log(result))

// Task 5
const fetchDataWithError = new Promise((reject) => {
    setTimeout(() => {
        reject ("Данные получены 5")
    }, 2000)
})
fetchData.catch(error => console.log(error))

// Task 6
async function fetchDataAsync() {
    const response = await fetchData;
    console.log(response)
}
fetchDataAsync()

// Task 7
async function fetchDataWithErrorAsync() {
    try{
        const response = await fetchData;
    } catch (error){
        console.log(error)
    }
}

// Task 8
function task1 () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Task 1");
        }, 1000)
    })
}
function task2 () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Task 2");
        }, 2000)
    })
}
async function tasks(){
    const result1 = await task1()
    console.log(result1)

    const result2 = await task2()
    console.log(result2)
}
tasks()

// Task 9
function taskA () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Task A");
        }, 2000)
    })
}
function taskB () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Task B");
        }, 3000)
    })
}
async function paralleel(){
    const [result1, result2] = await Promise.all([taskA(), taskB()]);
    console.log(result1)
    console.log(result2)
}
paralleel()

// Task 10
function delayedMessage() {
    const input = prompt("Введите сообщение: ")
    const milli = Number(prompt("Введите время через которое будет выведен сообщение в миллисекундах: "))
    setTimeout(()=>{
        console.log(input)
    }, milli);
}
delayedMessage()