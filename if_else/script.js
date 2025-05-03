// // Task 1
// let x = prompt("Введите число: ")
// if (x > 10) {
//     alert("Число больше чем 10")
// }
// else {
//     alert("Число меньше чем 10")
// }
//
// // Task 2
// let deleted = confirm("Хотите ли вы удалить файл?")
// if (deleted) {
//     alert("Файл удален")
// }
// else{
//     alert("Удаление файла отменено")
// }
//
// // Task 3
// let age = prompt("Сколько вам лет?")
// if (age < 18) {
//     alert("Вы еще подросток")
// }
// else if (age < 30) {
//     alert("Вы молодой взрослый")
// }
// else if (age > 30) {
//     alert("Вы взрослый")
// }
//
// // Task 4
// let number = prompt("Введите число: ")
// alert(number % 2 == 0 ? "Четное число" : "Нечетное число")
//
// // Task 5
// let number = Number(prompt("Напишите день недели которое вам надо"))
// if (number > 7) {
//     alert("Некорректное значение")
// }
// else {
//     switch (number) {
//         case 1:
//             alert("Monday")
//             break;
//         case 2:
//             alert("Tuesday")
//             break;
//         case 3:
//             alert("Wednesday")
//             break;
//         case 4:
//             alert("Thursday")
//             break;
//         case 5:
//             alert("Friday")
//             break;
//         case 6:
//             alert("Saturday")
//             break;
//         case 7:
//             alert("Sunday")
//             break;
//     }
// }
//
// // Task 6
// let num1 = Number(prompt("Введите первое число:"));
// let num2 = Number(prompt("Введите второе число:"));
//
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Пожалуйста, введите корректные числа");
// } else {
//     let result = (num1 === num2)
//         ? "Числа равны"
//         : (num1 > num2)
//             ? "Первое число больше"
//             : "Второе число больше";
//     alert(result);
// }

// Task 7
let d = Number(prompt("Введите номер месяца (1-12):"));
switch (d) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
}
alert(season)