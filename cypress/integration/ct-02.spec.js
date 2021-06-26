describe('Validar informações do segmento "Distribuidor de Insumos"', () => {
  beforeEach(() => {
    const distribuidorDeInsumos = 'a.seg-3'
    
    cy.acessarPaginaSegmento(distribuidorDeInsumos)
  })

  //ct-02.0
  it('Validar página ativa', () => {
    const url = 'https://www.siagri.com.br/segmentos/distribuidor-insumos'
    
    cy.validaPaginaAtiva(url)
  })

  //ct-02.1
  it('Validar informações do banner principal', () => {
    const elementoTitulo = '.segmentos-titulo-grid h2'
    const elementoDescricao = '.segmentos-titulo-grid p'
    const titulo = 'Softwares para gestão de distribuidores de insumos agrícolas'
    const descricao = 'Otimize processos, reduza desperdícios e tenha o controle de suas lojas em qualquer hora e lugar. Com o Grupo Siagri, você compra melhor, evita perdas no estoque, vende com mais eficiência e ainda tem mais segurança nas operações de Barter!'
    
    cy.validaInformacoesBannerPrincipal(elementoTitulo, titulo)
    cy.validaInformacoesBannerPrincipal(elementoDescricao, descricao)
    cy.validaFormularioContato()
  })   

  //ct-02.2
  it('Validar informações dos desafios do segmento', () => {
    const elementoDesafios = '.segmentos-vantagens-grid'
    const desafios = ['Estoque eficiente', 'Formação de preços', 'Gestão de logística (expedição)', 
    'Ampliar mix de atividades (armazenagem, Barter etc)', 'Gestão orçamentária']

    cy.validaInformacoesDesafioSegmento(elementoDesafios, desafios)
  })
})