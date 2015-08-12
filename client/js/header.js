var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <div className="header">
          <img src={'./img/logo.png'} className="logo" />
        </div>
      </header>
      )
  }
})

module.exports = Header;
