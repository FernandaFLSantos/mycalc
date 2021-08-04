describe('Suite de testes da funcionalidade dividir da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve dividir  numeros interios, 10 e 2, e retornar 5', function(){
		expect(myCalc.dividir(10, 2)).toEqual(5);
	});

	it('Deve dividir  numeros em formato de texto, 4 e -2, e retornar -2', function(){
		expect(myCalc.dividir('4', '-2')).toEqual(-2);
	});

	it('Deve dividir e 10,5 e retornar 2,0', function(){
		expect(myCalc.dividir(10.5, 2.0)).toEqual(5.25);
	})

	it('Deve dividir e 10,58 e retornar 2,4', function(){
		expect(myCalc.dividir(10.58, 2.4)).toEqual(4.41);
	})
});