//respondendo a pergunta
var resposta = "Eu já havia programado antes de forma básica utilizando css, html e JS, contudo, pela falta de prática tinha esquecido de muitas coisas. Sendo assim, essas primeiras atividades do módulo estão servindo para mim como uma revisão e aprofundamento, visto que apesar de ter visto algumas aulas sobre, tive poucas oportunidades de colocar o conhecimento em prática.";
console.log(resposta);

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

var peixinho; //criando a variável que armanezará o peixe

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png'); //pre-carregando o fundo
    this.load.image('logo', 'assets/logo-inteli_branco.png'); //pre-carregando a logo
    this.load.image('peixe', 'assets/peixes/tubarao.png'); //pre-carregando o peixe
}


function create() {
    this.add.image(400, 300, 'mar'); //adicionando e posicionando o fundo
    this.add.image(400, 525, 'logo').setScale(0.5); //adicionando, ajustando a escala e posicionando a logo
    peixinho = this.add.image(400, 300, 'peixe'); //adicionando o peixe a variável e posicionando
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false); //indicando o espelhamento horizontal da imagem

}

//adicionando controles no peixe
function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

