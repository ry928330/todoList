'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = require('redux');

var _action = require('../Actions/action.js');

var _Reducer = require('../Reducers/Reducer.js');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)(_Reducer2.default));

function getVisibleTodos(todos, filter) {
	switch (filter) {
		case _action.visibilityFilters.SHOW_ALL:
			return todos;
		case _action.visibilityFilters.SHOW_COMPLETED:
			return todos.filter(function (todo) {
				return todo.completed;
			});
		case _action.visibilityFilters.SHOW_ACTIVE:
			return todo.filter(function (todo) {
				return !todo.completed;
			});
	}
}

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
	return {
		visibleTodos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
		visibilityFilter: state.todoApp.visibilityFilter
	};
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onAddClick: function onAddClick(text) {
			return dispatch((0, _action.addTodo)(text));
		}, //添加新的todo项
		onTodoClick: function onTodoClick(index) {
			return dispatch((0, _action.completeTodo)(index));
		}, //完成todoList中的某一项
		onFilterChange: function onFilterChange(nextFilter) {
			return dispatch((0, _action.setVisibilityFilter)(nextFilter));
		}
	};
};

exports.default = store;