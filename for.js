const botao = document.getElementById("gerar")

const lista = document.getElementById("lista")

botao.addEventListener("click", function() {
    
    lista.innerHTML = "";
    
    const numero = 5; // or any number you want to multiply
    for (let i = 1; i <=10; i++) {
        
        const item = document.createElement("li");
        
        item.textContent = `calculo é ${numero} x ${i} = ${numero * i}`;
        
        lista.appendChild(numero);
    }
});
