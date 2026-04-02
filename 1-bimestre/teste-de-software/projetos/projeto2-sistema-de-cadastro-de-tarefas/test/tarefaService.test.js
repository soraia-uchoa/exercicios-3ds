const { cadastrarTarefa, totalTarefas } = require('../services/tarefaService')
const { limpar } = require('../controllers/tarefaController')

beforeEach(() => {

    limpar()

})

describe('Testando service de tarefas', () => {

    test('O sistema deve permitir cadastrar uma tarefa', () => {

        expect(cadastrarTarefa('estudar')).toBeTruthy()

    })

    test('Tarefa não deve ser cadastrada sem descrição', () => {

        expect(cadastrarTarefa()).toBeFalsy()
        
    })

    test('Deve retornar o total de tarefas cadastradas', () => {

        cadastrarTarefa('ler')

        expect(totalTarefas()).toBe(1)
        
    })

    test('Deve começar com o banco vazio', () => {

        expect(totalTarefas()).toBe(0)
        
    })

})