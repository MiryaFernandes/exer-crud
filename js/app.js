'use strict'
import {readClients} from './clients.js'
import {openModal} from './modal.js'

const createRow = (clients) =>{

    const row = document.createElement('tr')
    row.innerHTML = `
                        <td>${clients.nome}</td>
                        <td>${clients.email}</td>
                        <td>${clients.celular}</td>
                        <td>${clients.cidade}</td>
                        <td>
                            <button type="button" class="button green">editar</button>
                            <button type="button" class="button red">excluir</button>
                        </td>


                    `
    return row
}
const updateTable = () => {

    const clientsContainer = document.getElementById('clients-container')
    //ler API e armaznar o resultado em uma variavel
    const clients = readCostumers() 

    //preencher a tabela com informaçoes
    const rows = clients.map(createRow)
    clientsContainer.replaceChildren(...rows)
}

const saveClient{

    //criar um json com as informaçoes do cliente
    const client = {
        "id": "",
        "nome": document.getElementById('nome'.value),
        "email": document.getElementById('email'.value),
        "celular": document.getElementById('celular'.value),
        "cidade": document.getElementById('cidade'.value)
    }

    createClient(client)
    //enviar o json para o servidor API
    //fechar a modal
    //atualizar a tabela
}

updateTable()

//eventos 
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('salvar').addEventListener('click', saveClient)