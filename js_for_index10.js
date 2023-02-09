// // Обработка форм и управление HTML
// var text = document.getElementById('text');
// // console.log(text.id);
// console.log(text.title);

// text.style.color = "red";
// text.style.backgroundColor = "blue";

// text.innerHTML = "New<br>String";

// //var spans = document.getElementsByTagName('span');

// var spans = document.getElementsByClassName('simple-text');

// for(var i = 0; i< spans.length; i++) {
// 	console.log(spans[i].innerHTML);
// }



// Вариант функции, при котором внутри кода HTML , внутри пункта form стоит значение: onsubmit="return checkForm(this)
// function checkForm(el) {

  
// //var name = document.getElementById('name').value; - что бы не создавать эту переменную, внутри скобок функции можно указать значение, как в данном случае el
// 	var name = el.name.value;
// 	var pass = el.pass.value;
// 	var repass = el.repass.value;
// 	var state = el.state.value;

// 	var fail = "";

// if(name == "" || pass == "" || state == "") {
// 	fail = "Заполните все поля";
// }
// else if(name.length <= 1 || name.length > 50) {
// 	fail = "Введите корректное имя";
// }
// else if(pass != repass) {
// 	fail = "Пароли не совпадают";
// }
// else if(pass.split("&").length > 1) {
// 	fail = "Некорректный пароль";
// }

// if(fail != "") {
// 	document.getElementById('error').innerHTML = fail;

// }
// else {
// 	alert("Все данные заполнены корректно");
// 	window.location = "https://itproger.com"; 
// }
// 	return false;

// }

// Второй вариант как можно обращаться в HTML что бы не использовать JS внутри HTML. Мы удалили предидущее значение в пункте form
document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
	event.preventDefault();
	var el = document.getElementById('main-form');

  
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;

	var fail = "";

if(name == "" || pass == "" || state == "") {
	fail = "Заполните все поля";
}
else if(name.length <= 1 || name.length > 50) {
	fail = "Введите корректное имя";
}
else if(pass != repass) {
	fail = "Пароли не совпадают";
}
else if(pass.split("&").length > 1) {
	fail = "Некорректный пароль";
}

if(fail != "") {
	document.getElementById('error').innerHTML = fail;

}
else {
	alert("Все данные заполнены корректно");
	window.location = "https://itproger.com"; 
}

}

