describe('Validar informações do segmento "Sementeira"', () => {
  beforeEach(() => {
    const sementeira = 'a.seg-7'

    cy.acessarPaginaSegmento(sementeira)
  })

  //ct-06.0
  it('Validar página ativa', () => {
    const url = 'https://www.siagri.com.br/segmentos/sementeira'

    cy.validaPaginaAtiva(url)
  })

  //ct-06.1
  it('Validar informações do banner principal', () => {
    //No h2 tem um espaço antes do texto
    const elementoTitulo = '.segmentos-titulo-grid h2'
    const elementoDescricao = '.segmentos-titulo-grid p'
    const titulo = ' Softwares para gestão de sementeiras'
    const descricao = 'Ganhe eficiência no processo de beneficiamento de sementes. Com as soluções Siagri, você gerencia desde o recebimento do grão, até o embarque de sementes.'
    
    cy.validaInformacoesBannerPrincipal(elementoTitulo, titulo)
    cy.validaInformacoesBannerPrincipal(elementoDescricao, descricao)
    cy.validaFormularioContato()
  })  

  //ct-06.2
  it('Validar informações dos desafios do segmento', () => {
    //Gestão e vendas da semente => validei como se estivesse no singular mesmo.
    const elementoDesafios = '.segmentos-vantagens-grid'
    const desafios = ['Gestão de recebimento, produção e expedição de sementes', 'Controle de lotes', 
    'Gestão de vendas das semente', 'Logística de embarque', 'Gestão da colheita e armazenagem de grãos']
    
    cy.validaInformacoesDesafioSegmento(elementoDesafios, desafios)
  })

})