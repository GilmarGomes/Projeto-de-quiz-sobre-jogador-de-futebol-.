let perguntas = document.querySelectorAll(".box-questions");
let respostasCorretas = ["b", "b", "c", "c", "c"];
let respostaAtual = 0;

function verificarResposta() {
  let checkboxes = perguntas[respostaAtual].querySelectorAll(
    'input[type="checkbox"]'
  );
  let respostaSelecionada;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      respostaSelecionada = checkbox.getAttribute("data-resposta");
    }
    checkbox.disabled = true; // Desabilita os checkboxes após a resposta ser selecionada
  });

  if (!respostaSelecionada) {
    alert("Por favor, selecione uma resposta antes de verificar.");
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false; // Habilita os checkboxes novamente para escolher uma resposta
    });
    return;
  }

  if (respostaSelecionada === respostasCorretas[respostaAtual]) {
    document.getElementById("answer-of").style.display = "block";
  } else {
    document.getElementById("answer-on").style.display = "block";
  }

  document.getElementById("verificar-btn").style.display = "none";
  document.getElementById("proxima-btn").style.display = "block";
}

function proximaPergunta() {
  document.getElementById("answer-of").style.display = "none";
  document.getElementById("answer-on").style.display = "none";

  perguntas[respostaAtual].style.display = "none";
  respostaAtual++;

  if (respostaAtual < perguntas.length) {
    perguntas[respostaAtual].style.display = "block";
    let checkboxes = perguntas[respostaAtual].querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false; // Habilita os checkboxes da próxima pergunta
      checkbox.checked = false; // Desmarca todos os checkboxes
    });

    document.getElementById("verificar-btn").style.display = "block";
    document.getElementById("proxima-btn").style.display = "none";
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  document.getElementById("proxima-btn").style.display = "none";
  document.getElementById("resultado-final").style.display = "block";

  let posicaoJogador = "Atacante"; // Coloque a posição do jogador aqui ou adapte conforme necessário
  let statusCampeao = "Sim"; // Coloque 'Sim' se o jogador for campeão ou 'Não' caso contrário

  document.getElementById("posicao-jogador").textContent = posicaoJogador;
  document.getElementById("status-campeao").textContent = statusCampeao;
}
