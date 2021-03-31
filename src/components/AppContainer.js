import "./styles.css";
import React from "react";
import Compras from "./components/Compras";
import Vendas from "./components/Vendas";
import Home from "./components/Home";
class App extends React.Component {
  state = {
    telaAtual: "home"
  };

  paginaCompras = () => {
    this.setState({ telaAtual: "paginaCompras" });
  };

  paginaVendas = () => {
    this.setState({ telaAtual: "paginaVendas" });
  };

  paginaHome = () => {
    this.setState({ telaAtual: "home" });
  };

  render() {
    let escolherPagina = () => {
      switch (this.state.telaAtual) {
        case "paginaCompras":
          return (
            <Compras
              paginaHome={this.paginaHome}
              paginaVendas={this.paginaVendas}
            />
          );
        case "paginaVendas":
          return (
            <Vendas
              paginaHome={this.paginaHome}
              paginaCompras={this.paginaCompras}
            />
          );
        default:
          return (
            <Home
              paginaCompras={this.paginaCompras}
              paginaVendas={this.paginaVendas}
            />
          );
      }
    };

    return <div className="App">{escolherPagina()}</div>;
  }
}
export default App;
