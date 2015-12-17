import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import Board from './retrowize/board.jsx';
import HelloWorld from './helloWorld/hello-world.jsx';
import Counter from './counter/counter.jsx';
import FilterList from './filterList/filter-list.jsx';
import VideoPlayer from './video-player/video-player.jsx';

injectTapEventPlugin();


window.React = React;
window.ReactDOM = ReactDOM;
window.VideoPlayer = VideoPlayer;

// ReactDOM.render(<FilterList/>, document.getElementById('app'));
