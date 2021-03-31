import React from 'react'
import styled from 'styled-components'

class Detalhes extends React.Component {

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
                                <Input id="nome" placeholder="Nome" type="text" />

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="email" >E-mail:</Label>
                                <Input id="email" placeholder="Email" type="text" />

                            </ContainerFormBox>

                            <ContainerFormBox>
                                <Label for="contato" >Contato:</Label>
                                <Input id="contato" placeholder="Telefone para contato" type="text" />

                            </ContainerFormBox>
                            <Textarea  placeholder="Digite aqui sua mensagem direta para o vendedor"/>
                            <ButtonProposta>Enviar Proposta</ButtonProposta>
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
                        <ContainerInformacoes2>Anderson</ContainerInformacoes2>
                        <ContainerInformacoes2>A vista</ContainerInformacoes2>
                        <ContainerInformacoes2>6 dias</ContainerInformacoes2>
                    </ContainerFlex>
                </ContainerInformacoesDoVeiculo>
                <ContainerFinal>

               
                <ContainerDescricao>
                    <p>

                        Descricao:
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut semper ipsum.
                        Vivamus iaculis et velit tincidunt interdum. Morbi facilisis, enim id laoreet efficitur,
                        odio tortor scelerisque leo, a efficitur quam velit sed magna. Vestibulum bibendum, felis in eleifend
                        malesuada, metus lacus efficitur ante, a vestibulum nunc nibh vel augue.

                        Mauris diam arcu, eleifend in velit id, mattis malesuada purus. Sed mi turpis,
                        elementum eget orci ac, ullamcorper ultrices mi. Nam consectetur rhoncus posuere. Suspendisse potenti.
                        Nulla facilisi. Curabitur aliquet massa odio, id egestas tellus venenatis ac. Maecenas sollicitudin eu neque
                        non egestas. Donec gravida mollis euismod.
            </p>

                </ContainerDescricao>
                <BoxBotao>
                <ButtonProposta>Voltar para página inicial</ButtonProposta>

                </BoxBotao>
                </ContainerFinal>

            </ContainerBody>)
    }
}



const ContainerBody = styled.div`
max-width: 1280px;
/* background-color:aqua; */

`
const ContainerMainContent = styled.div`
display:flex;
/* width:100vw; */

max-width: 1280px;
`

const Container = styled.div`
border: 1px solid black;
width:50%;
// background-color: red
`


const ContainerImg = styled.div`
height: 300px;
/* background-color:orange; */
/* background-image:url("https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg"); */
background-size:contain;
background-repeat:no-repeat;
box-sizing:content-box;
`
const ContainerImgsPequenas = styled.div`
height: 100px;
background-color:azure;
display:flex;
justify-content:space-around;

`
const ContainerImageBox = styled.div`
width:20%;
background-color: blue;
border:1px solid black;
`
const ContainerForm = styled.div`
border:1px solid black;
width: 40%;
/* background-color:palegoldenrod; */
height:600px;

`

const ContainerInformacoesDoVeiculo = styled.div`
border: 1px solid black;
width:50%;
height:60px;
display:flex;
/* justify-content:space-around; */
flex-direction:column;

`

const ContainerFlex = styled.div`
display:flex;
/* flex-direction */
`
const ContainerInformacoes1 = styled.div`
border: 1px solid black;
background-color:gainsboro;
/* wid:10px; */
text-align:center;
width:30%;
`
const ContainerInformacoes2 = styled.div`
border: 1px solid black;
background-color:gainsboro;
font-weight:600;
text-align:center;

/* wid:10px; */
width:30%;
`


const ContainerDescricao = styled.div`
width:50%;
border:1px solid black;
height:300px;

`

const Button = styled.button`
width: 400px;
`
const ButtonProposta = styled.button`
width: 400px;
border-radius: 5px;
border: 1px solid blue;
font-size:1.85em;
padding: 10px 20px;
`

const Img = styled.img`
width:50%;

`
const ContainerInternoForm = styled.div`
width:80%;
/* background-color:orange; */
margin:auto;

`

const ContainerFormBox = styled.div`
/* border: 1px solid black; */
padding: 8px;
display:flex;
justify-content:space-evenly;
height:40px;

`

const Textarea = styled.textarea`
width:80%;
height:200px;

margin: 24px auto 42px;
display:flex;
resize:none;

`

const Input = styled.input`
/* flex-grow:2; */
width:60%;
`

const Label = styled.label`
/* display:flex; */
width:20%;
/* justify-content:flex-end; */
/* flex-grow:1; */
`



const BoxBotao = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:50%;
`

const ContainerFinal = styled.div`
display:flex;

`




export default Detalhes