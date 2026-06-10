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

## Execução em pipeline

Este projeto utiliza o GitHub Actions para garantir a qualidade do código através de um fluxo de Integração Contínua (CI).

### Gatilhos de Execução (Triggers)
A pipeline é disparada em três cenários:
- Push/Merge: Ativada automaticamente sempre que houver alterações na branch `main`.
-  Manual (workflow_dispatch): Permite que um desenvolvedor execute a pipeline manualmente pela aba "Actions" no GitHub.
-  Agendamento (cron): Execução programada para segundas, quartas e sextas-feiras às 07:00 UTC.

### Estrutura dos Jobs
A pipeline é dividida em dois estágios principais (jobs):

#### 1. Verificação de Código
Foca na integridade e padronização do código antes da execução de qualquer lógica.
- Checkout: Baixa o código do repositório para a máquina virtual.
- Setup Node: Configura o ambiente Node.js na versão mais recente.
- Instalação: Executa o `npm install` para baixar as dependências.
- Inspeção (Lint): Roda o ESLint para verificar erros de sintaxe e padrões de estilo.

#### 2. Testes Unitários
Executado somente se a verificação de código for bem-sucedida.
- Setup e Instalação: Prepara o ambiente para os testes.
- Execução dos Testes: Roda o comando `npm run test:report`, que utiliza o **Mocha** para validar as regras de negócio e gera um relatório visual.
- Upload de Artefato: Salva o relatório gerado pelo **Mochawesome** como um artefato da pipeline, permitindo que o resultado dos testes seja baixado e visualizado em formato HTML.
