// <reference types ="Cypress"/>

const perfil = require('../fixtures/perfil.json')
const { faker } = require('@faker-js/faker')

beforeEach(() => {
  cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/');
});

describe('Funcionalidade login', () => {
  let emailFaker = faker.internet.email()
  let senhaFaker = faker.internet.password()

  it('Cenário: Login com e-mail e senha válidos', () => {
    //Deve exibir uma mensagem de sucesso ao realizar login.
    cy.login(perfil.email, perfil.senha)
    cy.get('h2').should('contain', 'Boas-vindas à Lacrei Saúde!')
  })


  it('Cenário 2: Login com e-mail válido e senha inválida', () => {
    //Deve exibir uma mensagem de credenciais inválidas.
    cy.login(perfil.email, senhaFaker)
    cy.get('.error-message > p').should('contain', 'Ops, e-mail ou senha incorretos.')
  });


  it('Cenário 3: Login com e-mail inválido e senha válida', () => {
    //Deve exibir uma mensagem de credenciais inválidas.
    cy.login(emailFaker, perfil.senha)
    cy.get('.error-message > p').should('contain', 'Ops, e-mail ou senha incorretos.')
  });


  it('Cenário 4: Login com e-mail e senha inválidos', () => {
    //Deve exibir uma mensagem de credenciais inválidas.
    cy.login(emailFaker, senhaFaker)
    cy.get('.error-message > p').should('contain', 'Ops, e-mail ou senha incorretos.')
  });


  it('Cenário 5: Login com email e senha vazios', () => {
    //Deve exibir uma mensagem de preenchimento de campo obrigatório.
    cy.LoginVazio()
    cy.get('.showOnlyErros > .error').should('contain', 'Campo obrigatório')
  });


  it('Cenário 6: Login com email vazio e senha válida', () => {
    //Deve exibir uma mensagem de preenchimento de campo obrigatório.
    cy.EmailVazioESenhaValida(perfil.senha)
    cy.get('.showOnlyErros > .error').should('contain', 'Campo obrigatório')
  });


  it('Cenário 7: Login com email válido e senha vazia', () => {
    //Deve exibir uma mensagem de preenchimento de campo obrigatório.
    cy.EmailValidoSenhaVazia(perfil.email)
    cy.get('.showOnlyErros > .error').should('contain', 'Campo obrigatório')
  });


})


