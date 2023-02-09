//условные конструкции
//var number = 15;
//var isHasHouse = true;

/*if(number == 5 || isHasHouse == true) { // || - или, && - И(and), для проверки переменной на false перед переменной ставится "!"
	console.log("ok"); 
} */
//else if(number < 10) {
//console.log("num<10");
//}
//else if(number == 7) {
//console.log("7!");
//}
//else if(number >= 15) {
//	console.log("num >= 15");
//}

//else {
//	console.log("Error")
//}

var string = 'Word';

switch(string) {
case "4": 
	console.log("переменная со значением 4");
	break; // оператор брейк нужен обязательно что бы остановить операцию
case "45": 
	console.log("переменная со значением 4");
	break;
case "word": 
	console.log("переменная со значением word");
	break;
default: // это значение будет срабатывать если все case значения не подошли
	console.log("default")
} // такая проверка удобна, когда нужно проверить на множество разных значений, черех из элс будет больше кода
