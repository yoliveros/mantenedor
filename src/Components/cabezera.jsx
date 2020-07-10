import React, { Component } from "react";

const style = {
	inline: {
		display: 'inline'
	}
}

export default class Cabezera extends Component {
	render() {
		const { nuevoUsuario } = this.props
		return (
			<header>
				<h2 style={style.inline}>Usuarios</h2>
				<button onClick={nuevoUsuario} style={style.inline}>Nuevo Usuario</button>
			</header>
		)
	}
}