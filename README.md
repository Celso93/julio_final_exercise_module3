# Serviço de Pagamentos

Projeto de estudo que implementa uma classe de serviço de pagamentos em JavaScript.

## Descrição

A classe deve:

- armazenar pagamentos em um array
- permitir realizar um pagamento
- consultar o último pagamento realizado
- adicionar a propriedade `categoria` com valor `cara` quando o pagamento for maior que `100.00`
- adicionar a propriedade `categoria` com valor `padrão` quando o pagamento for menor ou igual a `100.00`

## Estrutura do projeto

- `src/servicoPagamentos.js` — implementação da classe de serviço de pagamentos
- `test/servicoPagamento.test.js` — testes com Mocha e `node:assert`

## Instalação

```bash
npm install
```

## Execução dos testes

```bash
npm test
```

Relatório de testes com Mochawesome:

```bash
npm run test:report
```