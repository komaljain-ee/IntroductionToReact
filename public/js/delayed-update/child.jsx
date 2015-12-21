import React from 'react'

var Child = React.createClass({

  getInitialState(){
    return {
      events: []
    }
  },

  componentWillMount(){
    this.addEvent("Component will mount");
  },

  componentDidMount(){
    this.addEvent("Component did mount");
  },

  componentWillReceiveProps(newProps){
    this.addEvent("Component will receive props");
  },

  componentWillUpdate(newProps, nextState){
    console.log("Component will update");
  },

  componentDidUpdate(newProps, nextState){
    console.log("Component did update");
  },

  addEvent(event){
    console.log(event);
    var events = this.state.events;
    events.push(event);
    this.setState({events: events});
  },

  render(){
    return (
      <div>
        <h3>Child events</h3>
        <ul ref="events">
          {
            this.state.events.map((event, index)=>{
              return <div key={index}><li>{event}</li></div>
            })
          }
        </ul>

        <h3>Props from Parent</h3>
        <ul ref="props">
          {
            this.props.items.map((item, index)=>{
              return <div key={index}><li>{item}</li></div>
            })
          }
        </ul>
      </div>
    );
  }

})

module.exports = Child;
