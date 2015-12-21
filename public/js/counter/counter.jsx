var React = require('react');

var Counter = React.createClass({
   getInitialState: function() {
      return {
         count: 0
      }
   },

   incrementCount: function() {
      var newCount = this.state.count + 1;
      this.setState({count: newCount});
   },

   render: function() {
      return(
              <div>
                 <h1>Count : {this.state.count}</h1>
                 <button type="button" onClick={this.incrementCount}>Increment</button>
              </div>
          )
   }
});

module.exports = Counter;