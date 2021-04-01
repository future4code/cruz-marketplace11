// import "./styles.css";
import React from "react";
import Compras from "./components/Compras";
import Vendas from "./components/Vendas";
import Home from "./components/Home";
import TesteForm from './components/TesteForm'
import Detalhes from './components/Pages/Detalhes/Detalhes'
import axios from 'axios'
import Footer from './components/Footer'
import TesteCard from "./components/TesteCard";
// import TesteForm from './TesteForm'
import styled from 'styled-components'

class App extends React.Component {

  state = {
    carrosAVenda: [],
    nome: "",
    descricao: "",
    preco: "",
    metodoPagamento: "",
    tempoEntrega: "",
    telaAtual: "home",
    carroSelecionado: {}

  }
  verCarrosAVenda =  () => {
console.log("CARROS A VENDA NO STATE: ",this.state.carrosAVenda)
  }


  paginaCompras = () => {
    this.setState({ telaAtual: "paginaCompras" });
  };

  paginaVendas = () => {
    this.setState({ telaAtual: "paginaVendas" });
  };

  paginaHome = () => {
    this.setState({ telaAtual: "home" });
  };

  paginaDetalhes = ( id ) => {
	  this.setState({ telaAtual: 'detalhes'})
  }


  componentDidMount() {
    this.pegarTodosOsCarros()
  }

  pegaNome = (evt) => {
    this.setState({ nome: evt.target.value })
  }

  pegaDescricao = (evt) => {
    this.setState({ descricao: evt.target.value })
  }

  pegaPreco = evt => {
    this.setState({ preco: evt.target.value })
  }

  pegaMetodoPagamento = evt => {
    this.setState({ metodoPagamento: evt.target.value }, () =>{
		console.log(this.state.metodoPagamento)
	})
	
  }

  pegaTempoEntrega = evt => {
    this.setState({ tempoEntrega: evt.target.value })
  }

  pegarTodosOsCarros = async () => {
    try {
      const todosOsCarros = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars ",
      )
      console.log("TODOS OS CARROS/DADOS: ", todosOsCarros.data.cars)
	  this.setState({carrosAVenda:todosOsCarros.data.cars })
    } catch (error) {
      console.log("Erro encontrado : ", error)
    }

  }

  enviarFormulario = async () => {

    const body = {
      name: this.state.nome,
      description: this.state.descricao,
      price: this.state.preco,
      paymentMethod: this.state.metodoPagamento,
      shipping: this.state.tempoEntrega
    }

    try {
      console.log("BODY : ", body)
      const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars",
        body)
      console.log("response, o q ta indo: ", response)

    } catch (error) {
      console.log("Erro: ", error)
    }
  }

  deletarCarroAVenda = async (id) => {
    if (window.confirm("Voce tem certeza que quer deletar este veículo?")) {
      try {
        const deletado = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars/pcrXjHNR8Fnrsa2qqEmY`)
        alert("veículo deletado!")
        this.pegarTodosOsCarros()
      } catch (error) {
        console.log("Erro encontrado ao tentar deletar: ", error)
        alert("ERRO!Carro nao encontrado", error)
      }
    }
  }




detalheCarro20 = () => {


}

verState = ( carro) => {
  console.log( " o que esta vindo : ",carro)
  this.setState({carroSelecionado:carro }, () => {
    console.log("vendo se o state funcionou: ",this.state.carroSelecionado)
  })
  this.setState({ telaAtual: 'detalhes'})

  
}







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
		  case "detalhes":
		  return ( <Detalhes
        valor={this.state.carroSelecionado.price}
        metodoPagamento={this.state.carroSelecionado.paymentMethod}
        prazo={this.state.carroSelecionado.shipping}
        modelo={this.state.carroSelecionado.Modelo}
        imagem={this.state.carroSelecionado.imagen}
        descricao={this.state.carroSelecionado.description}
		  pagina={this.paginaHome}
		  
		  />)
        default:
          return (
            <Home
              paginaCompras={this.paginaCompras}
              paginaVendas={this.paginaVendas}
            />
          );
      }
    };

	const Card = this.state.carrosAVenda.map ( (carro) => {
    // let carroSelecionado = this.state.carroSelecionado
		return (<TesteCard 
    
		imagem = {carro.imagen}
		modelo= {carro.Modelo}
		nome= {carro.name}
		preco = {carro.price}
		// detalhes={() => this.paginaDetalhes(carro.id)}
    detalhes={() =>this.verState(carro)}

		/>
    
    )
	})

    return  <div className="App">{





      <div>
      {escolherPagina()}

      {/* <TesteForm
        nome={this.pegaNome}
        descricao={this.pegaDescricao}
        preco={this.pegaPreco}
        metodoPagamento={this.pegaMetodoPagamento}
        tempoEntrega={this.pegaTempoEntrega}
        enviarFormularioCompleto={this.enviarFormulario}

      /> */}



      <button onClick={this.pegarTodosOsCarros}>Checar todos os carros</button>
	  <button onClick={this.verCarrosAVenda}>Checar no log carros a venda</button>
	  <button onClick={this.paginaDetalhes}>Ir para detalheszzzzzzz</button>
    <ContainerParaTestes>

	  {Card}

    </ContainerParaTestes>
	  <button onClick={this.detalhesCarro20}>Ver detalhes carro 20</button>
      {/* <button onClick={this.deletarCarroAVenda}> Deletar carro 27</button> */}
      {/* <Footer /> */}
    </div>

    }
    </div>;
  }
}



export default App;


const ContainerParaTestes = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width: 1280px;
`