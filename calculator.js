const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

// corregir la funcion divide para que maneje division entre 0
function divide(a, b){
  if(b === 0){
    return 0;
  } else{
    return a / b;
  }
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide:divide, multiply:multiply};