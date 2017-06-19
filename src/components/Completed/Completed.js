import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo.js'
import style from './Completed.css'

class Completed extends Component {
	render() {
		let { todos, onTodoClick } = this.props
		return (
			<div className = { style.completedOuter }>
				<h2 className = { style.completedTitle }>已完成</h2>
				<ul>
					{
						todos.map( (todo, index) => {
							if (todo.completed) {
								return (
									<Todo 
										todo = { todo }
										key = {index}
										onTodoClick = { (index) => onTodoClick(index) }
									/>
								)
							}
						})
					}
				</ul>
			</div>

		)
	}
}

export default Completed