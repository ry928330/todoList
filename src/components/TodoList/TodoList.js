import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo.js'
import style from './TodoList.css'

class TodoList extends Component {
	render() {
		let { todos, onTodoClick } = this.props
		return (
			<ul>
				{
					todos.map( (todo, index) => {
						<Todo {...todo}
							key = {index}
							onTodoClick = { (index) => onTodoClick(index) }
						/>
					})
				}
			</ul>
		)
	}
}

TodoList.PropTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}

export default TodoList