describe('Validar informações do segmento "Distribuidor de Insumos"', () => {
  beforeEach(() => {
    cy.visit('https://www.siagri.com.br/')
    cy.get('.dropdown-toggle:first').click();
    cy.get('.show > .dropdown-item:nth-child(1)').click();
  })

  //ct-02.0
  it('Validar informações do segmento "Distribuidor de Insumos"', () => {
    cy.get('a.seg-3').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://www.siagri.com.br/segmentos/distribuidor-insumos')
    })
  })

})