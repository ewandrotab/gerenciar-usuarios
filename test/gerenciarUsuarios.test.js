const {retornarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios')
const {expect} = require('chai')

describe('Testes da Função Gerenciar Usuários', function (){
    it('Valida a inclusão de um novo nome na lista', function (){

        const usuario = {
            nome: 'Maria',
            email: 'maria@gospel.com'
        }

        adicionarNovoUsuario(usuario)
        
        const lista = retornarUsuarios()

        expect(lista.at(-1)).to.eql(usuario);

    })
})