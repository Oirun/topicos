const {celsos, farenait} = require('./temperatura.js')

test('A conversao de celsos para farenait ta correta', ()=>{
    expect(celsos(32)).toBe(89.6)
})

test('A conversao de farenait para celsos ta correta', ()=>{
    expect(farenait(89.6)).toBe(32)
})

// (32 °C × 9/5) + 32 = 89,6