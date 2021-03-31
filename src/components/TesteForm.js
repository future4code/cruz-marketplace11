import React from 'react'
import uuid from 'react-uuid'
import axios from 'axios'


class TesteForm extends React.Component {


createUser

    render () {

        return ( <div>

            <div>
                <div>
                <label for="nome">Nome do vendedor:</label>
                <input onChange={this.props.nome} type='text' id="nome"/>
                </div>
                <div>
                <label for="descricao">Descrição</label>
                <input onChange={this.props.descricao} type='text' id="descricao"/>
                </div>
                <div>
                <label for="preco">Preco</label>
                <input onChange={this.props.preco} type='text' id="preco"/>
                </div>
                <div>
                <label for="metodoPagamento">Método de pagamento: </label>
                <input onChange={this.props.metodoPagamento} type='text' id="metodoPagamento"/>
                </div>
                <div>
                <label for="tempoEntrega">Tempo de entrega:</label>
                <input onChange={this.props.tempoEntrega} type='text' id="tempoEntrega"/>
                </div>
               <button onClick={this.props.enviarFormularioCompleto}>Enviar o formulario</button>
            </div>

        </div>)
    }
}

export default TesteForm