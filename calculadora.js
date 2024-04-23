function soma(valor1, valor2) {
    return parseInt(valor1) + parseInt(valor2)
}

function subtracao(valor1, valor2){
    return parseInt(valor1) - parseInt(valor2)
}

function divisao(valor1, valor2){
    return parseInt(valor1) / parseInt(valor2)
}

function multiplicacao(valor1, valor2){
    return parseInt(valor1) * parseInt(valor2)
}

module.exports = {soma, subtracao, divisao, multiplicacao}