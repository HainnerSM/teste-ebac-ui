/// <reference types="cypress" />


var faker = require('faker');



describe('Funcionalidade de pré cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    it('Deve realizar o pré cadastrom com sucesso', () => {
        cy.get('#reg_email').type('joaa2938@email.com')
        cy.get('#reg_password').type('Senha12F1!')
        cy.get(':nth-child(4) > .button').click()


        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Pablo')
        cy.get('#account_last_name').type('Puebloe')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)')('A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')





        

        
    });

});