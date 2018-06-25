// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(6,7);
// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];




// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.


let each = function(f,startArr){
	return f(startArr)
};

let array = [64, 49, 36, 25, 16],
	rightArray = [8,7,6,5,4];
let myFunc = function(a){
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};

console.log(each(myFunc, array));