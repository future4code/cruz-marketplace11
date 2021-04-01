// import { styled } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'






class TesteCard extends React.Component {

    render() {

        return (
        <DivContainer>
            <Img src={this.props.imagem} />
            <h3>{this.props.nome} {this.props.modelo}</h3>
            <p>{this.props.preco}</p>
        
        
        </DivContainer>)
    }
}



const DivContainer = styled.div`
height:220px;
border: 1px solid black;
`

const Img = styled.img`
width:140px;
`
export default TesteCard