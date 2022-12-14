/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const testSting = (a) => {
  let contador = 0;
  let media = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (typeof a[index] !== 'number') {
      return undefined;
    }
    contador += a[index];
  }
  media = Math.round(contador / a.length);
  return media;
};
const average = (a) => {
  if (a.length === 0) {
    return undefined;
  }
  const teste1 = testSting(a);
  return teste1;
};
console.log(average([10, 2]));
module.exports = average;
