import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import Board from './retrowize/board.jsx';
import HelloWorld from './helloWorld/hello-world.jsx';
import Counter from './counter/counter.jsx';
import FilterList from './filterList/filter-list.jsx';
import TestPopup from './popup/test-popup.jsx';
import VideoPlayer from './video-player/video-player.jsx';

injectTapEventPlugin();

window.React = React;
window.ReactDOM = ReactDOM;
window.VideoPlayer = VideoPlayer;
window.HelloWorld = HelloWorld;
window.Counter = Counter;
window.FilterList = FilterList;
window.TestPopup = TestPopup;