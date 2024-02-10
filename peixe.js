// estabelecendo configurações básicas
var config = {
    type: Phaser.AUTO, //tipo de renderizador escolhido automaticamente
    width: 800, //largura da tela
    height: 600, //altura da tela

    //funções que serão executadas durante o ciclo de vida do jogo
    scene: {
        preload: preload, //pre-carregar
        create: create, //criar
        update: update //atualizar
    }
};

//estabelecendo que as configurações serão usadas no novo jogo phaser
var game = new Phaser.Game(config);

var peixinho; //criando a variável que armazenará o peixe
var surfista; //criando a variável que armazenará o nono elemento: surfista

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png'); //pre-carregando o fundo
    this.load.image('logo', 'assets/logo-inteli_azul.png'); //pre-carregando a logo
    this.load.image('peixe', 'assets/peixes/tubarao.png'); //pre-carregando o peixe
    this.load.image('surfista', 'assets/menina-surfista.png'); //pre-carregando elemento novo surfista
    this.load.image('areia', 'assets/areia.png'); //pre-carregando areia
}


function create() {
    this.add.image(400, 300, 'mar'); //adicionando e posicionando o fundo
    surfista = this.add.image(200, 200, 'surfista').setScale(0.7); //adicionando o surfista a variável e arrumando o tamanho
    this.add.image(400, 450, 'areia').setScale() //adicionando o novo elemento: areia
    this.add.image(400, 525, 'logo').setScale(0.5); //adicionando, ajustando a escala e posicionando a logo
    peixinho = this.add.image(400, 300, 'peixe'); //adicionando o peixe a variável e posicionando
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false); //indicando o espelhamento horizontal da imagem
}

//adicionando controles no peixe
function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    // delinea e verifica se o mouse está sobre o surfista
    if (Phaser.Geom.Rectangle.ContainsPoint(surfista.getBounds(), this.input.activePointer.position)) {
        // move o surfista para o lado direito
        surfista.x += 5;
    }
}
