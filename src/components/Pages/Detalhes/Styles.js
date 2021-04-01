import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'





export const ContainerBody = styled.div`
max-width: 1440px;
min-width: 1000px;
/* background-color:aqua; */
margin:auto;

`
export const ContainerMainContent = styled.div`
display:flex;
/* width:100vw; */

max-width: 1440px;
`

export const Container = styled.div`
border: 1px solid black;
width:50%;
// background-color: red
`


export const ContainerImg = styled.div`
height: 300px;
/* background-color:orange; */
/* background-image:url("https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg"); */
background-size:contain;
background-repeat:no-repeat;
box-sizing:content-box;
`
export const ContainerImgsPequenas = styled.div`
height: 100px;
background-color:azure;
display:flex;
justify-content:space-around;

`
export const ContainerImageBox = styled.div`
width:20%;
/* background-color: blue; */
border:1px solid black;
`
export const ContainerForm = styled.div`
/* border:1px solid black; */
width: 40%;
/* background-color:palegoldenrod; */
height:600px;

`

export const ContainerInformacoesDoVeiculo = styled.div`
/* border: 1px solid black; */
width:50%;
height:60px;
display:flex;
/* justify-content:space-around; */
flex-direction:column;

`

export const ContainerFlex = styled.div`
display:flex;
/* flex-direction */
`
export const ContainerInformacoes1 = styled.div`
border-right: 1px solid black;
/* background-color:gainsboro; */
/* wid:10px; */
text-align:center;
width:30%;
margin-top:12px;
`
export const ContainerInformacoes2 = styled.div`
border-right: 1px solid black;
/* background-color:gainsboro; */
font-weight:600;
text-align:center;

/* wid:10px; */
width:30%;
`


export const ContainerDescricao = styled.div`
width:50%;
border-top:1px solid black;
border-bottom:1px solid black;
/* padding-right:15%; */
height:400px;
font-size:18px;
padding-left:24px;
/* background-color:blue; */
`

export const P = styled.p`
width:85%;

`

export const ButtonHome = styled(Button)`
width: 230px;
`
export const ButtonProposta = styled(Button)`
/* width: 400px; */
/* border-radius: 45px; */
border: 1px solid blue;
font-size:1.85em;
/* padding: 10px 20px;  */
/* /*  */
width:230px;
height: 70px; 
margin:10% 25%;
/* color:red; */
`
export const DivParaBotao = styled.div`
/* background-color:red; */
padding: 10% 25%;
`

export const Img = styled.img`
width:50%;

`
export const ContainerInternoForm = styled.div`
width:80%;
/* background-color:orange; */
margin:auto;
border:1px solid black;

`

export const ContainerFormBox = styled.div`
/* border: 1px solid black; */
padding: 8px;
display:flex;
justify-content:space-evenly;
height:40px;

`

export const Textarea = styled.textarea`
width:80%;
height:200px;
border-radius:4px;
font-size:16px;
margin: 24px auto 42px;
display:flex;
resize:none;

`

export const Input = styled.input`
/* flex-grow:2; */
width:60%;
border-radius:4px;
padding-left:8px;
`

export const Label = styled.label`
/* display:flex; */
width:20%;
/* justify-content:flex-end; */
/* flex-grow:1; */
`



export const BoxBotao = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:40%;
/* background-color:red; */
`

export const ContainerFinal = styled.div`
display:flex;

`