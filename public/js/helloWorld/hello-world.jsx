import React from 'react';

var HelloWorld = React.createClass({
  render: function() {
    return (
      React.createElement('div', null, 'Hello World!')
    );
  }
});

module.exports = HelloWorld;