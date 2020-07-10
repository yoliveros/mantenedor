import React, { Component } from 'react'

export default class List extends Component {

	handleClick = id => x => {
		const { handleClick } = this.props
		handleClick(id)
	}

	render() {
		const { data } = this.props
		return (
			<ul>
				{data.map(x =>
					<li key={x.id}>{x.name}<button onClick={this.handleClick(x.id)}>Edit</button></li>
				)}
			</ul>
		)
	}
}