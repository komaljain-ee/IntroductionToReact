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
                    return <div key={index} className="item">
                      <button className="btn" onClick={()=>{ this.displayPopup(index)} }>Delete</button>
                      <span>{item}</span>
                    </div>
                  })
                }
              </div>
		          <Popup display={this.state.showPopup} title="Confirmation" onYes={this.deleteItem} onNo={this.onNo}>
                <div>
                    Do you want to delete item {this.state.currentItemIndex + 1 }?
                </div>
              </Popup>
                </div>
		   );
   }
});

var Popup = React.createClass({
    render: function(){
        return (
                <div className="popup" style={{display: this.props.display? "block": "none"}}>
                    <div className="popup-container">
                        <div className="title">{this.props.title}</div>
                        <div className="content">
                          <div>{this.props.children}</div>
                          <div className="footer">
                            <button className="secondary btn" type="button" onClick={this.props.onYes}>Yes</button>
                            <button className="primary btn" type="button" onClick={this.props.onNo}>No</button>
                          </div>
                        </div>
                    </div>
                </div>
            );
    }
});

module.exports = TestPopup;
