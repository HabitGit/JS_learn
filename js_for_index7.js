// всплывающие окна 
//alert("Какая хорошая погода");
//alert("Какая хорошая погода 2ой раз");
// var  data = confirm(" Are you home?");
// if(data) {
// 	alert("Вы молодец!");
// }
// console.log(data);

// var data = prompt("Say how are you old?", 0);
// console.log(data);

var person = null;
if(confirm("are you shore?")) {
person = prompt("Turn your name");
alert("Hello: " + person);
}
else {
alert("You turn cancel")
}
// я думаю, можно с помощью этой функции сделать доступ к сайту. Я выдаю логин, допустим Игорь228, зайдя на сайт задается вопрос: введите логин. Если логин введен не верно то сайт не показывает содержимое, и наоборот