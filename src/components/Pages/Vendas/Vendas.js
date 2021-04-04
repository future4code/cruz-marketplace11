import React from "react";
import { render } from "react-dom";
import FooterLargo from "../../Footer";
import Header from "../../Header";
import TesteForm from '../../TesteForm'

class Vendas extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Vendas;
