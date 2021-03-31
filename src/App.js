import React from 'react'
import { Component } from 'react'
import { AppContainer } from './components/AppContainer'
import { Filtro } from './components/Filtro'


class App extends Component {
	render() {
		return (
			<div>
				<AppContainer />
				<Filtro />
			</div>
		)
	}
}

export default App
