import React from "react";
import FooterLargo from "./Footer";
import Header from "./Header";
import axios from "axios";
import TesteCard from "./TesteCard";
import styled from 'styled-components'

class Home extends React.Component {

  state = {
    carrosAVenda: [],
    carrosPaginaHome: []
  }

  componentDidMount() {
    this.pegarTodosOsCarros()
  }

  verState = (carro) => {
    console.log(" o que esta vindo  state dentro do compras: ", carro)
    this.setState({ carroSelecionado: carro })
      console.log("vendo se o state funcionou: ", this.state.carroSelecionado)

  }


  pegarTodosOsCarros = async () => {
    try {
      const todosOsCarros = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars ",
      )
      let arrayAleatorio = []
      for (let i = 0; i < 6; i++) {
        arrayAleatorio.push(todosOsCarros.data.cars[Math.floor(Math.random() * todosOsCarros.data.cars.length)]
        )
      }
      console.log("array aleatorio: ", arrayAleatorio)
      this.setState({ carrosPaginaHome: arrayAleatorio })
      console.log("TEste do state CarrosPagHome: ", this.state.carrosPaginaHome)

      console.log("TODOS OS CARROS/DADOS: ", todosOsCarros.data.cars)
      console.log("Teste de n° aleatorio: ", Math.floor(Math.random() * todosOsCarros.data.cars.length))
      this.setState({ carrosAVenda: todosOsCarros.data.cars }, () => console.log("array carros a venda: ", this.state.carrosAVenda))
    } catch (error) {
      console.log("Erro encontrado : ", error)
    }

  }

  carrosAleatorios = () => {
    let arrayAleatorio = []
    for (let i = 0; i < 6; i++) {
      arrayAleatorio.push(Math.floor(Math.random() * this.state.carrosAVenda.length))
    }
    // console.log("array carros aleatorios: ",this.state.carrosPaginaHome)
    console.log("array aleatorio no carros ale: ", arrayAleatorio)
  }


  render() {

    const CarrosHome = this.state.carrosPaginaHome.map((carro) => {

      return (
          <TesteCard
            key={carro.id}
            imagem={carro.imagen}
            modelo={carro.Modelo}
            nome={carro.name}
            valor={carro.price}
            id={carro}
            detalhes={() => {
              this.verState(carro, () => console.log("carro selecionado: ", this.state.carroSelecionado))
              this.props.verState(carro)
            }
            }
          />

      )
    })


    return (
      <div>
        <Header
          paginaHome={this.props.paginaHome}
          paginaCompras={this.props.paginaCompras}
          paginaVendas={this.props.paginaVendas}
        />

<Container>

{CarrosHome}
</Container>
        



        <FooterLargo />
      </div>
    );
  }
}

export default Home;


const Container  = styled.div`
display:flex;
width:930px;
flex-wrap:wrap;
margin:auto;
background-color:#F26419;
`