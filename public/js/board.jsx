'use strict'

import React from 'react';

import Lane from './lane.jsx';

var Board = React.createClass({
	
	getInitialState(){
		return {
			lanes : [
				{ title: 'What went well?'},
				{ title: 'What did not go well?'},
				{ title: 'Action items'}
				]
		};
	},
	
	render(){
		var getLanes = () => {
		return this.state.lanes.map((lane) => {
				return (<Lane key={lane.title} title={lane.title}></Lane>);
			});
		}
		
		return (
			<div>
			{getLanes()}
		</div>)
	}
})

module.exports = Board;