var React = require('react');

var ShareTracking = React.CreateClass({

  // In here, we're going to render a specific component based on whether or not the "Share Tracking" button has been clicked or not.

  getInitialState: function() {
    return({
      buttonClicked: false;
    })
  },

  render: function() {
    return (
      <div>
        <h2>Share Tracking</h2>
      </div>
      )
  }
});

module.exports = ShareTracking;
