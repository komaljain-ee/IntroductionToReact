'use strict'

import React from 'react'

var Card = React.createClass( {
		
	render(){
		return (<div>
		           {this.props.content}
				   <div>+ {this.props.likes}</div>
				   <button onClick={this.props.onLike}>Like</button>
		        </div>)
	}
});

module.exports = Card