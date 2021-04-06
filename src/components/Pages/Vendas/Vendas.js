import React from "react";
import { render } from "react-dom";
import FooterLargo from "../../Footer";
import Header from "../../Header";
import TesteForm from '../../TesteForm'
import styled from 'styled-components'
class Vendas extends React.Component {
  render() {
    return (
      <Container>
        <Header
          paginaHome={this.props.paginaHome}
          paginaCompras={this.props.paginaCompras}
          paginaVendas={this.props.paginaVendas}
        />
        {/* <button onClick={this.props.paginaHome}>Voltar para Home</button>
        <button onClick={this.props.paginaCompras}>Ir para Compras</button> */}









        <TesteForm
          nome={this.props.nome}
          descricao={this.props.descricao}
          preco={this.props.preco}
          metodoPagamento={this.props.metodoPagamento}
          tempoEntrega={this.props.tempoEntrega}
          enviarFormularioCompleto={this.props.enviarFormularioCompleto}

        />
        <FooterLargo />
      </Container>
    );
  }
}

export default Vendas;


const Container = styled.div`
max-width: 1440px;
min-width: 1000px;
margin:auto;
`