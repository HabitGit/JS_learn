// создание фу-ций
// function info(word) {
// 	console.log(word + "!");
// 	}

// function summa(a, b) {
// 	var res = a + b;
//     info(res);
// }

// summa(5, 7); 

// function summa(arr) {
// 	var sum = 0;

// 	for(var i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// return sum;
// }

// var array = [6, 8, 1];
// var array_2 = [1, 2, 3];
// var array_3 = [6, 5, 3];

// var res = summa(array);
// console.log("Result: " + res);
// summa(array_2);
// summa(array_3);

// Локальные и глобальные переменные 

var num = 10; //Глобальная переменная

function info() {
	var num = 20; // Локальная япеременная внутри функции
	console.log(num);
}

info();
console.log(num);