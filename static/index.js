const vidaPorPersonagem = {
    'yoda': 18,
    'vader': 15,
    'hansolo': 10,
    'luke': 18,
    'imperador': 15,
    'princesa': 10,
    'chewbacca': 18,
    'troop': 15,    
};

const danoPorArma = {
    'sabrevermelho': 5,
    'sabreverde': 8,
    'armahan': 3,
    'armachewbacca': 5,
    'armaleia': 8,
    'armatroop': 3,
};

const danoPorNave = {
    'falcon': 5,
    'navevader': 3,
    'imperador': 2,
};

let personagemSelecionado;
let armaSelecionada;
let naveSelecionada;

function iniciar() {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        elemento.addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('calcular').addEventListener('click', calcularDano);
}

function marcarElementoSelecionado(evento) {
    const elementoSelecionado = evento.target.parentElement;

    if (!elementoSelecionado.classList.contains('elemento')) {
        return;
    }

    const idElementoSelecionado = elementoSelecionado.getAttribute('id');

    if (elementoSelecionado.classList.contains('personagem')) {
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados('personagem');
    } else  if (elementoSelecionado.classList.contains ('arma')) {
        armaSelecionada = idElementoSelecionado;
        limparElementosSelecionados('arma');
    } else {
        naveSelecionada = idElementoSelecionado;
        limparElementosSelecionados('nave');
    }

    elementoSelecionado.classList.add('selecionado');
}

function calcularDano() {
    if (!personagemSelecionado || !armaSelecionada || !naveSelecionada) {
        alert('Selecione o personagem, arma e a nave para calcular o dano!');
        return;
    }

    const danoDados = rolarOsDados();
    const danoArma = danoPorArma[armaSelecionada];
    const danoNave = danoPorNave[naveSelecionada];
    const danoTotal = danoDados + danoArma + danoNave;
    const vidaPersonagem = vidaPorPersonagem[personagemSelecionado];

    let resultado = 'Dano: ' + danoTotal + '! ';

    if (danoTotal >= vidaPersonagem) {
        resultado += 'Parabéns, você matou ' + personagemSelecionado;
    } else {
        resultado += 'Putz, não foi dessa vez, tente novamente!';
    }

    document.getElementById('dano').innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        if (elemento.classList.contains(tipo)) {
            elemento.classList.remove('selecionado');
        }
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
