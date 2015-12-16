'use strict'
import _ from 'lodash';

class BoardService {

	constructor() {
		this._lanes = [
			{id:0,  title: 'What went well?', cards: [] },
			{id:1,  title: 'What did not go well?',  cards: []},
			{id:2,  title: 'Action Items', cards: [] }
		];
	}

	get lanes() {
		return _.cloneDeep(this._lanes);
	}

	addLane(lane) {
		this._lanes.push(lane);
	}
	
	removeLane(lane){
		var laneIndex = _findIndex(this._lanes,{id: lane.id});
		this._lanes.splice(laneIndex,1);
	}

	addCard(card, laneId) {
		var lane = _.find(this._lanes, {id: laneId});
		card.id = lane.cards.length;
		lane.cards.push(_.cloneDeep(card));
	}
	
	updateCard(card, laneId) {
		var lane = _.find(this._lanes, {id: laneId});
		var cardIndex = _.findIndex(lane.cards,{id: card.id});
		lane.cards[cardIndex] = _.cloneDeep(card);
	}
	
	removeCard(card, laneId) {
		var lane = _.find(this._lanes, {id: laneId});
		var cardIndex = _.findIndex(lane.cards,{id: card.id});
		lane.cards.splice(cardIndex,1);
	}
}

module.exports = new BoardService();