const saldoElement = document.getElementById("saldo");
const operacaoElement = document.getElementById("operacao");
const valorElement = document.getElementById("valor");
const resultadoElement = document.getElementById("resultado");
const executarButton = document.getElementById("executar");

let saldo = 1000;
const saldoInicial = 1000;
const historico = [
	{ descricao: Abertura da conta: ${formatarMoeda(saldoInicial)} }
];

function mostrarMensagem(mensagem) {
	resultadoElement.replaceChildren();
	const paragrafo = document.createElement("p");
	paragrafo.textContent = mensagem;
	resultadoElement.appendChild(paragrafo);
}

