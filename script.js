//funções
let order =[];
let clickedOrder=[];
let score=0;


//0=verde 1=vermelho 2=amarelo 3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder =()=>{
    //número randômico, cria ordem aleatório 
    let colorOrder = Math.floor(Math.random()* 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    //percorrendo o array e executando
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//ascende a próxima cor 
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}
//verifica os botoes clicados são os mesmos na ordem que o jogo gerou
let checkOrder = () => {
    for (let i in clickedOrder){
        if (clickedOrder [i] != order[i]){
             gameOver();
             break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível...`);
        nextLevel();
    }
}
// function para on clik do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
         createColorElement(color).classList.remove('selected');
         checkOrder ();
    },250 );

    
}

//function return a color, if and else
let createColorElement = (color) =>{
    if (color == 0 ){
        return green;
    } else if(color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//function prx nevel game
let nextLevel = () =>{
    score+=10;
    shuffleOrder ();
}

// function for game over
let gameOver = () =>{
    score = 0;
    alert('Pontuação:$(score)!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo');
    //zerando o jogo
    order = [];
    clickedOrder = [];

    playGame();
}
//função de incio do jogo

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando jogo!');
    score=0;
//chama o próximo
    nextLevel();
}



//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//incio do jogo
playGame();