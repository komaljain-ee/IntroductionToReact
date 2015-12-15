'use strict'

import React from 'react'
import Paper from 'material-ui/lib/paper';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import IconButton from 'material-ui/lib/icon-button';

var Card = React.createClass( {
		
	render(){
		return (<Paper zDepth={3} className="card">
				   <div>{this.props.content}</div>
				   <FloatingActionButton mini={true} onTouchTap={this.props.removeCard} secondary={true}>
				   		<span>X</span>
				   </FloatingActionButton>
				   <div className="number-of-likes">+ {this.props.likes}</div>
				   <FloatingActionButton onTouchTap={this.props.onLike} primary={true} mini={true}>
				   </FloatingActionButton>
				   
				</Paper>)
	}
});

module.exports = Card