import React from 'react';

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className="hello-world">Hello {this.props.name} !!!</div>
    );
  }
});

module.exports = HelloWorld;