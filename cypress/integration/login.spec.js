/// <reference types="cypress" />

context ('Funcionalidade login', () => {

    it ('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1)').should('contain','Welcome aluno_ebac')
    

    })

    it ('Deve exibir uma mensagem de erro ao inserir usuario inválido', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno2ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste11@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')

    })

}
)