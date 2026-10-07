const botao = document.getElementById("confirmar");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    
    const opção = document.getElementById("opção").value;

    switch (opção) {

        case "Hamburguer":
            resultado.textContent = "Hamburguer";
            break;
        
        case "Hotdog":
            resultado.textContent = "Hotdog";
            break;

        case "Pizza":
            resultado.textContent = "Pizza";
            break;

        case "Pimenta":
            resultado.textContent = "Pimenta";
            break;

        case "Chocolate":
            resultado.textContent = "Chocolate";
            break;

        default:
            resultado.textContent = "Selecione uma opção";
        
    }   
});