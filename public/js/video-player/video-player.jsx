import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import FontIcon from 'material-ui/lib/font-icon';

var VideoPlayer = React.createClass({

  getInitialState(){
    return {
      isPlaying: false
    }
  },

  play(){
    this.refs.video.play();
    this.setState({isPlaying: true});
  },

  pause(){
    this.refs.video.pause();
    this.setState({isPlaying: false});
  },

  render() {
    return (
      <div>
        <video ref="video" width="640" height="420">
          <source src={this.props.source} type="video/mp4"/>
        </video>
        <div className="controls">
        { this.state.isPlaying? <FloatingActionButton><FontIcon className="material-icons" onTouchTap={this.pause}>pause</FontIcon></FloatingActionButton> :
        <FloatingActionButton><FontIcon className="material-icons" onTouchTap={this.play}>play_arrow</FontIcon></FloatingActionButton> }
        </div>
      </div>
    );
  }
});

module.exports = VideoPlayer;
