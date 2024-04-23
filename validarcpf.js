function tamanho(cpf) {
    if (cpf.length == '14') {
        return true
    }else{
        return false
    }
}

function valido(cpf){
    if (cpf == "000.000.000-00") {
        return false
    }else if (cpf == "999.999.999-99") {
        return false
    }else{
        return true
    }
}

module.exports = {tamanho, valido}