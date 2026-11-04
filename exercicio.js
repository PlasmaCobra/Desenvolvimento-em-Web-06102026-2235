const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {
    try {
        const notas = ["nota1", "nota2", "nota3"].map(function (id) {
            const valor = document.getElementById(id).value;

            if (valor === "") {
                throw new Error("Preencha as três notas.");
            }

            const nota = Number(valor);
            if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
                throw new Error("Cada nota deve estar entre 0 e 10.");
            }

            return nota;
        });

        const media = notas.reduce(function (soma, nota) {
            return soma + nota;
        }, 0) / notas.length;

        let situacao;
        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5) {
            situacao = "Recuperação";
        } else {
            situacao = "Reprovado";
        }

        resultado.textContent = `Média: ${media.toFixed(2)} — Situação: ${situacao}.`;
    } catch (erro) {
        resultado.textContent = `Erro: ${erro.message}`;
    }
});
