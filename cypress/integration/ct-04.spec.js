describe('Validar informações do segmento "Armazéns Gerais"', () => {
  beforeEach(() => {
    const armazensGerais = 'a.seg-5'

    cy.acessarPaginaSegmento(armazensGerais)
  })

  //ct-04.0
  it('Validar página ativa', () => {
    const url = 'https://www.siagri.com.br/segmentos/armazens-gerais'

    cy.validaPaginaAtiva(url)
  })

  //ct-04.1
  it('Validar informações do banner principal', () => {
    const elementoTitulo = '.segmentos-titulo-grid h2'
    const elementoDescricao = '.segmentos-titulo-grid p'
    const titulo = 'Softwares para gestão de armazéns gerais e cerealistas'
    const descricao = 'Ganhe eficiência desde o recebimento até a expedição dos grãos. Com o Grupo Siagri, você gerencia todos os processos de armazenagem de grãos com agilidade e segurança.'
    
    cy.validaInformacoesBannerPrincipal(elementoTitulo, titulo)
    cy.validaInformacoesBannerPrincipal(elementoDescricao, descricao)
    cy.validaFormularioContato()
  })   

  //ct-04.2
  it('Validar informações dos desafios do segmento', () => {
    const elementoDesafios = '.segmentos-vantagens-grid'
    const desafios = ['Gestão de contratos', 'Controle de saldos de terceiros', 'Controle de retenções e transgenia', 
    'Análise de exposição', 'Controle de serviços prestados']
    
    cy.validaInformacoesDesafioSegmento(elementoDesafios, desafios)
  })

})