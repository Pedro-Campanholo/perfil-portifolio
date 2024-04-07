/* Objetivo 1: quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

 Passo 1 - pegar o botao "mostrar mais" no js pra poder verificar quando o usuario clicar em cima dele

 Passo 2 - identificar o click no botao

 passo 3 - adicionar a classe "ativo" nos projetos escondidos

 Objetivo 2: esconder o botao de mostrar mais
    Passo 1 - pegar o botao e esconder ele

*/
//Objetivo 1: quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botao "mostrar mais" no js pra poder verificar quando o usuario clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//Passo 2 - identificar o click no botao
botaoMostrarProjetos.addEventListener("click", () => {

    //passo 3 - adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');

    });
    // Objetivo 2: esconder o botao de mostrar mais
    //Passo 1 - pegar o botao e esconder ele
    botaoMostrarProjetos.classList.add('remover');
});
