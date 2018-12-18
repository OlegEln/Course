'use strict'

let money, time;

function start() {
	// time = prompt('Введите дату в формате YYYY-MM-DD', '');

	money = +prompt("Ваш бюджет на месяц?", '');
	while (isNaN(money) || money == "" || money == null)
		money = +prompt("Ваш бюджет на месяц?", '');
	
	// null - чтобы пользователь не мог нажать кнопку Отмена (? не подтвердилось!)
	// "" - чтобы не принимать пустую строку или пробелы(?) - без этого условия присваивает 0(?)
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	// timeData: time,
	savings: true  // поменяли с false
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && 
			a !='' && b !='' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
	        console.log ("bad result");
			i--; // сделать еще шаг цикла
		} 
	}
}

chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();  
	// () - округление до целого, (1) - 1 знак после запятой
	// возвращает строковое(!) значение
	alert ("Ежедневный бюджет: " + appData.moneyPerDay + " руб.");
}

function detectLevel() {
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
}

// новая функция
function checkSavings() { // проверка накоплений
	if (appData.savings == true) {  // функция работает только когда у пользователя есть накопления
		let save = +prompt("Какова сумма накоплений?");
		let percent = +prompt("Под какой процент?");

		appData.monthIncome = save / 12 * (percent/100); // прибыль за мес.
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

// (!) можно прямо в процессе в консоли разработчика в браузере написать объект, чтобы посмотреть все поля (дерево)
// например:  console.log(appData);
// (!) вообще-то достаточно appData

// новая функция
// Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
function chooseOptExpenses() {
	let a, b;
	for (let i = 0; i < 3; i++) {
		a = prompt("Статья необязательных расходов?", '');
		if (typeof(a)==='string' && typeof(a)!=null && a !='' && a.length < 50) {
			b = +prompt("Во сколько обойдется?", '');
			while (isNaN(b) || b == "" || b == null) {
				b = +prompt("Во сколько обойдется?", '');
			}
			appData.optionalExpenses[a] = b;
			console.log("done");
		} else  console.log ("bad result");
	}
}

chooseOptExpenses();
