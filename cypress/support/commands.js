
//Comando customizado para realizar login válido.

Cypress.Commands.add('login', (email, senha) => {
    cy.get('.inputEmail > .sc-13cb1671-0 > .inputContainer').type(email)
    cy.get(':nth-child(2) > .inputContainer').type(senha)
    cy.get('.hdfRWQ > .sc-f3c66ae8-1').click()
})


Cypress.Commands.add('LoginVazio', () => {
    cy.get('.hdfRWQ > .sc-f3c66ae8-1').click()
})


Cypress.Commands.add('EmailVazioESenhaValida', (senha) => {
    cy.get(':nth-child(2) > .inputContainer').type(senha)
    cy.get('.hdfRWQ > .sc-f3c66ae8-1').click()
})


Cypress.Commands.add('EmailValidoSenhaVazia', (email) => {
    cy.get('.inputEmail > .sc-13cb1671-0 > .inputContainer').type(email)
    cy.get('.hdfRWQ > .sc-f3c66ae8-1').click()
})


Cypress.Commands.add('CadastroValido', (nome, sobrenome, email, senha) => {
    cy.get('.LiRAN > .sc-f3c66ae8-1').click()
    cy.get('form > :nth-child(1) > .inputContainer').type(nome)
    cy.get(':nth-child(2) > .inputContainer').type(sobrenome)
    cy.get('.inputEmail > .sc-13cb1671-0 > .inputContainer').type(email)
    cy.get(':nth-child(4) > .inputContainer').type(senha)
    cy.get(':nth-child(5) > .inputContainer').type(senha)
    cy.get(':nth-child(6) > .sc-ed033677-1 > .sc-ed033677-2 > .sc-ed033677-3 > .sc-ed033677-4').click()
    cy.get(':nth-child(7) > .sc-ed033677-1 > .sc-ed033677-2 > .sc-ed033677-3').click()
    cy.get('.hdfRWQ > .sc-f3c66ae8-1').click()

})
