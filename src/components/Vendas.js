import React from "react";
import { render } from "react-dom";

class Vendas extends React.Component {
  render() {
    return (
      <div>
        <p>Página de VENDAS.................</p>
        <button onClick={this.props.paginaHome}>Voltar para Home</button>
        <button onClick={this.props.paginaCompras}>Ir para Compras</button>
      </div>
    );
  }
}

export default Vendas;
