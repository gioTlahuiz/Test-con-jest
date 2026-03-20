const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// pruebas unitarias de la funcion de multiplicacion 

test('multiply 34*5 is equal to 170', () =>{
  expect(calculator.multiply(34,5)).toBe(170)
});

test('multiply 12*5 is equal to 60', () =>{
  expect(calculator.multiply(12,5)).toBe(60)
});

// pruebas unitarias para la funcion de division

test('divide 850/5 is equal to 170', () =>{
  expect(calculator.divide(850,5)).toBe(170)
});

test('divide 432/3 is equal to 144', () =>{
  expect(calculator.divide(432,3)).toBe(144)
});

test('dividir un numero entre 0', () =>{
  expect(calculator.divide(10,0)).toBe(0)
});