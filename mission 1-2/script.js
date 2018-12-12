
/*
Вопросы к этому заданию

Какое будет выведено значение: let x = 5; alert( x++ ); ?

Чему равно такое выражение: [ ] + false - null + true ?

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

Чему равна сумма [ ] + 1 + 2?

Что выведет этот код: alert( "1"[0] )?

Чему равно 2 && 1 && null && 0 && undefined ?

Есть ли разница между выражениями? !!( a && b ) и (a && b)?

Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

Что выведет этот код: alert( +"Infinity" ); ?

Верно ли сравнение: "Ёжик" > "яблоко"?

Чему равно 0 || "" || 2 || undefined || true || falsе ?
*/

let y = 1; let x = y = 2; alert(x);   // результат: 2
x = 5; alert( x++ );  // результат: 5 
alert( "1"[0] );  // результат: 1 
alert( null || 2 && 3 || 4 );   // результат: 3 - ?
alert( +"Infinity" );   // результат: Infinity

console.log([ ] + false - null + true);    // результат: NaN (number)
console.log(typeof([ ] + false - null + true));

console.log([ ] + 1 + 2);    // результат: 12 (string)
console.log(typeof([ ] + 1 + 2));

console.log(2 && 1 && null && 0 && undefined); // результат: null (object)
console.log(typeof(2 && 1 && null && 0 && undefined));

console.log(0 || "" || 2 || undefined || true || falsе); // результат: 2 (number)
console.log(typeof(0 || "" || 2 || undefined || true || falsе));

console.log("Ёжик" > "яблоко");    // результат: false (boolean)
console.log(typeof("Ёжик" > "яблоко"));

a = [1, 2, 3]; b = [1, 2, 3]; 
console.log(a == b);  // результат: false
// !!( a && b ) и (a && b);
// let a,b;
// console.log(typeof(!!( a && b )));
// console.log(typeof(( a && b )));
// console.log(!!( a && b ) == (a && b));
// console.log(x);  console.log(typeof(x));
// console.log("123"[2], "123"[1]);