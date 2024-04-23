const {tamanho, valido} = require('./validarcpf.js')

test('A validacao do cpf esta correta', ()=>{
    expect(tamanho("000.000.000")).toBe(false)
})

test('A validacao do cpf esta correta', ()=>{
    expect(tamanho("077.622.461-18")).toBe(true)
})

test('A validacao do cpf esta correta', ()=>{
    expect(valido("000.000.000-00")).toBe(false)
})

test('A validacao do cpf esta correta', ()=>{
    expect(valido("077.622.461-18")).toBe(true)
})