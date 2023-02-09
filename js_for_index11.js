// Таймеры и интервалы
// setInterval(my_func, 1000); // первое значение- название функции, второе- интервал, указывается в милисекундах

// var counter = 0;
// function my_func() {
// 	counter++;
// 	console.log("Counter: " + counter);
// }
// var counter = 0;
// setInterval(function() {
// 	counter++;
// 	console.log("Прошло секунд: " + counter);
// }, 1000);

// Остановка интервала :

// var id = setInterval(my_func, 1000); // первое значение- название функции, второе- интервал, указывается в милисекундах

// var counter = 0;
// function my_func() {
// 	counter++;
// 	console.log("Counter: " + counter);

// 	if(counter == 3) {
// 		clearInterval(id); // останавливает интервал
// 	}
// }

// Таймеры :

setTimeout(function() {
console.log("Timer is working");
}, 2000);

