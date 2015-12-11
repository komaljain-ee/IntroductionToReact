jest.dontMock('../js/hello-world.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const HelloWorld = require('../js/hello-world.jsx');

describe('HelloWorld', () => {

    it('prints hello world', () => {
        var helloWorld = TestUtils.renderIntoDocument(
            <HelloWorld/>
        );

        var helloWorldNode = ReactDOM.findDOMNode(helloWorld, "p");

         expect(helloWorldNode.textContent).toEqual("Hello World!!!"); 
    });

});