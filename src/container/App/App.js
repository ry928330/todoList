import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddTodo from '../../components/AddTodo/AddTodo.js'
import TodoList from '../../components/TodoList/TodoList.js'
import Footer from '../../components/Footer/Footer.js'
import Completed from '../../components/Completed/Completed.js'
import { mapStateToProps, mapDispatchToProps } from '../../Redux/Store/store.js'

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		const { visibleTodos, visibilityFilter, onAddClick, onTodoClick, onFilterChange } = this.props
		return (
			<div>
				<AddTodo onAddClick = { onAddClick }/>
				<TodoList todos = {visibleTodos} onTodoClick = { onTodoClick }/>
				<Footer filter = { visibilityFilter } onFilterChange = { onFilterChange }/>
			</div>
		)
	}
}

App.PropTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps) (App)