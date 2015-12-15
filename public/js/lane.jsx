'use strict'

import React from 'react'
import Card from './card.jsx'
import TextField from 'material-ui/lib/text-field'
import FloatingActionButton from 'material-ui/lib/floating-action-button'

var boardService = require('./board-service.jsx')

var Lane = React.createClass( {
	addNewCard(){
		let card = {
			content : this.refs.newCardContent.getValue(),
			likes: 0
		}
		boardService.addCard(card,this.props.id);
		this.refs.newCardContent.setValue("");
		this.props.onLaneUpdated();
	},
	
	onLike(card) {
		card.likes = card.likes + 1;
		boardService.updateCard(card, this.props.id);
		this.props.onLaneUpdated();
	},
	
	removeCard(card) {
		boardService.removeCard(card, this.props.id);
		this.props.onLaneUpdated();
	},
	
	render(){
		
		var getCards = ()=>{
			return this.props.cards.map((card, index) => {
				return (
					     <Card key={card.id} content={card.content} likes={card.likes}
							onLike={
								() => {
								this.onLike(card)
								}}
								removeCard={
									() => {
									this.removeCard(card)
								}}
								/>
						);
			});
		}
		
		return (<div className="lane">
			<div className="title">{this.props.title}</div>
			<div>
				<TextField hintText="Feedback" ref="newCardContent"/>
				<FloatingActionButton className="add-btn" onTouchTap={this.addNewCard} primary={true} mini={true}>
					<span>+</span>
				</FloatingActionButton>
			</div>
			
			{getCards()}
		</div>);
	}
})

module.exports = Lane