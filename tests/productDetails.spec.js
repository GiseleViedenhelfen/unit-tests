const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function')
    // Teste se o retorno da função é um array.
    expect(typeof(productDetails())).toBe('object')
    // Teste se o array retornado pela função contém dois itens dentro.
  expect(productDetails().length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof(productDetails())).toBe('object')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    //peguei essa parte inspirada no codigo do colega Caio de Souza
    expect(productDetails('Alcool', 'Máscara')[0] !== productDetails('Alcool', 'Máscara')[1]).toBe(true)
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool', 'Máscara')[0].details.productId).toContain('123')
    expect(productDetails('Alcool', 'Máscara')[1].details.productId).toContain('123')
  });
});
