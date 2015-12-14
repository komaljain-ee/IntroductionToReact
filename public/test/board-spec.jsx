jest.dontMock('../js/board.jsx');
jest.dontMock('../js/lane.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Lane = require('../js/lane.jsx');
const Board = require('../js/board.jsx');

describe('Board', () => {
	
	it('should show 3 lanes by default', () => {
		
			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			expect(board.state.lanes.length).toBe(3);
	})
	
	it('should add new lane', () => {
		
			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			let addLaneBtn = TestUtils.findRenderedDOMComponentWithClass(board, 'add-lane-btn');
			
			TestUtils.Simulate.click(addLaneBtn);
			
			expect(board.state.lanes.length).toBe(4);
	})
	
	it('should set lane titles', () => {
		
			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			let lanes = TestUtils.scryRenderedComponentsWithType(board, Lane);
			 
			expect(lanes[0].props.title).toBe('What went well?');
			expect(lanes[1].props.title).toBe('What did not go well?');
			expect(lanes[2].props.title).toBe('Action Items');
	})
	
	
})