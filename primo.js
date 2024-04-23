function primo(numero) {
    let cont = 0
    for (let index = 1; index <= numero; index++) {
        if (numero%index == 0) {
            cont++
        }
    }

    if (cont == 2) {
        return true
    }else{
        return false
    }
}

module.exports = {primo}