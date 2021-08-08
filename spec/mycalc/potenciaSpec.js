describe('Suite de testes da funcionalidade potenciacao da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve potenciacao  numeros interios, 10 e 2, e retornar 100', function(){
		expect(myCalc.potenciacao(10, 2)).toEqual(100);
	});

	it('Deve potenciacao  numeros em formato de texto, 4 e -2, e retornar 0,06', function(){
		expect(myCalc.potenciacao('4', '-2')).toEqual(0.06);
	});

	it('Deve potenciacao e 10.5 e 2.5 retornar 357.25', function(){
		expect(myCalc.potenciacao(10.5, 2.5)).toEqual(357.25);
	});

	it('Deve potenciacao e 10.58 e  2.4 retornar 287.58', function(){
		expect(myCalc.potenciacao(10.58, 2.4)).toEqual(287.58);
	});
});