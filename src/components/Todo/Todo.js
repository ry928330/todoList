import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Todo.css'

class Todo extends Component {
	render () {
		let { todo, onTodoClick } = this.props
		return (
			<li style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>
				<input className = { style.TodoInput } type = "checkbox" onclick = { () => onTodoClick() }/>
				<p> {todo.text} </p>
			</li>
		)
	}
}

Todo.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}

export default Todo