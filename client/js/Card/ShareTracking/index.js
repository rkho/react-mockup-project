var React = require('react');

var ShareButton = require('./ShareButton');

var ShareTracking = React.createClass({

  // In here, we're going to render a specific component based on whether or not the "Share Tracking" button has been clicked or not.

  // Set the button's properties based on state (CSS, onclick)

  getInitialState: function() {
    return({
      buttonClicked: false
    })
  },

  render: function() {
    if (!this.state.buttonClicked) {
      return (
        <ShareButton />
        )
    }
  }
});

module.exports = ShareTracking;
