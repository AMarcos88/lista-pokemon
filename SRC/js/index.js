const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {

    const modoEcsuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEcsuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("SRC", "./SRC/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("SRC", "./SRC/imagens/moon.png");
    }
});