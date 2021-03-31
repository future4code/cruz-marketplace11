import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Filtro from "./Filtro";
import Ordem from "./Ordem";

class Compras extends React.Component {
  render() {
    return (
      <div>
        <p>Página de comprassss</p>
        <Container>

          <ContainerPesquisar>
            <Ordem />
            <Filtro />

          </ContainerPesquisar>

        </Container>

        <button onClick={this.props.paginaHome}>Voltar para Home</button>
        <button onClick={this.props.paginaVendas}>Ir para Vendas</button>
      </div>
    );
  }
}


export default Compras;

const ContainerPesquisar = styled.div`
  display:flex;
  flex-flow: column-reverse wrap;
`

const Container = styled.div`
  width: 100%;
  min-width: 350px;
  //max-width: 1280px;

  display: flex;
  flex-flow: row wrap;

  margin: 0 auto;

`
