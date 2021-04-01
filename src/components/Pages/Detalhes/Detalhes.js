import React from 'react'
import styled from 'styled-components'
import FooterLargo from '../../Footer'
// import Button from '@material-ui/core/Button'

import {Container,ContainerBody,ContainerDescricao,ContainerFinal,ContainerMainContent,ContainerInternoForm,
    ContainerInformacoesDoVeiculo,ContainerInformacoes2,ContainerInformacoes1
    ,ContainerFormBox,ContainerForm,ContainerFlex,Img,Label,Input,P,
    Textarea,ButtonProposta,BoxBotao,DivParaBotao,ButtonHome} from './Styles'


class Detalhes extends React.Component {


state = {
    nome: "",
    email: "",
    telefone: "",
    proposta: ""
}


pegaEmail = (evt) => {
    this.setState({email:evt.target.value})
    console.log(evt.target.value)
} 
pegaTelefone = (evt) => {
    this.setState({telefone:evt.target.value})
    console.log(evt.target.value)
} 
pegaNome = (evt) => {
    this.setState({nome:evt.target.value})
    console.log(evt.target.value)
} 

pegaProposta = (evt) => {
    this.setState({proposta:evt.target.value})
    console.log(evt.target.value)
} 




    mensagemEnviada = (evt) => {
       
        alert("Mensagem enviada para o vendedor! Agora é só aguardar o retorno.")
        this.setState({proposta:"",nome:"",email:"",telefone:""})
        evt.preventDefault()
    }
    render() {


        return (
            <ContainerBody>
                <div className="header">
                    Header
            </div>
                <h1>Honda Civic 2020 2.0</h1>

                <ContainerMainContent>
                    <Img src="https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg" />

                    <ContainerForm>
                        <ContainerInternoForm>
                            <h3>Entre em contato com o vendedor </h3>
                            <ContainerFormBox>
                                <Label for="nome">Nome:</Label>
                                <Input id="nome" placeholder="Nome" type="text" onChange={this.pegaNome} value={this.state.nome}/>

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="email" >E-mail:</Label>
                                <Input id="email" placeholder="Email" type="text" onChange={this.pegaEmail} value={this.state.email} />

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="contato" >Contato:</Label>
                                <Input id="contato" placeholder="Telefone para contato" type="text" onChange={this.pegaTelefone} value={this.state.telefone}/>

                            </ContainerFormBox>
                            <Textarea  placeholder="Digite aqui sua mensagem direta para o vendedor" onChange={this.pegaProposta}/>
                            <DivParaBotao><ButtonProposta variant="contained" onClick={this.mensagemEnviada}>Enviar Proposta</ButtonProposta></DivParaBotao>
                        </ContainerInternoForm>

                    </ContainerForm>

                </ContainerMainContent>

                <ContainerInformacoesDoVeiculo>
                    <ContainerFlex>
                        <ContainerInformacoes1>Vendedor</ContainerInformacoes1>
                        <ContainerInformacoes1>Método Pag.</ContainerInformacoes1>
                        <ContainerInformacoes1>Prazo</ContainerInformacoes1>
                    </ContainerFlex>

                    <ContainerFlex>
                        <ContainerInformacoes2>{this.props.nome}Anderson</ContainerInformacoes2>
                        <ContainerInformacoes2>{this.props.metodoPagamento}A vista</ContainerInformacoes2>
                        <ContainerInformacoes2>{this.props.prazo}6 dias</ContainerInformacoes2>
                    </ContainerFlex>
                </ContainerInformacoesDoVeiculo>
                <ContainerFinal>

               
                <ContainerDescricao>
                    <P>

                        <h4>Descricao:</h4>
                        {/* <br></br> */}
                        {this.props.desricao}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut semper ipsum.
                        Vivamus iaculis et velit tincidunt interdum. Morbi facilisis, enim id laoreet efficitur,
                        odio tortor scelerisque leo, a efficitur quam velit sed magna. Vestibulum bibendum, felis in eleifend
                        malesuada, metus lacus efficitur ante, a vestibulum nunc nibh vel augue.

                        Mauris diam arcu, eleifend in velit id, mattis malesuada purus. Sed mi turpis,
                        elementum eget orci ac, ullamcorper ultrices mi. Nam consectetur rhoncus posuere. Suspendisse potenti.
                        Nulla facilisi. Curabitur aliquet massa odio, id egestas tellus venenatis ac. Maecenas sollicitudin eu neque
                        non egestas. Donec gravida mollis euismod.
            </P>

                </ContainerDescricao>
                <BoxBotao>
                <ButtonHome variant="contained" onClick={this.props.pagina}>Voltar para página inicial</ButtonHome>

                </BoxBotao>
                </ContainerFinal>
                <FooterLargo/>

            </ContainerBody>)
    }
}



export default Detalhes