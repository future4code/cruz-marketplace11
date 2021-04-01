import React from 'react'
import styled from 'styled-components'
import FooterLargo from '../../Footer'

import {
     ContainerBody,H1,ContainerDescricao, ContainerFinal, ContainerMainContent, ContainerInternoForm,
    ContainerInformacoesDoVeiculo, ContainerInformacoes2, ContainerInformacoes1
    , ContainerFormBox, ContainerForm, ContainerFlex, Img, Label, Input, P,
    Textarea, ButtonProposta, BoxBotao, DivParaBotao, ButtonHome
} from './Styles'


class Detalhes extends React.Component {


    state = {
        nome: "",
        email: "",
        telefone: "",
        proposta: ""
    }


    pegaEmail = (evt) => {
        this.setState({ email: evt.target.value })
        console.log(evt.target.value)
    }
    pegaTelefone = (evt) => {
        this.setState({ telefone: evt.target.value })
        console.log(evt.target.value)
    }
    pegaNome = (evt) => {
        this.setState({ nome: evt.target.value })
        console.log(evt.target.value)
    }

    pegaProposta = (evt) => {
        this.setState({ proposta: evt.target.value })
        console.log(evt.target.value)
    }


    mensagemEnviada = (evt) => {

        alert("Mensagem enviada para o vendedor! Agora é só aguardar o retorno.")
        this.setState({ proposta: "", nome: "", email: "", telefone: "" })
        evt.preventDefault()
    }

    testeProps = () => {
        console.log("O que vem no props: ",this.props)
    }
    render() {


        return (
            <ContainerBody>
                <div className="header">
                    Header
            </div>
                <H1>{this.props.name} {this.props.modelo}</H1>

                <ContainerMainContent>
                    <Img src={this.props.imagem} />

                    <ContainerForm>
                        <ContainerInternoForm>
                            <h3>Entre em contato com o vendedor </h3>
                            <ContainerFormBox>
                                <Label for="nome">Nome:</Label>
                                <Input id="nome" placeholder="Nome" type="text" onChange={this.pegaNome} value={this.state.nome} />

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="email" >E-mail:</Label>
                                <Input id="email" placeholder="Email" type="text" onChange={this.pegaEmail} value={this.state.email} />

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="contato" >Contato:</Label>
                                <Input id="contato" placeholder="Telefone para contato" type="text" onChange={this.pegaTelefone} value={this.state.telefone} />

                            </ContainerFormBox>
                            <Textarea placeholder="Digite aqui sua mensagem direta para o vendedor" onChange={this.pegaProposta} value={this.state.proposta} />
                            <DivParaBotao><ButtonProposta variant="contained" onClick={this.mensagemEnviada}>Enviar Proposta</ButtonProposta></DivParaBotao>
                        </ContainerInternoForm>

                    </ContainerForm>

                </ContainerMainContent>

                <ContainerInformacoesDoVeiculo>
                    <ContainerFlex>
                        <ContainerInformacoes1>Valor</ContainerInformacoes1>
                        <ContainerInformacoes1>Método Pag.</ContainerInformacoes1>
                        <ContainerInformacoes1>Prazo</ContainerInformacoes1>
                    </ContainerFlex>

                    <ContainerFlex>
                        <ContainerInformacoes2>{this.props.valor}</ContainerInformacoes2>
                        <ContainerInformacoes2>{this.props.metodoPagamento}</ContainerInformacoes2>
                        <ContainerInformacoes2>{this.props.prazo} dias</ContainerInformacoes2>
                    </ContainerFlex>
                </ContainerInformacoesDoVeiculo>
                <ContainerFinal>


                    <ContainerDescricao>
                        <P>

                            <h4>Descricao:</h4>
                            {this.props.descricao}
            </P>

                    </ContainerDescricao>
                    <BoxBotao>
                        <ButtonHome variant="contained" onClick={this.props.pagina}>Voltar para página inicial</ButtonHome>

                    </BoxBotao>
                </ContainerFinal>
                <FooterLargo />

            </ContainerBody>)
    }
}



export default Detalhes