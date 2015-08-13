var React = require('react');

var ShareButton = React.createClass({
  getInitialState: function() {
    return {
      buttonStatus: 'buttonDisabled'
    }
  },

  render: function() {
    return (
      <div id="buttonContainer">
        <button className="button">
          <p className="shareText"> SHARE TRACKING </p>
        </button>
      </div>
      )
  }
});

module.exports = ShareButton;
