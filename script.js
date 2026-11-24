
/* ==============================
   ELEMENTOS HTML
============================== */

const form = document.getElementById("imcForm");

const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");

const resultado = document.getElementById("resultado");

const valorIMC = document.getElementById("valorIMC");
const classificacao = document.getElementById("classificacao");
const mensagem = document.getElementById("mensagem");

const marcador = document.getElementById("marcador");

const btnLimpar = document.getElementById("btnLimpar");


/* ==============================
   FUNÇÃO PARA CALCULAR O IMC
============================== */

form.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    // Obtém os valores dos campos
    const peso = Number(campoPeso.value);
    const altura = Number(campoAltura.value);

    // Validação dos dados
    if (
        !Number.isFinite(peso) ||
        !Number.isFinite(altura) ||
        peso <= 0 ||
        altura <= 0 ||
        peso > 500 ||
        altura < 0.5 ||
        altura > 2.8
    ) {
        alert("Informe um peso e uma altura válidos.");
        return;
    }

    // Fórmula do IMC
    const imc = peso / (altura * altura);

    // Exibe o resultado
    valorIMC.textContent = imc.toFixed(2);

    // Classifica o resultado
    classificarIMC(imc);

    // Mostra a seção de resultado
    resultado.classList.remove("hidden");

    // Rola suavemente até o resultado
    resultado.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

});


/* ==============================
   CLASSIFICAÇÃO DO IMC
============================== */

function classificarIMC(imc) {

    let categoria = "";
    let descricao = "";
    let cor = "";
    let posicao = 0;

    if (imc < 18.5) {

        categoria = "Abaixo do peso";
        descricao = "Seu IMC está abaixo da faixa de referência para adultos.";
        cor = "#3498db";
        posicao = 8;

    } else if (imc < 25) {

        categoria = "Peso normal";
        descricao = "Seu IMC está dentro da faixa de referência para adultos.";
        cor = "#27ae60";
        posicao = 28;

    } else if (imc < 30) {

        categoria = "Sobrepeso";
        descricao = "Seu IMC está na faixa de sobrepeso.";
        cor = "#f39c12";
        posicao = 53;

    } else if (imc < 35) {

        categoria = "Obesidade grau I";
        descricao = "Seu IMC está na faixa de obesidade grau I.";
        cor = "#e67e22";
        posicao = 72;

    } else if (imc < 40) {

        categoria = "Obesidade grau II";
        descricao = "Seu IMC está na faixa de obesidade grau II.";
        cor = "#e74c3c";
        posicao = 86;

    } else {

        categoria = "Obesidade grau III";
        descricao = "Seu IMC está na faixa de obesidade grau III.";
        cor = "#c0392b";
        posicao = 96;

    }

    // Atualiza os textos
    classificacao.textContent = categoria;
    mensagem.textContent = descricao;

    // Atualiza a cor da classificação
    classificacao.style.color = cor;

    // Atualiza a posição do marcador
    marcador.style.left = posicao + "%";

}


/* ==============================
   LIMPAR OS CAMPOS
============================== */

btnLimpar.addEventListener("click", function() {

    // Limpa os campos
    form.reset();

    // Esconde o resultado
    resultado.classList.add("hidden");

    // Restaura os valores iniciais
    valorIMC.textContent = "0.0";

    classificacao.textContent = "Resultado";
    classificacao.style.color = "";

    mensagem.textContent = "";

    marcador.style.left = "0%";

    // Retorna ao início
    campoPeso.focus();

});
