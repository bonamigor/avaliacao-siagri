describe('Validar informações do segmento "Loja Agropecuária"', () => {
  beforeEach(() => {
    const lojaAgropecuaria = 'a.seg-4'

    cy.acessarPaginaSegmento(lojaAgropecuaria)
  })

  //ct-03.0
  it('Validar página ativa', () => {
    const url = 'https://www.siagri.com.br/segmentos/loja-agropecuaria'

    cy.validaPaginaAtiva(url)
  })

  //ct-03.1
  it('Validar informações do banner principal', () => {
    const elementoTitulo = '.segmentos-titulo-grid h2'
    const elementoDescricao = '.segmentos-titulo-grid p'
    const titulo = 'Softwares para gestão de lojas e varejo agropecuário'
    const descricao = 'Ganhe agilidade em vendas, confiança nos controles de estoque e custos. Fidelize seu cliente e gerencie sua loja agropecuária de forma completa com o software Siagri.'
    
    cy.validaInformacoesBannerPrincipal(elementoTitulo, titulo)
    cy.validaInformacoesBannerPrincipal(elementoDescricao, descricao)
    cy.validaFormularioContato()
  })   

  //ct-03.2
  it('Validar informações dos desafios do segmento', () => {
    const elementoDesafios = '.segmentos-vantagens-grid'
    const desafios = ['Agilidade no atendimento', 'Eficiência operacional', 'Controle de comissionamento', 
    'Conformidade fiscal', 'Eficiência no fluxo de caixa em dia']

    cy.validaInformacoesDesafioSegmento(elementoDesafios, desafios)
  })

})