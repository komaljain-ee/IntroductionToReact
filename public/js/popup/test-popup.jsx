import React from 'react';

var TestPopup  = React.createClass({
    getInitialState: function() {
        return {
            showPopup: false,
            items: [
              "item 1",
              "item 2",
              "item 3",
              "item 4",
              "item 5"
            ]
        };
    },

   deleteItem: function() {
     var items = this.state.items;
     items.splice(this.state.currentItemIndex,1);

      this.setState({items: items, showPopup: false});
   },

   onNo: function() {
       this.setState({showPopup: false})
   },

   displayPopup: function(index) {
       this.setState({currentItemIndex: index, showPopup: true})
   },

   render: function() {
   		return (
               <div>
                 <div className="full-content">
                 { this.state.items.map((item, index) => {
                    return <div className="item">
                      <button onClick={()=>{ this.displayPopup(index)} }>Delete</button>
                      <span>{item}</span>
                    </div>
                  })
                }
              </div>
		          <Popup display={this.state.showPopup} onYes={this.deleteItem} onNo={this.onNo}/>
                </div>
		   );
   }
});

var Popup = React.createClass({
    render: function(){
        return (
                <div className="popup" style={{display: this.props.display? "block": "none"}}>
                    <div className="popup-container">
                        <div className="title">Are you sure?</div>
                        <div className="content">
                          <button className="secondary" type="button" onClick={this.props.onYes}>Yes</button>
                          <button className="primary" type="button" onClick={this.props.onNo}>No</button>
                        </div>
                    </div>
                </div>
            );
    }
});

module.exports = TestPopup;
