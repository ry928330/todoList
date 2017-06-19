import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Todo.css'

class Todo extends Component {
	render () {
		let { todo, onTodoClick, index } = this.props
		return (
			<li>
				<input className = { style.TodoInput } type = "checkbox" 
					onClick = { () => onTodoClick(index) }
					checked = { todo.completed ? 'checked' : '' }
				/>
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