const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
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

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  /* it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    fail('Teste vazio!'); */
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
    it('test if product details is a function', () => {
      expect(typeof productDetails).toBe('function');
    })
    it('test if return this function is a array', () => {
      expect(productDetails()).isArray;
    })
    it('test if array contain two itens', () => {
      expect(productDetails('iten1', 'iten2')).toEqual([{'details': {'productId': 'iten1123'}, 'name': 'iten1'}, {'details': {'productId': 'iten2123'}, 'name': 'iten2'}])
    })
    it('test if two itens is object', () => {
      expect(productDetails()).isObject
    })
    it('test if parameters is diferent', () => {
      expect(productDetails('iten1', 'iten2')).toEqual([{"details": {"productId": "iten1123"}, "name": "iten1"}, {"details": {"productId": "iten2123"}, "name": "iten2"}])
    })
    it('test if two productId have 123', () => {
      expect(productDetails('1', '2')[0].details.productId).toMatch(/123/);
      expect(productDetails('1', '2')[1].details.productId).toMatch(/123/);

      
    })

  });

