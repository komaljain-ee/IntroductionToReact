'use strict'

import React from 'react';
import Lane from './lane.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

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
				return (<div key={index}  className="lanes">
					  		<Lane index={index} title={lane.title}></Lane>
						</div>);
			});
		}
		
		return (
			<div>
				{getLanes()}
				<div>
					<RaisedButton label="Add New Lane" onTouchTap={this.addLane} primary={true}/>
				</div>
			</div>)
	 }
})

module.exports = Board;