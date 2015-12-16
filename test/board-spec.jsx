jest.dontMock('../public/js/board.jsx');
jest.dontMock('../public/js/lane.jsx');
jest.dontMock('material-ui/lib/raised-button');
jest.dontMock('react-tap-event-plugin');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const Lane = require('../public/js/lane.jsx');
const boardService = require('../public/js/board-service.jsx');
const RaisedButton = require('material-ui/lib/raised-button');
const Board = require('../public/js/board.jsx');


describe('Board', () => {

	it('should fetch lanes from BoardService', () => {
		boardService.lanes = [{title: 'Test Lane', cards:[], id: 0}];

			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			expect(board.state.lanes).toBe(boardService.lanes);
	})

	it('should add new lane', () => {

			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			let addLaneBtn = TestUtils.findRenderedDOMComponentWithClass(board, 'add-lane-btn');
			TestUtils.Simulate.touchTap(addLaneBtn);

			expect(boardService.addLane).toBeCalled();
	})

	it('should set lane titles', () => {
			boardService.lanes = [{title: 'Test Lane', cards:[], id: 0}]
			let board = TestUtils.renderIntoDocument(
				<Board/>
			);
			let lanes = TestUtils.scryRenderedComponentsWithType(board, Lane);

			expect(lanes[0].props.title).toBe('Test Lane');

	})


})
