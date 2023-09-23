var jogador = "X";
var jogador_selecionado = document.getElementById("jogador_selecionado");
var vencedor_selecionado = document.getElementById("vencedor_selecionado");

const selecionarQuadrado = (id) => {
  if (vencedor()) {
    return;
  } else {
    var quadrado = document.getElementById(id);
    if (quadrado.innerText !== ".") {
      return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";
    mudarJogador();
    vencedor();
  }
};

const mudarJogador = () => {
  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  jogador_selecionado.innerHTML = jogador;
};

const vencedor = () => {
  var ganhador = false;
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);
  if (sequencia(quadrado1, quadrado2, quadrado3)) {
    madarCorQuadrado(quadrado1, quadrado2, quadrado3);
    vencedor_selecionado.innerHTML = quadrado1.innerText;
    ganhador = true;
  } else if (sequencia(quadrado4, quadrado5, quadrado6)) {
    madarCorQuadrado(quadrado4, quadrado5, quadrado6);
    vencedor_selecionado.innerHTML = quadrado4.innerText;
    ganhador = true;
  } else if (sequencia(quadrado7, quadrado8, quadrado9)) {
    madarCorQuadrado(quadrado7, quadrado8, quadrado9);
    vencedor_selecionado.innerHTML = quadrado7.innerText;
    ganhador = true;
  } else if (sequencia(quadrado1, quadrado4, quadrado7)) {
    madarCorQuadrado(quadrado1, quadrado4, quadrado7);
    vencedor_selecionado.innerHTML = quadrado1.innerText;
    ganhador = true;
  } else if (sequencia(quadrado2, quadrado5, quadrado8)) {
    madarCorQuadrado(quadrado2, quadrado5, quadrado8);
    vencedor_selecionado.innerHTML = quadrado2.innerText;
    ganhador = true;
  } else if (sequencia(quadrado3, quadrado6, quadrado9)) {
    madarCorQuadrado(quadrado3, quadrado6, quadrado9);
    vencedor_selecionado.innerHTML = quadrado3.innerText;
    ganhador = true;
  } else if (sequencia(quadrado1, quadrado5, quadrado9)) {
    madarCorQuadrado(quadrado1, quadrado5, quadrado9);
    vencedor_selecionado.innerHTML = quadrado1.innerText;
    ganhador = true;
  } else if (sequencia(quadrado3, quadrado5, quadrado7)) {
    madarCorQuadrado(quadrado3, quadrado5, quadrado7);
    vencedor_selecionado.innerHTML = quadrado3.innerText;
    ganhador = true;
  }
  return ganhador;
};
const sequencia = (valor1, valor2, valor3) => {
  var igual = false;
  if (
    (valor1.innerText !== ".",
    valor2.innerText !== ".",
    valor3.innerText !== ".")
  ) {
    if (
      valor1.innerText === valor2.innerText &&
      valor2.innerText === valor3.innerText
    ) {
      igual = true;
    }
  }
  return igual;
};

const madarCorQuadrado = (valor1, valor2, valor3) => {
  valor1.style.backgroundColor = "#07b92e";
  valor2.style.backgroundColor = "#07b92e";
  valor3.style.backgroundColor = "#07b92e";
};

const reiniciar = () => {
  window.location.reload();
};
