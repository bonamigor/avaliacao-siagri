describe('Validar informações do segmento "Produtor Agrícola"', () => {
  beforeEach(() => {
    const produtorAgricola = 'a.seg-6'

    cy.acessarPaginaSegmento(produtorAgricola)
  })

  //ct-05.0
  it('Validar página ativa', () => {
      const url = 'https://www.siagri.com.br/segmentos/produtor-agricola'

      cy.validaPaginaAtiva(url)
  })

  //ct-05.1
  it('Validar informações do banner principal', () => {
    //No h2 tem um espaço antes do texto
    const elementoTitulo = '.segmentos-titulo-grid h2'
    const elementoDescricao = '.segmentos-titulo-grid p'
    const titulo = ' Softwares de gestão para produtores de grãos e algodão'
    const descricao = 'Gestão do planejamento da safra à contabilidade. Com o Grupo Siagri você gerencia seu negócio de ponta a ponta, centralizando a gestão administrativa, financeira, fiscal e operacional.'
    
    cy.validaInformacoesBannerPrincipal(elementoTitulo, titulo)
    cy.validaInformacoesBannerPrincipal(elementoDescricao, descricao)
    cy.validaFormularioContato()
  })   

  //ct-05.2
  it('Validar informações dos desafios do segmento', () => {
    const elementoDesafios = '.segmentos-vantagens-grid'
    const desafios = ['Planejamento de safra', 'Gestão de estoque (armazenagem)', 'Controle de custos',
    'Padronização de processos', 'Gestão orçamentária']
    
    cy.validaInformacoesDesafioSegmento(elementoDesafios, desafios)
  })

})