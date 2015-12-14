'use strict'

import React from 'react'
import Card from './card.jsx'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

var Lane = React.createClass( {
	
	getInitialState(){
		return {
			cards : []
		}
	},
	
	addNewCard(){
		let card = {
			content : this.refs.newCardContent.value
		}
		let cards = this.state.cards;
		cards.push(card);
		this.setState({cards: cards});
		this.refs.newCardContent.value = "";
	},
	
	render(){
		var getCards = ()=>{
			return this.state.cards.map((card)=>{
				return (<Card key={card.content} content={card.content}/>);
			});
		}
		
		return (<div>
			<div className="title">{this.props.title}</div>
			<div>
				<input type="text" ref="newCardContent"></input>
				<button onClick={this.addNewCard}>Add Card</button>
			</div>
			
			{getCards()}
		</div>);
	}
})

module.exports = Lane