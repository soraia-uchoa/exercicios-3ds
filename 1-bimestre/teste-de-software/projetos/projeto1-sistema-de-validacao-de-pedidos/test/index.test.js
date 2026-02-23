const validarPedido = require('../index');

test("Valor total do pedido é menor ou igual a 0", () => {
    const pedido = {
        cliente: "Carlos",
        total: 0,
        itens:["ProdutoA", "Produto B"]
    }

    expect(validarPedido(pedido)).toBeFalsy();

})

test("Verificar a inexistência da propriedade cliente", () => {
     const pedido = {
        total: 150,
        itens:["ProdutoA", "Produto B"]
    }

    expect(validarPedido(pedido)).toBeFalsy();
})

test("verificar a inexistencia da lista de itens do produto", () => {
        const pedido = {
        cliente: "Carlos",
        total: 150,
    }

    expect(validarPedido(pedido)).toBeFalsy();
})

test("Validar pedido", () => {
     const pedido = {
        cliente: "Carlos",
        total: 200,
        itens:["ProdutoA", "Produto B"]
    }

    expect(validarPedido(pedido)).toBeTruthy();
})