const { adicionarTarefa, listaTarefas } = require('../controllers/tarefaController')

const cadastrarTarefa = (descricao) => {

    if (!descricao) { return false }

    const tarefa = { descricao: descricao }

    adicionarTarefa(tarefa)

    return true

}

const totalTarefas = () => {

    return listaTarefas().length

}

module.exports = {
    cadastrarTarefa,
    totalTarefas
}
