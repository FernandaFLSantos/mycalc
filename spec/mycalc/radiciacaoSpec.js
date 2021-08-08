describe('Suite de testes da funcionalidade radiciacao da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve radiciacao  numeros interios, 4 , e retornar ', function(){
		expect(myCalc.radiciacao(4)).toEqual(2);
	});

	it('Deve radiciacao  numeros em formato de texto, 49, e retornar 7', function(){
		expect(myCalc.radiciacao('49')).toEqual(7);
	});

	it('Deve radiciacao e 10,5 e retornar 3.24', function(){
		expect(myCalc.radiciacao(10.5)).toEqual(3.24);
	});

	it('Deve radiciacao e 10.72 e retornar 3.27', function(){
		expect(myCalc.radiciacao(10.72)).toEqual(3.27);
	});
});