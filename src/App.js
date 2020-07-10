import React, { Component } from 'react'
import './App.css'
import UserForm from './Components/userForm'
import ViewList from './Components/viewList'
import Axios from 'axios'

export default class App extends Component {

	state = {
		data: [],
		route: 'Lista'
	}

	constructor() {
		super()
		Axios.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => this.setState({ data }))
	}

	seleccionaUsuario = id => {
		this.setState({
			route: 'Formulario',
			usuarioSeleccionado: id
		})
	}

	agregarUsuario = usuario => {
		Axios.post('https://jsonplaceholder.typicode.com/users', usuario)
			.then(({ data }) => {
				const newData = this.state.data.concat(data)
				this.setState({ data: newData, route: 'Lista' })
			})
	}

	actualizarNuevoUsuario = (id, values) => {
		Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
			.then(() => {
				const newData = this.state.data.map(f => f.id === id ? values : f)
				console.log(newData)
				this.setState({
					data: newData,
					route: 'Lista'
				})
			})
	}

	nuevoUsuario = () => this.setState({ route: 'Formulario' })

	render() {
		const { route, data, usuarioSeleccionado } = this.state
		const valoresIniciales = usuarioSeleccionado && data.find(f => f.id === usuarioSeleccionado)
		return (
			<div className="App">
				<header className="App-header">
					{route === 'Lista' && <ViewList
						nuevoUsuario={this.nuevoUsuario}
						handleClick={this.seleccionaUsuario} data={data} />}
					{route === 'Formulario' && <UserForm
						valoresIniciales={valoresIniciales || {}}
						handleSubmit={this.agregarUsuario}
						handleUpdate={this.actualizarNuevoUsuario} />}
				</header>
			</div>
		);
	}
}