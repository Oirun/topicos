const {primo} = require('./primo.js')


test('Nao é primo', ()=>{
    expect(primo(8)).toBe(false)
})


test('É primo', ()=>{
    expect(primo(7)).toBe(true)
})