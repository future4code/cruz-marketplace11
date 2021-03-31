import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello CodeSandbox zzz</h1>
        <button onClick={this.props.paginaCompras}>Ir para Compras</button>
        <button onClick={this.props.paginaVendas}>Ir para Vendas</button>
      </div>
    );
  }
}

export default Home;
