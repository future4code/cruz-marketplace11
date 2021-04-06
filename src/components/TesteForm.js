import React from 'react'
// import uuid from 'react-uuid'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

class TesteForm extends React.Component {


createUser

    render () {

        return ( <div>

            <Container>
                <H2>Cadastrar veículo</H2>
                <Div>
                <label for="nome">Marca do veículo:</label>
                <Input onChange={this.props.nome} type='text' id="nome" placeholder="Ex: Ford, Audi, etc..."/>
                </Div>
               
                <Div>
                <label for="preco">Preco</label>
                <Input onChange={this.props.preco} type='text' id="preco" placeholder="Digite o valor em reais"/>
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
                <Input onChange={this.props.tempoEntrega} type='text' id="tempoEntrega" placeholder="Valor em dias"/>
                </Div>

                <Div>
                <label for="descricao">Descrição</label>
                <Textarea  onChange={this.props.descricao} type='text' id="descricao" placeholder="Modelo do veículo, estado, ano, etc..."/>
                </Div>
                <DivButton>
               <ButtonEnviar variant="contained" onClick={this.props.enviarFormularioCompleto}>Enviar o formulario</ButtonEnviar>

                </DivButton>
            </Container>

        </div>)
    }
}

export default TesteForm


const Container = styled.div`
max-width: 900px;
/* min-width: 1000px; */
background-color:#F6AE2D;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
height:400px;
`
const H2 = styled.h2`
margin-left:24px;
color:white;

`


const Div =styled.div`
display:flex;
justify-content:space-between;
width:600px;
margin:auto;
color:white;
`
const Input = styled.input`
width:300px;
border-radius:2px;
`
const Select = styled.select`
width:304.5px;
border-radius:2px;

`
const Textarea = styled.textarea`
resize:none;
width: 300px;
border-radius:4px;

`
const ButtonEnviar = styled(Button)`
background-color:red;
margin:auto;
&:hover{
    cursor:pointer;
}
`
const DivButton = styled.div`
display:flex;
width:600px;
height:100px;
align-items:center;
justify-content:center;
margin:auto;
`

