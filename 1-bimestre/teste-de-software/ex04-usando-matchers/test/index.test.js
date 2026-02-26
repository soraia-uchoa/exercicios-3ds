test('5 > 3', () => {
    expect(5).toBeGreaterThan(3)
})

test('String "Teste de Software" contém "Software"', () => {
    expect("Teste de Software").toContain('Software')
})

test('Objeto igual á { aprovado: true }', () => {
    let obj = { aprovado: true }
    expect(obj).toEqual({ aprovado: true })
})