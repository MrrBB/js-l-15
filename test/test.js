
describe('sum', function(){
	it("Проверяем на true", function(){		
		assert.isFalse(sum(), true) 
	})


	it("Проверяем на равенство", function(){
	assert.equal(num, 5) 
	});

		describe('Проверка each', function(){
		it("тип данных функции - объект", function(){
			assert.typeOf(each, "function");
		})
		it("Соответствие ожидаемому результату [8,7,6,5,4]", function(){
			assert.equal(each(myFunc, array)[0], "8");
			assert.equal(each(myFunc, array)[1], "7");
			assert.equal(each(myFunc, array)[2], "6");
			assert.equal(each(myFunc, array)[3], "5");
			assert.equal(each(myFunc, array)[4], "4");
			// не знаю можно ли добавлять новые переменные
			JSON.stringify(each(myFunc, array)) === JSON.stringify(rightArray)
		})
		it('Проверка на длину', function(){
			assert.equal((each(myFunc, array)).length, 5);
		})
	})
})