describe('Desafio SEA Tecnologia', () => {

    // ==============================================================
    // SELETORES (Locators)
    // Organizado para fácil manutenção
    // ==============================================================
    const EL = {
        btnAdicionar: '.c-kUQtTK',
        btnSalvar: '.save',
        btnFiltroAtivos: '.c-hfAyug > :nth-child(1)',
        switchAtivo: '.ant-switch-inner',
        checkboxSemEPI: '.ant-checkbox-input',
        
        // Campos do Formulário Pessoal
        inputNome: ':nth-child(1) > .c-jzRMpM',
        inputCpf: ':nth-child(3) > .c-jzRMpM',
        inputData: ':nth-child(4) > .c-jzRMpM',
        inputRg: ':nth-child(5) > .c-jzRMpM',
        
        // Campos de EPI
        selectAtividade: '.c-iPKsQj > :nth-child(1)',
        opcaoAtividade: '[title="Ativid 04"] > .ant-select-item-option-content',
        inputCA: ':nth-child(2) > .c-jzRMpM'
    }

    // ==============================================================
    // DADOS
    // ==============================================================
    const nome1 = "Joao"
    const cpf1 = "100.000.000-00"

    const nome2 = "Jorge"
    const cpf2 = "200.000.000-00"

    const nome3 = "Marcos"
    const cpf3 = "300.000.000" // Ajustado formato que a aplicação esta aceitando


    // ==============================================================
    // TESTES
    // ==============================================================

    it('Criação de dados do novo funcionario SEM EPI', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get(EL.btnAdicionar).click()

        cy.get(EL.inputNome).type(nome1)
        cy.get(EL.inputCpf).type(cpf1)
        cy.get(EL.inputData).type('2021-06-16')
        cy.get(EL.inputRg).type(cpf1)

        cy.get(EL.checkboxSemEPI).click() // Desativar caixa de EPI
        cy.get(EL.btnSalvar).click()
    })

    it('Verifica se o funcionário Sem EPI aparece na aplicação', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.contains(nome1, { timeout: 8000 }).should('exist')
        
        cy.contains(cpf1, { timeout: 8000 }).should('exist')
    })

    it('Criação de dados do novo funcionario COM EPI', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get(EL.btnAdicionar).click()

        cy.get(EL.inputNome).type(nome2)
        cy.get(EL.inputCpf).type(cpf2)
        cy.get(EL.inputData).type('2021-06-16')
        cy.get(EL.inputRg).type(cpf2)

        // Dados de EPI
        cy.get(EL.selectAtividade).click()
        cy.get(EL.opcaoAtividade).click()
        cy.get(EL.inputCA).type("312313131313")
        
        cy.get(EL.btnSalvar).click()
    })

    it('Verifica se o funcionário com EPI aparece na aplicação', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.contains(nome2, { timeout: 8000 }).should('exist')
        
        cy.contains(cpf2, { timeout: 8000 }).should('exist')
    })

    it('Criação de dados do novo funcionario SEM EPI ATIVO', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get(EL.btnAdicionar).click()

        cy.get(EL.switchAtivo).click() // Ativar "trabalhador está ativo"

        cy.get(EL.inputNome).type(nome3)
        cy.get(EL.inputCpf).type(cpf3)
        cy.get(EL.inputData).type('2021-06-16')
        cy.get(EL.inputRg).type(cpf3)

        cy.get(EL.checkboxSemEPI).click() // Desativar caixa de EPI
        cy.get(EL.btnSalvar).click()
    })

    it('Verifica se o funcionário Ativo aparece na lista filtrada', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        
        cy.get(EL.btnFiltroAtivos).click() // Clica no botão "Ver apenas ativos"

        cy.contains(nome3, { timeout: 8000 }).should('exist')
        
        cy.contains(cpf3, { timeout: 8000 }).should('exist')
    })

})