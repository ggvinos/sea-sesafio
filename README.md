# Desafio Analista de Testes - SEA Tecnologia

## 1. Sumário Executivo e Estratégia de Avaliação

O objetivo deste desafio foi avaliar a qualidade do módulo de **Admissão e Gestão de Funcionários** em um sistema web fictício. A avaliação foi conduzida sob o escopo de um Analista de Testes Pleno, cobrindo o fluxo principal de cadastro (com e sem EPIs) e a gestão pós-cadastro.

### 🎯 Resultados Chave
| Item | Status | Observações |
| :--- | :--- | :--- |
| **Cobertura Funcional** | ✅ Completa | O fluxo principal de cadastro foi coberto 100% por automação E2E. |
| **Validações de Input** | ❌ Falha Crítica | Identificadas falhas de validação em campos críticos (CPF, Data), resultando em alta severidade no Bug Report. |
| **Automação** | ✅ Completa | Implementada com Cypress para garantir a repetibilidade e velocidade dos testes. |
| **Documentação** | ✅ Completa | Seguiu a metodologia formal (Plano de Testes, Casos de Teste e Reporte de Bugs). |

---

## 2. Abordagem e Estratégia de Teste

Conforme detalhado no Plano de Testes, a estratégia adotada foi a **Análise Reversa** para identificar os requisitos de negócio e priorizar os testes com base em **Risco**.

### Justificativa de Ferramentas e Metodologia

* **Priorização:** Dada a natureza do sistema (controle de 9 etapas de admissão obrigatórias), a **Alta Prioridade** foi dada aos testes que poderiam causar **perda de dados** (Ex: Falha no botão "Adicionar outra atividade") ou **corrupção de dados** (Validação de CPF/RG).
* **Cypress:** Escolhido por sua rapidez na execução E2E, fácil setup e familiaridade com JavaScript, permitindo uma entrega rápida da cobertura.
* **Estrutura de Código:** A automação foi escrita com foco na legibilidade e na facilidade de manutenção (usando Locators claros).

### 📑 Documentação Detalhada
Todos os documentos de suporte para este relatório estão na pasta `Documentos/`:

* **Plano de Testes:** [Link para `PLANO_DE_TESTES.md`](./Documentos/PLANO_DE_TESTES.md)
* **Casos de Teste (CT-FUNC-001):** [Link para `CASOS_DE_TESTE.md`](./Documentos/CASOS_DE_TESTE.md)
* **Relatório de Bugs:** [Link para `BUGS_ENCONTRADOS.md`](./Documentos/BUGS_ENCONTRADOS.md)

---

## 3. Análise Reversa e Principais Descobertas

Com base na análise dos fluxos e protótipos, o sistema é um *Workflow* de Admissão de RH.

### 🔴 Bugs Mais Críticos (Destaque do Relatório de Bugs)

Os bugs de **Severidade Alta** que impactam diretamente a integridade dos dados e o fluxo de trabalho:

1.  **Perda de Dados no Formulário:** Clicar em "Adicionar outra atividade" resulta na perda de todos os dados preenchidos e retorno ao menu (Bug Crítico).
2.  **Falha Crítica na Validação de Dados:** Campos críticos como CPF e RG aceitam qualquer tipo de caractere (`text` problemático), comprometendo a integridade do banco de dados.
3.  **Bloqueio de Manutenção:** O botão de "Opções" não abre o menu de Alterar/Excluir, impedindo o gerenciamento pós-cadastro.

### Estrutura de Arquivos (Conforme Evidenciado)

O projeto segue a estrutura padrão Node/Cypress para fácil execução:

## 4. Tutorial Resumido de Execução

Para verificar a automação dos testes E2E:

1.  **Clone o Repositório:**
    `git clone [link do seu GitHub]`
2.  **Instale as Dependências (Node):**
    `npm install`
3.  **Abra o Cypress:**
    `npx cypress open`
4.  **Execute:** Na janela do Cypress, clique em `spec.cy.js` para rodar o fluxo completo de cadastro.