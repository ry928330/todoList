import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

class AddTodo extends Component {
	handleClick (e) {
		let { onAddClick } = this.props
		let node = this.refs.input
		let value = node.value.trim()
		onAddClick(value)
		node.value = ""
	}
	render () {
		return (
			<div>
				<div className = { style.header }>
					<div className = { style.headerContent}>
						<button onClick = { (e) => this.handleClick(e) }>AddToDoList</button>
						<input className = { style.inputCss } placeholder = "添加Todo" ref = 'input'/>
					</div>
				</div>
				
			</div>
		)
	}
}

AddTodo.PropTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo