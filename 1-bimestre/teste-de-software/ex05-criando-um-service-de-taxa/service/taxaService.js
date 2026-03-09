function calcularTaxa(valor) {
    if (valor > 500) { 
        return 600
    }

    return valor
}

module.exports = calcularTaxa