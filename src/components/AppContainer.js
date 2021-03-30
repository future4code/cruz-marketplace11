import axios from 'axios'
import React, { Component } from 'react'
import TesteForm from './TesteForm'


export class AppContainer extends Component {
  state = {
    carrosAVenda: [],
    nome: "",
    descricao: "",
    preco: "",
    metodoPagamento: "",
    tempoEntrega: ""
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
    this.setState({ metodoPagamento: evt.target.value })
  }

  pegaTempoEntrega = evt => {
    this.setState({ tempoEntrega: evt.target.value })
  }

  pegarTodosOsCarros = async () => {
    try {
      const todosOsCarros = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars ",
      )
      console.log("TODOS OS CARROS/DADOS: ", todosOsCarros.data)
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


  render() {
    return (
      <div>
        <p>Pronto para começar!</p>

        <TesteForm
          nome={this.pegaNome}
          descricao={this.pegaDescricao}
          preco={this.pegaPreco}
          metodoPagamento={this.pegaMetodoPagamento}
          tempoEntrega={this.pegaTempoEntrega}
          enviarFormularioCompleto={this.enviarFormulario}

        />
        <button onClick={this.todosOsCarros}>Checar todos os carros</button>
        {/* <button onClick={this.deletarCarroAVenda}> Deletar carro 27</button> */}

      </div>
    )
  }
}
