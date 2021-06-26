// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('acessarPaginaSegmento', (elemento) => {
  cy.visit('https://www.siagri.com.br/')
  cy.get('.dropdown-toggle:first').click();
  cy.get('.show > .dropdown-item:nth-child(1)').click();

  //Condição referente a reutilização do método para Classe de Teste ct-01.spec.js
  if(elemento !== undefined) {
    cy.get(elemento).click();
  }
})

Cypress.Commands.add('validaPaginaAtiva', (url) => {
  cy.location().should((loc) => {
    expect(loc.href).to.eq(url)
  })
})

Cypress.Commands.add('validaInformacoesBannerPrincipal', (elemento, texto) => {
  cy.get(elemento).should('have.text', texto)
})

Cypress.Commands.add('validaFormularioContato', () => {
  cy.get('.segmentos-titulo-grid .form-open').click();
  cy.get('#modal-form').should('be.visible')
})

Cypress.Commands.add('validaInformacoesDesafioSegmento', (elemento, desafios) => {
  desafios.forEach((desafio) => {
    cy.get(elemento).should('contain', desafio)
  });
})