/*
* @Author: ranran
* @Date:   2017-06-18 10:09:15
* @Last Modified by:   ranran
* @Last Modified time: 2017-06-18 22:06:35
*/

'use strict';
import React, { Component } from 'react'
import style from './Footer'

class Footer extends Component {
	renderFilter(filter, name) {
		if ( filter == this.props.filter ) {
			return name
		}

		return (
			<a href='#' 
				onClick = {(e) => {
					e.preventDefault()
					this.props.onFilterChange(filter)
				}}>{ name }
			</a>
		)
	}
	render() {
		return (
			<p className = { style.footer }>
				Show: 
				{' '}
				{ this.renderFilter('SHOW_ALL', 'All') }
				{', '}
				{ this.renderFilter('SHOW_COMPLETED', 'Completed') }
				{',  '}
				{ this.renderFilter('SHOW_ACTIVE', 'unCompleted') }
			</p>
		)
	}

}
export default Footer