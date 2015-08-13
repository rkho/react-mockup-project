var React = require('react');

var ShareButton = React.createClass({

  render: function() {
    return (
        <button className="button disabled" onClick={this.props.onDisabledButtonClick}>
          <p className="shareButtonText disabled">SHARE TRACKING</p>
        </button>
      )
  },

});

module.exports = ShareButton;
