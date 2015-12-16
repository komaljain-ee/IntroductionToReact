'use strict'

import React from 'react'
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';

var Card = React.createClass( {
		
	render(){
		return (<Paper zDepth={3} className="card">
				   <div className="card-content">{this.props.content}</div>
				   <FontIcon className="material-icons trash-icon" onTouchTap={this.props.removeCard}>delete</FontIcon>
				   <div className="number-of-likes">+ {this.props.likes}</div>
		     	   <FontIcon className="material-icons like-btn" onTouchTap={this.props.onLike}>thumb_up</FontIcon>
			
				</Paper>)
	}
});

module.exports = Card