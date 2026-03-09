const calcularTaxa = require("../service/taxaService")

function aplicarTaxa(req, res) {
    const { valor } = req.body

    const valorFinal = calcularTaxa(630)

    return res.json({ valorFinal})
}

module.exports = aplicarTaxa