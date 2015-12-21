'use strict'

import React from 'react';
import Lane from './lane.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

var boardService  = require('./board-service.jsx');

var Board = React.createClass({

	getInitialState(){
		return {
			lanes : []
		};
	},

	componentDidMount(){
		this.updateLanes();
	},

	updateLanes(){
		this.setState({lanes: boardService.lanes});
	},

	addLane(){
		boardService.addLane({title: 'New Lane'});
		this.updateLanes();
	},

	render(){
		var getLanes = () => {
		return this.state.lanes.map((lane, index) => {
				return (<div key={lane.id}  className="lanes">
					  		<Lane title={lane.title} id={lane.id} cards={lane.cards} onLaneUpdated={this.updateLanes}></Lane>
						</div>);
			});
		}

		return (
			<div>
				{getLanes()}
				<div>
					<RaisedButton className="add-lane-btn" label="Add New Lane" onTouchTap={this.addLane} primary={true}/>
				</div>
			</div>)
	 }
})

module.exports = Board;
