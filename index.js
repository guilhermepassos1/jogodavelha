
let jogador = "X";
let partida_continua = true;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");
let btnJogar = document.getElementById("btnJogarNovamente");
let placar = document.getElementById("placar");

let resultadoNaTela = "";
let vitoriasX = 0;
let vitoriasO = 0;

function jogada(casa) {
    if (casa.innerHTML === "" && partida_continua === true) {
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML === casa03.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa01.innerHTML + "! Você foi o vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa01.innerHTML);
    }
    else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa04.innerHTML + "! Você foi o vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa04.innerHTML);
    }
    else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa07.innerHTML + "! Você foi o vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa07.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa01.innerHTML + "! Você foi o Vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa01.innerHTML);
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa02.innerHTML + "! Você foi o Vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa02.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa03.innerHTML === casa09.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa03.innerHTML + "! Você foi o Vencedor !"
        btnJogar.style.display = "inline";
        vitoria(casa03.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa01.innerHTML + "! Você foi o vencedor ! "
        btnJogar.style.display = "inline";
        vitoria(casa01.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        resultadoNaTela = "Parabéns jogador " + casa03.innerHTML + "! Você foi o Vencedor ! "
        btnJogar.style.display = "inline";
        vitoria(casa03.innerHTML);
    } 
    else if (casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != "" && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != "") {
        resultadoNaTela = "Deu Velha :|"
        btnJogar.style.display = "inline";
    }

    document.getElementById('resultado').innerHTML = resultadoNaTela;
}
function vitoria(vencedor) {
    partida_continua = false;
    if (vencedor === "X") {
        vitoriasX += 1;
    } else {
        vitoriasO += 1;
    }
    placar.innerHTML = `<h3>Placar</h3> <p>X: ${vitoriasX}</p>
    <p>O: ${vitoriasO} </p>`;
    placar.style.display = "block";
}
function reiniciar() {
    partida_continua = true;
    jogador = "X";
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    resultadoNaTela = "";
    btnJogar.style.display = "none";
}