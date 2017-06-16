import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/store.js';
import App from './container/App/App.js';

render(
	<Provider store = { store } >
		<App />
	</Provider>,
	document.getElementById('root')
)