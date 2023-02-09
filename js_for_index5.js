// массивы данных 
//var arr = new Array() один из способов
var arr = [5, true, "string", 5.7, 0, -100];
console.log(arr[0]);
arr[3] = "word"
console.log(arr[3]);
console.log(arr.length); // длина массива

//Многомерные массивы (массив внутри массива)
var matrix = [
	[4, 6, 8], ["string", 5.7], [0, -100]
	];

matrix[1][0] = 90;
	console.log(matrix);