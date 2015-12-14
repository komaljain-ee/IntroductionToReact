'use strict'

import React from 'react';

import Lane from './lane.jsx';

var Board = React.createClass({
	
	getInitialState(){
		return {
			lanes : [
				{ title: 'What went well?'},
				{ title: 'What did not go well?'},
				{ title: 'Action Items'}
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
		return this.state.lanes.map((lane, index) => {
				return (<div className="lanes">
					  		<Lane key={index}  index={index} title={lane.title}></Lane>
						</div>);
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