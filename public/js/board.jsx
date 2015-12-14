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
	
	addLane(){
		let lane = {
			title: 'New Lane'
		}	
		let lanes = this.state.lanes;
		lanes.push(lane);
		this.setState({lanes: lanes});
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
			<div>
				<button className="add-lane-btn" onClick={this.addLane}>Add New Lane</button>
			</div>
		</div>)
	}
})

module.exports = Board;