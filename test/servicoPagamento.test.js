import { servicoPagamento } from '../src/servicoPagamentos.js';
import assert from 'node:assert';


describe('Teste da classe servicoPagamento', function() {
  it('Deve realizar um pagamento e consultar o último pagamento', function() {
    const servico = new servicoPagamento();

    servico.realizarPagamento('0987-7656-3475', 'nintendo', 101);
    const ultimoPagamento = servico.consultarUltimoPagamento();
    console.log(ultimoPagamento);
    
    assert.deepEqual(ultimoPagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'nintendo',
      valor: 101,
      categoria: 'cara'
    });
  });

  it('Pagamento com valor MENOR que 100 deve retornar categoria padrão', function() {
    const servico = new servicoPagamento();

    servico.realizarPagamento('1234-5678-9012', 'sony', 50);
    const ultimoPagamento = servico.consultarUltimoPagamento();
 
    assert.deepEqual(ultimoPagamento, {
      codigoBarras: '1234-5678-9012',
      empresa: 'sony',    
      valor: 50,
      categoria: 'padrão'
    });
  });

  it('Pagamento com valor MAIOR que 100 deve retornar categoria cara', function() {
    const servico = new servicoPagamento();

    servico.realizarPagamento('1234-5678-9012', 'microsoft', 101);
    const ultimoPagamento = servico.consultarUltimoPagamento();
 
    assert.deepEqual(ultimoPagamento, {
      codigoBarras: '1234-5678-9012',
      empresa: 'microsoft',    
      valor: 101,
      categoria: 'cara'
    });
  });
});

// equal nao compara os valores internor
// deepEqual compara os valores internos, ou seja, o conteúdo dos objetos, mesmo que sejam objetos diferentes na memória.