// TAsk 1
let a = 1
while (a<11){
    console.log(a)
    a++
}

// TAsk 2
let b = 1
while (b<11){
    if (b==5){
        b++
        continue
    }
    if (b==8){
        break
    }
    console.log(b)
    b++

}

// TAsk 3
let c = 1
do {
    console.log(c)
    c++
} while (c<6) // без условия первый итерация все равно пройдет

// // Task 4
// while (true){
//     let q = prompt();
//     break
// }

// TAsk 5
for (let i = 1; i < 11; i++){
    console.log(i)
}

// TAsk 6
for (let i = 1; i < 102; i++){
    console.log(i)
}

// TAsk 7
let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

// TAsk 8 если у нас определено число шагов которые мы должны сделать

// TAsk 9
for (let i = 10; i > 0; i--){
    console.log(i)
}

// TAsk 10
for (let i = 0; i < 13; i+=2){
    if (i == 12){
        continue
    }
    console.log(i)
}











