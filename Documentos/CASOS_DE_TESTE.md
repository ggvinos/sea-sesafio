# Especificação de Casos de Teste
**Projeto:** Desafio QA - SEA Tecnologia  
**Módulo:** Gestão de Funcionários (Admissão)  
**Data:** 20/11/2025  
**Autor:** *Vinicios Ferreira*

---

## 📝 CT-FUNC-001: Cadastro de Funcionário sem EPI

**Objetivo:** Garantir que o sistema realize o cadastro correto de um funcionário que não utiliza Equipamentos de Proteção Individual (EPIs), validando a persistência dos dados e a integridade dos campos obrigatórios.

**Pré-condições:**
1. O usuário deve estar logado na aplicação.
2. O usuário deve estar na tela inicial "Funcionários".

**Dados:**
* **Nome:** João Silva
* **CPF:** 123.456.789-00
* **Nascimento:** 01/01/1990
* **RG:** 12.345.678-9
* **Cargo:** Atendente

---

### Roteiro de Execução

| Passo | Ação | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- |
| **1** | Clicar no botão "Adicionar Funcionário". | O formulário de cadastro deve ser exibido corretamente. | ✅ |
| **2** | Tentar salvar sem preencher nenhum dado. | O sistema deve impedir o cadastro e sinalizar os campos obrigatórios (Nome, CPF, RG, Nascimento). | ✅ |
| **3** | Preencher o campo **CPF** com letras e caracteres especiais. | O campo não deve aceitar letras e deve formatar a entrada (máscara: 000.000.000-00). | ❌ |
| **4** | Preencher o campo **Data de Nascimento** com uma data futura. | O sistema deve apresentar mensagem de erro ou impedir a seleção. | ❌ |
| **5** | Preencher todos os campos obrigatórios com dados válidos (Massa de Teste). | Todos os campos devem aceitar os dados conforme digitado. | ✅ |
| **6** | Marcar o checkbox **"O trabalhador não usa EPI"**. | A seção de formulário de EPIs deve ser ocultada ou bloqueada para edição. | ✅ |
| **7** | (Opcional) Clicar em "Selecionar arquivo" e fazer upload de um Atestado. | O nome do arquivo selecionado deve ser exibido ao lado do botão. | ✅ |
| **8** | Clicar no botão **"Salvar"**. | O sistema deve redirecionar para a listagem e exibir o novo funcionário criado. | ✅ |
| **9** | Na listagem, clicar no botão **"Opções" (...)**. | Deve abrir um menu de contexto com as opções "Alterar" e "Excluir". | ❌ |
| **10** | No rodapé, marcar "Sim" para "Etapa está concluída?". | O botão "Próximo Passo" deve ficar habilitado (clicável). | ❌ |

---

### 🔍 Testes Exploratórios Adicionais (Pós-Execução)

| Funcionalidade | Verificação | Status |
| :--- | :--- | :--- |
| **Filtro de Ativos** | Ativar o switch "Ver apenas ativos". O funcionário recém-criado deve aparecer/desaparecer conforme seu status. | ✅ |
| **Limpar Filtros** | Clicar em "Limpar filtros". A lista deve retornar ao estado original. | ✅ |
| **Visualização de Dados** | Verificar se o CPF exibido na lista respeita a formatação (pontos e traço). | ❌ |

---

### 📊 Resumo da Execução
* **Status Final do Caso de Teste:** 🔴 FALHA
* **Observações:** O fluxo principal de cadastro funciona, porém há falhas críticas nas validações de input (CPF, Data) e nas funcionalidades de edição/navegação pós-cadastro.
* **Bugs Relacionados:**
    * [BUG-001] Falha na Validação do Campo CPF
    * [BUG-004] Botão "Opções" não responde
    * [BUG-005] Bloqueio de Navegação ("Próximo Passo")