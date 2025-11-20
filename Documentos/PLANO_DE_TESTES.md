# Plano de Testes
**Título do Projeto:** Avaliação da Qualidade do Sistema de Gestão de Funcionários (SEA Tecnologia)
**Versão:** 1.0
**Data de Elaboração:** 20/11/2025
**Elaborado por:** Vinicios ferreira

---

## 1. Objetivo do Plano de Testes

O principal objetivo deste plano é definir a estratégia, escopo e recursos necessários para avaliar a qualidade e funcionalidade do módulo de Cadastro de Funcionários e seus filtros de listagem.

O plano visa garantir que o fluxo principal de admissão de funcionários, tanto com quanto sem EPIs, esteja funcional e que os dados críticos (CPF, RG) estejam sendo armazenados com integridade básica.

## 2. Tipos de Testes a Serem Realizados

| Tipo de Teste | Foco | Justificativa |
| :--- | :--- | :--- |
| **Funcionais** | Fluxo de Cadastro, botões, filtros, persistência de dados. | Garante que o sistema atende aos requisitos de negócio (Baseado na minha experiencia). |
| **Não-Funcionais (Usabilidade)** | Experiência básica do usuário, consistência visual, ausência de scroll. | Identifica falhas de UX que impactam a utilização diária  |
| **Segurança (Simples)** | Validação de entradas (inputs) e restrições de campos críticos (CPF, Data, Upload). | Protege a integridade do banco de dados e evita injeção de dados maliciosos. |
| **Interface (UI)** | Navegação, comportamento visual, pensionamento dos elementos, fontes. | Garante a consistência visual e o correto dimensionamento na tela . |

## 3. Escopo dos Testes (Funcionalidades Cobertas)

Abaixo estão as funcionalidades testadas, que guiaram a criação dos Casos meus Teste:

| Funcionalidade | Detalhe da Verificação |
| :--- | :--- |
| **Cadastro Principal** | Criação de funcionário sem e com EPIs. |
| **Obrigatoriedade** | Validação de Nome, CPF, Data de Nascimento e RG. |
| **Validações de Campo** | Restrições de tamanho (RG), formato (CPF, Data) e aceitação de caracteres. |
| **Fluxo EPI** | Seleção de atividade, inserção de CA, comportamento dos botões "Adicionar EPI" e "Adicionar outra atividade". |
| **Upload de Arquivo** | Seleção de Atestado de Saúde Ocupacional, validação de tipos e tamanhos permitidos. |
| **Listagem (Home)** | Visualização de novos funcionários na lista e usabilidade do scroll. |
| **Filtros** | Funcionamento do filtro "Ver apenas ativos" e botão "Limpar filtros". |
| **Ações na Lista** | Funcionamento do menu "Opções" (Alterar/Excluir). |
| **Navegação** | Comportamento do radio "Etapa está concluída?" e do botão "Próximo passo". |

## 4. Priorização de Testes (Baseado em Risco)

A priorização é baseada no impacto da falha no fluxo de trabalho principal do usuário (Risco).

| Prioridade | Critério | Funcionalidades |
| :--- | :--- | :--- |
| **Alta** | Impede o fluxo principal de trabalho (Bloqueadores). | **1. Cadastro de funcionário (fluxo principal)** |
| | | 2. Campos obrigatórios (sem eles, não há dado). |
| | | 3. **Botões que quebram o fluxo** ("Adicionar outra atividade"). |
| | | 4. **Botões que não funcionam** ("Adicionar EPI", "Próximo passo"). |
| | | 5. Navegação entre formulários. |
| **Média** | Afeta a manutenção de dados ou usabilidade diária. | 1. Validações de entrada de dados (CPF, Data, etc.). |
| | | 2. Filtros da lista de funcionários (Ver ativos, Limpar). |
| | | 3. Exibição das opções alterar/excluir (Botão "Opções"). |
| **Baixa** | Problemas estéticos ou requisitos não críticos. | 1. Ausência de instrução sobre tamanho/formato de arquivo. |
| | | 2. Fonte Diferente do protótipo. |
| | | 3. Pensionamento incorreto de botões (pequenos desvios de UI). |

## 5. Estratégia de Execução e Ferramentas

| Aspecto | Detalhes |
| :--- | :--- |
| **Ferramentas de Execução** | **Cypress:** Para automação de testes E2E (End-to-End) nos fluxos críticos. |
| | **Testes Manuais:** Para testes Exploratórios, Usabilidade e Validações de UI (Baixa Prioridade). |
| **Ferramenta de Gestão** | **Notion / Markdown:** Utilizado para documentação (Casos de Teste, Plano de Teste e Bug Report). |
| **Evidências** | GIFs  |
| **Critérios de Passagem** | 100% dos testes de Alta Prioridade (Critérios 1, 3, 4) e Alta Severidade no Bug Report devem ser corrigidos para a aprovação do projeto. |

---

## 6. Documentos de Referência

* **Automação:** `desafio_sea.cy.js` (Código Cypress)
* **Resultados:** `CASOS_DE_TESTE.md` (Com status de execução)
* **Defeitos:** `BUGS_ENCONTRADOS.md` (Com prioridade e severidade)