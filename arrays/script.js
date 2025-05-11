// TAsk 1
let fruits = ["Яблоко", "Банан", "Апельсин"]
console.log(fruits)

// Task 2
console.log(fruits[0], fruits[2])
fruits.push("Груша")
console.log(fruits)

// TAsk 3
fruits.pop()
fruits.shift()
console.log(fruits)

// TAsk 4
fruits.forEach(fruit => console.log(fruit));

// Task 5
let lengths = fruits.map(fruit => fruit.length);
console.log(lengths);

// Task 6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.filter(number => number % 2 == 0));

// Task 7
console.log(numbers.reduce((a, b) => a + b, 0));

// TAsk 8
console.log(numbers.find(number => number > 5));

// TAsk 9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log(arr1.concat(arr2));

// TAsk 10
console.log(fruits.includes("Банан"))

// TAsk 11
console.log(fruits.reverse())



