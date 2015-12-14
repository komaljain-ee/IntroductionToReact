import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import Board from './board.jsx'

injectTapEventPlugin();
ReactDOM.render(<Board/>, document.getElementById('app'));