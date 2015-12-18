import React from 'react';

var TestPopup  = React.createClass({
    getInitialState: function() {
        return {
            status: "",
            showPopup: false
        }
    },
   
   onYes: function() {
      this.setState({status: "Yes", showPopup: false});
   },
   
   onNo: function() {
       this.setState({status: "No", showPopup: false})
   },
   
   displayPopup: function() {
       this.setState({showPopup: true})
   },
   
   render: function() {
   		return (
               <div>
                  <div className="full-content">
                    <h3>Deleted:  {this.state.status}</h3>
                    <button onClick={this.displayPopup}>Delete</button>
                  </div>
		          <Popup  display={this.state.showPopup} onYes={this.onYes} onNo={this.onNo}/>
                </div>
		   );
   }
});

var Popup = React.createClass({
    render: function(){
        return (
                <div className="popup" style={{display: this.props.display? "block": "none"}}>
                    <div className="popup-content">
                        <div>Are you sure?</div>
                        <button type="button" onClick={this.props.onYes}>Yes</button>
                        <button type="button" onClick={this.props.onNo}>No</button>
                    </div>
                </div>    
            );
    }
});

module.exports = TestPopup;