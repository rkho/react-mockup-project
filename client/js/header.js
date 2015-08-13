var React = require('react');

var Header = React.createClass({

  // Header is responsible for, well, the header for this webapp.

  // TODO: Click on the icon in the header to return to Shyp.com

  render: function() {
    return (
      <header>
        <div id="header">
          <img src={'./img/logo.png'} id="logo" />
        </div>
      </header>
      )
  }
})

module.exports = Header;
