'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AddTodo = require('../../components/AddTodo/AddTodo.js');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('../../components/TodoList/TodoList.js');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('../../components/Footer/Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

var _store = require('../../Redux/Store/store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    visibleTodos = _props.visibleTodos,
			    visibilityFilter = _props.visibilityFilter,
			    _onAddClick = _props.onAddClick,
			    _onTodoClick = _props.onTodoClick,
			    _onFilterChange = _props.onFilterChange;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_AddTodo2.default, { onAddClick: function onAddClick(text) {
						return _onAddClick(text);
					} }),
				_react2.default.createElement(_TodoList2.default, { todos: visibleTodos, onTodoClick: function onTodoClick(index) {
						return _onTodoClick(index);
					} }),
				_react2.default.createElement(_Footer2.default, { filter: visibilityFilter, onFilterChange: function onFilterChange(nextFilter) {
						return _onFilterChange(nextFilter);
					} })
			);
		}
	}]);

	return App;
}(_react.Component);

App.PropTypes = {
	visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		text: _react.PropTypes.string.isRequired,
		completed: _react.PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, mapDispatchToProps)(APP);