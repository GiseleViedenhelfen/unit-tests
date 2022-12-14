/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (n, i) => {
if (typeof n !== 'string' || typeof i !== 'number') {
  return undefined;
}
return `Oi, meu nome é ${n}!
Tenho ${i} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};
console.log(vqv());
module.exports = vqv;
