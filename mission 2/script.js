'use strict';

let money = +prompt("Ваш бюджет на месяц?", '');
// let	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	// timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && 
		a !='' && b !='' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
        console.log ("bad result");
		i--; // сделать еще шаг цикла
	} 
}

// 2 тип цикла
// let i = 0;
// while (i != 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && 
// 		a !='' && b !='' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {

// 	} 
// 	i++;
// }

// 3 тип цикла
// i = 0;
// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && 
// 		a !='' && b !='' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {

// 	} 
// 	i++;
// } while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
	// в видео неправильно: > 100
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {  
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {  // в видео неправильно: > 2000
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка!");
}
