// import { styled } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'






class TesteCard extends React.Component {

    render() {

        return (
            <DivContainer>
                <Img src={this.props.imagem} />
                <h3>{this.props.nome} </h3>
             {this.props.modelo?<h2>{this.props.modelo} </h2> : <h2>Não especificado</h2>}   
                <p>{this.props.preco}</p>
                <Button onClick={() => this.props.detalhes(this.props.id)}>Ir para detalhes</Button>
                {/* <p>{console.log("PROPS: ",this.props)}</p> */}
                {/* <button onClick={() => console.log("PROPS neste card: ",this.props)}>Ir para detalhes</button> */}



            </DivContainer>
        )
    }
}


export default TesteCard





const DivContainer = styled.div`

height: 320px;
border: 1px solid black;
padding: 30px;
margin: 10px;
width: 220px;
display:flex;
flex-direction:column;
align-items:center;
border-radius: 4px;
`

const Img = styled.img`
width:200px;
height:100px;
`

const Button = styled.button`
background-color:#F26419;
/* background-color:red; */
height:30px;
border-radius:8px;



`