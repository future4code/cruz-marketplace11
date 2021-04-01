import styled from 'styled-components'
import React, { Component } from 'react'

export class Filtro extends Component {
    render() {
        return (
            <Container>
                <Title>Filtrar Pesquisas</Title>

                <h2>Filtrar por Preço</h2>
                <input onChange={this.props.atualizar} type="range" name="valorMin"
                    value={this.props.valorMin} id="min" min="0" max="500000" step="1000" />
                <label>Minino</label>
                <input onChange={this.props.atualizar} type="range" name="valorMax"
                    value={this.props.valorMax} id="max" min="1000" max="600000" step="1000" />
                <label>Máximo</label>
                <br />
                <h2>Filtrar por Título</h2>
                <input onChange={this.props.atualizar} value={this.props.valor} placeholder="Pesquisar por titulo..." />

            </Container>

        )
    }
}

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

