describe('Acessar o site e clicar em "Soluções" e depois em Segmentos', () => {
  beforeEach(() => {
    cy.acessarPaginaSegmento()
  })

  //ct-01
  it('Validar segmentos atendidos pelas soluções SIAGRI', () => {
    const elemento = 'section.container-fluid.d-flex.justify-content-center.nav-segmentos'
    const segmentos = ['Distribuidor de insumos', 'Loja agropecuária', 'Armazéns gerais',
    'Produtor agrícola', 'Sementeira', 'Outros']

    cy.validaInformacoesDesafioSegmento(elemento, segmentos)
  })
})