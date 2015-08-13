var React = require('react');

var Form = require('./Form');
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
        this._renderButton()
        )
    }

    return (
      this._renderForm()
      )
  },

  _onButtonClick: function() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  },

  _renderButton: function() {
    return(
      <div id="shareTrackingContainer">
        <ShareButton onDisabledButtonClick={this._onButtonClick} />
      </div>
      )
  },

  _renderForm: function() {
    return (
      <div id="shareTrackingContainer">
        <Form onCloseButtonClick={this._onButtonClick}/>
      </div>

      )
  }
});

module.exports = ShareTracking;
