// Создание объектов. Встроенные функции
//var date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth()); // считает с числа 0. Т.е. январь для него это нулевой месяц
// console.log(date.getDate()); // Сегодняшнее число
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// date.setHours(23); // установить свою дату
// date.setMinutes(22);
// console.log("Time: " + date.getHours() + ":" + date.getMinutes());

// var arr = [80, 5, 6, 7, 9,];
// console.log(arr.join(", ")) // выводит элементы массива как строку
// console.log(arr.sort())
// console.log(arr.reverse());
// console.log(arr.reverse().join(", "));
// var string = arr.reverse().join(", ");

// console.log(string.split(", "));

class Person {
	constructor(name, age, happiness) {
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}

	info() {
		console.log("Human" + this.name + ". Age:" + this.age);
	}
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 45, false);

alex.name = "Alex2";
alex.info();
bob.info();

// console.log(alex.name);
// console.log(bob.name);
