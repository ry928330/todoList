'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = function (_Component) {
	_inherits(AddTodo, _Component);

	function AddTodo() {
		_classCallCheck(this, AddTodo);

		return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).apply(this, arguments));
	}

	_createClass(AddTodo, [{
		key: 'handleClick',
		value: function handleClick() {
			var onAddClick = this.props.onAddClick;

			var node = this.refs.input;
			var value = node.value.trim();
			onAddClick(value);
			node.value = "";
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: _style2.default.header },
					_react2.default.createElement(
						'div',
						{ className: _style2.default.headerContent },
						_react2.default.createElement(
							'button',
							{ onclick: function onclick(e) {
									return handleClick(e);
								} },
							'AddToDoList'
						),
						_react2.default.createElement('input', { placeholder: '\u6DFB\u52A0Todo', ref: 'input' })
					)
				)
			);
		}
	}]);

	return AddTodo;
}(_react.Component);

AddTodo.PropTypes = {
	onAddClick: _react.PropTypes.func.isRequired
};

exports.default = AddTodo;