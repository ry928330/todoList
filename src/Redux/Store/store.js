import { createStore, combineReducers, applyMiddleware} from 'redux'
import { addTodo, completeTodo, setVisibilityFilter, visibilityFilters } from '../Actions/action.js'
import todoApp from '../Reducers/Reducer.js'

var store = createStore(
	combineReducers({todoApp})
)

function getVisibleTodos(todos, filter) {
	switch(filter) {
		case visibilityFilters.SHOW_ALL:
			return todos
		case visibilityFilters.SHOW_COMPLETED:
			return todos.filter( todo => todo.completed)
		case visibilityFilters.SHOW_ACTIVE:
			return todo.filter( todo => !todo.completed)
	}
}

export const mapStateToProps = (state) => {
	return {
		visibleTodos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
		visibilityFilter: state.todoApp.visibilityFilter
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (text) => dispatch(addTodo(text)),   //添加新的todo项
		onTodoClick: (index) => dispatch(completeTodo(index)),  //完成todoList中的某一项
		onFilterChange: (nextFilter) => dispatch(setVisibilityFilter(nextFilter))
	}
}


export default store