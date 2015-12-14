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
			content : this.refs.newCardContent.getValue(),
			likes: 0
		}
		let cards = this.state.cards;
		cards.push(card);
		this.setState({cards: cards});
		this.refs.newCardContent.setValue("");
	},
	
	onLike(index) {
		console.log(index);
		var cards = this.state.cards;
		cards[index].likes = cards[index].likes + 1;
		this.setState({cards: cards});
	},
	
	render(){
		
		var getCards = ()=>{
			return this.state.cards.map((card, index)=>{
				return (<Card key={index} content={card.content} index={index} likes={card.likes}
							onLike={
								() => {
								this.onLike(index)
								}
							}/>);
			});
		}
		
		return (<div>
			<div className="title">{this.props.title}</div>
			<div>
				<TextField hintText="Feedback" ref="newCardContent"/>
				<RaisedButton onTouchTap={this.addNewCard} label="+" primary={true} />
			</div>
			
			{getCards()}
		</div>);
	}
})

module.exports = Lane