import React from 'react'
// import uuid from 'react-uuid'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

class TesteForm extends React.Component {


createUser

    render () {

        return ( <div>

            <div>
                <Div>
                <label for="nome">Nome do vendedor:</label>
                <Input onChange={this.props.nome} type='text' id="nome"/>
                </Div>
               
                <Div>
                <label for="preco">Preco</label>
                <Input onChange={this.props.preco} type='text' id="preco"/>
                </Div>
                <Div>
                <label for="metodoPagamento">Método de pagamento: </label>
                {/* <Input   type='text' id="metodoPagamento"/> */}
                <Select id="metodoPagamento" name="metodoPagamento" onChange={this.props.metodoPagamento}> 
                    <option value ="PIX">PIX</option>
                    <option value="A vista">A vista</option>
                    <option value="12x">Em 12 vezes</option>
                    <option value="24x">Em 24 vezes</option>
                    <option value="36x">Em 36 vezes</option>
                    <option value="48x">Em 48 vezes</option>
                </Select>
                </Div>
                <Div>
                <label for="tempoEntrega">Tempo de entrega:</label>
                <Input onChange={this.props.tempoEntrega} type='text' id="tempoEntrega"/>
                </Div>

                <Div>
                <label for="descricao">Descrição</label>
                <Textarea  onChange={this.props.descricao} type='text' id="descricao" />
                </Div>
                <DivButton>
               <ButtonEnviar variant="contained" onClick={this.props.enviarFormularioCompleto}>Enviar o formulario</ButtonEnviar>

                </DivButton>
            </div>

        </div>)
    }
}

export default TesteForm



const Div =styled.div`
display:flex;
justify-content:space-between;
width:600px;
`
const Input = styled.input`
width:300px;
`
const Select = styled.select`
width:307.5px;
`
const Textarea = styled.textarea`
resize:none;
width: 300px;
`
const ButtonEnviar = styled(Button)`
background-color:red;
margin:auto;
`
const DivButton = styled.div`
display:flex;
width:600px;
height:100px;
align-items:center;
justify-content:center;
`