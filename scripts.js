// Função para gerar número aleatório
function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value) // Pega o valor inserido no campo "entre"
    const max = Math.floor(document.querySelector(".input-max").value) // Pega o valor inserido no campo "e"
   const result = Math.floor(Math.random() * (max - min + 1)) + min;
   alert(result)
}