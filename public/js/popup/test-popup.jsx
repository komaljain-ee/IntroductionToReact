import React from 'react';

var TestPopup  = React.createClass({
    getInitialState: function() {
        return {
            buttonClicked: "None"
        }
    },
   
   onYes: function() {
      this.setState({buttonClicked: "Yes"});
   },
   
   onNo: function() {
       this.setState({buttonClicked: "No"})
   },
   
   render: function() {
   		return (
               <div>
                  <h3>Button Clicked:  {this.state.buttonClicked}</h3>
		          <Popup onYes={this.onYes} onNo={this.onNo}/>
                </div>
		   );
   }
});

var Popup = React.createClass({
    render: function(){
        return (
                <div>
                    <button type="button" onClick={this.props.onYes}>Yes</button>
                    <button type="button" onClick={this.props.onNo}>No</button>
                </div>    
            );
    }
});

module.exports = TestPopup;