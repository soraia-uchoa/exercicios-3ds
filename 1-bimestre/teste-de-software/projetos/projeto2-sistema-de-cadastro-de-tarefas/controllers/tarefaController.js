let tarefas = require('../database/tarefaDatabase')

const adicionarTarefa = (tarefa) => {

    tarefas.push(tarefa)

}

const listaTarefas = () => {

    return tarefas

}

const limpar = () => {

    tarefas = []

}

module.exports = {
    adicionarTarefa,
    listaTarefas,
    limpar
}