import styled from 'styled-components'
import React, { Component } from 'react'

class Ordem extends Component {
    render() {
        return (
            <Container>
                <Title>Ordenar</Title>

                <h2>Por Preço</h2>
                <select onChange={this.props.atualizar} name="ordemPreço">
                    <option value="recomendado">Recomendado</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>

                <h2>Por Prazo</h2>
                <input onChange={this.props.atualizar} value={this.props.valorPrazo} placeholder="Pesquisar por prazo..."
                    name="ordemPrazo" />

                <h2>Por Título</h2>
                <input onChange={this.props.atualizar} value={this.props.valorTitulo} placeholder="Pesquisar por titulo..."
                    name="ordemTítulo" />

                <br />
                <button onClick={this.props.limpaOrdem}>
                    Limpar Ordem
                </button>

                <br />
            </Container>
        )
    }
}
export default Ordem;

const Container = styled.div`
  flex-basis: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  border: 2px #333 solid;
`
const Title = styled.div`
    font-size: 24px;
`
