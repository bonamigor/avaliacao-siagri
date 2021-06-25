describe('Acessar o site e clicar em "Soluções" e depois em Segmentos', () => {
  
  //Visitar Site Siagre antes de todos os its
  beforeEach(() => {
    cy.visit('https://www.siagri.com.br/')
    cy.get('.dropdown-toggle:first').click();
    cy.get('.show > .dropdown-item:nth-child(1)').click();
  })

  //ct-01
  it('Validar segmentos atendidos pelas soluções SIAGRI', () => {
    cy.get('section.container-fluid.d-flex.justify-content-center.nav-segmentos').
    should('contain', 'Distribuidor de insumos')
    .and('contain', 'Loja agropecuária')
    .and('contain', 'Armazéns gerais')
    .and('contain', 'Produtor agrícola')
    .and('contain', 'Sementeira')
    .and('contain', 'Outros')
  })
})