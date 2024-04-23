function celsos(valor) {
    // (32 °C × 9/5) + 32 = 89,6 °F
    
    return parseFloat((parseFloat(valor) * 9/5) + 32)
}

function farenait(valor) {
    // (89 °F − 32) × 5/9 = 32 °C
    
    return parseFloat(((parseFloat(valor) - 32) * 5/9).toFixed(2))
}

module.exports = {celsos, farenait}