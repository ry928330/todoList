import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo.js'
import style from './TodoList.css'

class TodoList extends Component {
	render() {
		let { todos, onTodoClick } = this.props
		return (
			<div className = { style.toDoListOuter }>
				<h2 className = { style.toDoListTitle }>正在进行</h2>
				<ul>
					{
						todos.map( (todo, index) => {
							return (
								<Todo 
									todo = { todo }
									key = {index}
									index = {index}
									onTodoClick = { (index) => onTodoClick(index) }
								/>
							)
						})
					}
				</ul>
			</div>

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