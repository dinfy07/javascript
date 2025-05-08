// Task 1
let person = {
    name: 'John',
    age: 32,
    city: 'San Francisco',
}
console.log(person);

// Task 2
console.log(person.name)
console.log(person.age)
person.city = 'Maryland';

// Task 3
person = {
    name: 'John',
    age: 32,
    city: 'San Francisco',
    greet(){
        return "Привет, меня зовут " + this.name + ", мне " + this.age + " лет!"
    }
}
console.log(person.greet());

// Task 4
let obj1 = { a: 10, b: 20 }
let obj2 = { a: 10, b: 20 }
if (obj1 == obj2){
    console.log("Похожий")
}
if (obj1 === obj2) {
    console.log("Очень похожий")
} // потому что в обьектах джс сравнивает только ссылки а не сами значение из за того что разные места в памяти и не равны

// TAsk 5
let book = {
    title: 'Harry Potter',
    author: 'Jr Rowling',
    details: {
        year: 2016,
        pages: 635
    }
}
let newBook = Object.assign({}, book);
newBook.details.year = 1992;
console.log(book.details.year)
console.log(newBook.details.year) // отому что мы ассигном скопировали только бук но внутренный обьект осталься в виде ссылки на обьект из за этолго поменялся

// Task 6
let calculator = {
    a: 55,
    b: 89,
    sum(){
        return this.a + this.b;
    },
    multiply(){
        return this.a*this.b;
    }
}
console.log(calculator.sum())
console.log(calculator.multiply())

// Task 7
const car = {
    brand: 'Carolina',
    model: 'Carolina353',
}
car.brand = "Bentley";
console.log(car.brand) // мы трогаем только свойства а не ссылку на этот памят
