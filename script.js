// função serve para inserir o número na tela
function inserir(num) {
    const numero = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num;
};

// função do botão de limpar
function limpar() {
    document.querySelector('#resultado').innerHTML = " "
}

