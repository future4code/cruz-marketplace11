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
                <button onClick={() => this.props.detalhes(this.props.id)}>Ir para detalhes</button>
                {/* <p>{console.log("PROPS: ",this.props)}</p> */}
            </DivContainer>
        )
    }
}



const DivContainer = styled.div`

height: 220px;
border: 1px solid black;
padding: 30px;
margin: 10px;
width: 250px;
`

const Img = styled.img`
width:140px;
`
export default TesteCard