const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    lista.innerHTML = "";

    const numero = Number(document.getElementById("numero").value);
    const limite = Number(document.getElementById("limite").value);

    for (let i = 1; i <= limite; i++) {
        const item = document.createElement("li");
        item.textContent = `${i} x ${numero} = ${i * numero}`;
        lista.appendChild(item);
    }
});
