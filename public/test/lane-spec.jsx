jest.dontMock('../js/card.jsx');
jest.dontMock('../js/lane.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Lane = require('../js/lane.jsx');
const Card = require('../js/card.jsx');
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');

describe('Lane', () => {
	
	it('should show lane title', () => {
		
			let lane = TestUtils.renderIntoDocument(
				<Lane title="My Lane"/>
			);
			
			let title = TestUtils.findRenderedDOMComponentWithClass(lane,'title')
			
			expect(title.textContent).toBe('My Lane');
	})
	
	it('should initially have no cards', () => {
		
		let cards = [{content: 'Test 1'}];
			let lane = TestUtils.renderIntoDocument(
				<Lane />
			);
			
			let cardsComponents = TestUtils.scryRenderedComponentsWithType(lane, Card)
			
			expect(cardsComponents.length).toBe(0);
	})
	
	it('should add new card', () => {
			let lane = TestUtils.renderIntoDocument(
				<Lane />
			);
			
			let cardsComponents = TestUtils.scryRenderedComponentsWithType(lane, Card)
			
			expect(cardsComponents.length).toBe(0);
			
			let newCardContent = TestUtils.findRenderedComponentWithType(lane, TextField);
			
			newCardContent.value = 'New Card';
			
			let createCard = TestUtils.findRenderedComponentWithType(lane, RaisedButton);
			TestUtils.Simulate.click(createCard);
			
			cardsComponents = TestUtils.scryRenderedComponentsWithType(lane, Card)
			
			expect(cardsComponents.length).toBe(1);
			expect(cardsComponents[0].props.content).toBe('New Card');
			
	})
	
})