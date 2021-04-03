import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Filtro from "./Filtro";
import Ordem from "./Ordem";
import axios from "axios";
import TesteCard from "./TesteCard";


class Compras extends React.Component {
  state = {
    carrosAVenda: [],
    nome: "",
    preco: "",
    carroSelecionado: {},

    descricao: "",
    metodoPagamento: "",
    tempoEntrega: "",

  }

  verCarrosAVenda = () => {
    console.log("CARROS A VENDA NO STATE: ", this.state.carrosAVenda)
  }

  componentDidMount() {
    this.pegarTodosOsCarros()
  }

  pegarTodosOsCarros = async () => {
    try {
      const todosOsCarros = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars ",
      )
      console.log("TODOS OS CARROS/DADOS: ", todosOsCarros.data.cars)
      this.setState({ carrosAVenda: todosOsCarros.data.cars })
    } catch (error) {
      console.log("Erro encontrado : ", error)
    }

  }


  render() {

    const Card = this.state.carrosAVenda.map((carro) => {
      // let carroSelecionado = this.state.carroSelecionado
      return (<TesteCard
        key={carro.id}

        imagem={carro.imagen}
        modelo={carro.Modelo}
        nome={carro.name}
        preco={carro.price}
        onClick={() => this.paginaDetalhes(carro.id)}
      //detalhes={() => this.verState(carro)}

      />

      )
    })


    return (
      <div>
        <p>Página de comprassss</p>
        <Container>
          <ContainerPesquisar>
            <Ordem />
            <Filtro />
          </ContainerPesquisar>
          <ContainerResultado>
            {Card}
          </ContainerResultado>
        </Container>

        <button onClick={this.props.paginaHome}>Voltar para Home</button>
        <button onClick={this.props.paginaVendas}>Ir para Vendas</button>
      </div>
    );
  }
}


export default Compras;

const ContainerResultado = styled.div`
display: flex;
flex: 1;
flex-flow: row wrap
`

const ContainerPesquisar = styled.div`
  display:flex;
  flex-flow: column-reverse;
  
`

const Container = styled.div`
  width: 100%;
  min-width: 350px;
  //max-width: 1280px;

  display: flex;
  flex-flow: row;

  margin: 0 auto;
`


