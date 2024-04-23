const {palindromo} = require('./palindromo.js')

test('A palavra é palindromo', ()=>{
    expect(palindromo('arara')).toBe(true)
})

test('A palavra é palindromo', ()=>{
    expect(palindromo('pedra')).toBe(false)
})
