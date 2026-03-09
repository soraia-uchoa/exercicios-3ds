const aplicarTaxa = require("../controller/taxaController")

describe("Testando taxaController", () => {
    test("Deve retornar valor com taxa aplicada", () => {
        const req = {
            body: { valor: 600 }
        }

        const res = {
            json: jest.fn()
        }

        aplicarTaxa(req, res)

        expect(res.json).toHaveBeenCalledWith({ valorFinal: 630 })
        // verificar se uma função mock chamada (jest.fn)
    })
})

