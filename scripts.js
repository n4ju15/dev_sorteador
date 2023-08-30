// Função para gerar número aleatório
function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value) // Pega o valor inserido no campo "entre"
    const max = Math.floor(document.querySelector(".input-max").value) // Pega o valor inserido no campo "e"

    if (min >= max) { // Se o valor minímo for maior ou igual ao valor máximo exibe o alert
        alert("O valor minímo deve ser MENOR que o valor máximo.")
    } else { // Se não, continua o código sorteando o número e exibindo o segundo alert
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }
}

/*      OUTRO EXEMPLO DE COMO PODERIA SER FEITO

function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value) // Pega o valor inserido no campo "entre"
    const max = Math.floor(document.querySelector(".input-max").value) // Pega o valor inserido no campo "e"

    if (max > min) { // Se o valor máximo for maior que o valor máximo faz o código
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    } else { // Se não, continua o código e exibe o segundo alert
        alert("O valor minímo deve ser MENOR que o valor máximo.")
    }
} 
*/