const calcularTaxa = require("../service/taxaService")

describe("testando taxaService", () => {
    test("Aplicar 5% acima de 500", () => {
        expect(calcularTaxa(600)).toBe(630)
    })

    test("Não aplicar taxa até 500", () => {
        expect(calcularTaxa(300)).toBe(300)
    })
})

