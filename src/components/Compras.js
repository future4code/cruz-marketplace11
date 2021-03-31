import React from "react";
import { render } from "react-dom";

class Compras extends React.Component {
  render() {
    return (
      <div>
        <p>Página de comprassss</p>

        <button onClick={this.props.paginaHome}>Voltar para Home</button>
        <button onClick={this.props.paginaVendas}>Ir para Vendas</button>
      </div>
    );
  }
}


export default Compras;
