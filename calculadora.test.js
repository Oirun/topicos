const {soma,subtracao, divisao, multiplicacao} = require('./calculadora.js')


test('A soma esta correta', ()=>{
    expect(soma(1,2)).toBe(3)
})

test('A subtracao esta correta', ()=>{
    expect(subtracao(2,1)).toBe(1)
})

test('A subtracao esta correta', ()=>{
    expect(subtracao(2,1)).toBe(1)
})

test('A divisao esta correta', ()=>{
    expect(divisao(2,2)).toBe(1)
})

test('A subtracao esta correta', ()=>{
    expect(multiplicacao(2,2)).toBe(4)
})