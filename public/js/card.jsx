'use strict'

import React from 'react'

var Card = React.createClass( {
	
	render(){
		return (<div>{this.props.content}</div>)
	}
});

module.exports = Card