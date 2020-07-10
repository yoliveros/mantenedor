import React, { Component } from 'react'
import Cabezera from './cabezera'
import List from './List'

export default class ViewList extends Component {
	render() {
		const { data, handleClick, nuevoUsuario } = this.props
		return (
			<div>
				<Cabezera nuevoUsuario={nuevoUsuario} />
				<List handleClick={handleClick} data={data} />
			</div>
		)
	}
}