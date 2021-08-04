describe('Suite de testes da funcionalidade multiplicação da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve multiplicar dois numeros interios, 2 e 5, e retornar 10', function(){
		expect(myCalc.multiplicar(2, 5)).toEqual(10);
	});

	it('Deve multiplicar dois numeros em formato de texto, 4 e 3 , e retornar 12', function(){
		expect(myCalc.multiplicar('4', '3')).toEqual(12);
	});

	it('Deve multiplicar 1.5 e 3.5 e retornar 5.25', function(){
		expect(myCalc.multiplicar(1.5, 3.5)).toEqual(5.25);
	})

	it('Deve multiplicar 1.5 e 3.56 e retornar 5.34', function(){
		expect(myCalc.multiplicar(1.5, 3.56)).toEqual(5.34);
	})
});