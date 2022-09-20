/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined ;
*/

const isNum = (num) => {
  for (const i of num) {
    if (typeof i !== 'number') {
      throw new Error(undefined);
    }
  }

  /* for (let index = 0; index < num.length; index += 1) {
    if (typeof index === 'undefined' || typeof index === null) {
    return undefined;
    }
  } */
};

function isEmpty(num2) {
    if (num2.length === 0) {
      /* return undefined; */
      throw new Error(undefined); 
    }  
}

const average = (array) => {
  /* console.log(typeof []) */
  try { 
    isEmpty(array);
    isNum(array);

  let sum = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index]; 
  }

  const media = Math.round(sum / array.length);
  return media;
    } catch (error) {
    return undefined;
  } 
};

console.log(average([]));

module.exports = average;
