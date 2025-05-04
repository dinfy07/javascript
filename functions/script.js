// Task 1
function greet(){
    console.log("Hello world");
}
greet()

// Task 2
function sayHello(name){
    console.log("Hello " + name);
}
sayHello("Beybit")
sayHello("Vlad")

// Task 3
function sum(a, b){
    return a + b;
}
console.log(sum(2,9))

// Task 4
function isEven(n){
    return n % 2 == 0;
}
console.log(isEven(2))
console.log(isEven(11))

// Task 5
function max(a, b){
    return a > b ? a : b
}
console.log(max(19,15))
console.log(max(1,9))

// Task 6
function getinitials(first, last){
    return `${first[0]}.${last[0]}`;
}
console.log(getinitials("Agsr", "Gfgs")) // работа со стрингами не было и не учили

// Task 7
function square(n){
    function cube(n){
        return n ** 3;
    }
    return cube(n);
}
console.log(square(5))

// Task 8
sum1 = (a, b) => {
    return a + b
}
console.log(sum1(5,9))

// про факториал еще мы не проходили цикл


