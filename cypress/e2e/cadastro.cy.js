//<reference types="Cypress"/>
const perfil = require('../fixtures/perfil.json')
const { faker } = require('@faker-js/faker')

beforeEach(() => {
  cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/');
});

describe('Funcionalidade: Cadastro', () => {

  let emailFaker = faker.internet.email()
  let senhaFaker = faker.internet.password()
  let senha = "Abc123!@"

  it('Cenário 1: Cadastro com credenciais válidas', () => {
    //Deve exibir uma mensagem de sucesso.
    cy.CadastroValido('sergio', 'dornelas', emailFaker, senha, senha)
    cy.get('.box-info > :nth-child(1)').should('contain', 'O e-mail pode demorar alguns minutos para chegar.')
  })


})