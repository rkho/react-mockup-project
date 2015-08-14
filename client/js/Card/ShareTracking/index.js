var React = require('react');

var ShareTrackingForm = require('./ShareTrackingForm');
var ShareTrackingButton = require('./ShareTrackingButton');

class ShareTracking extends React.Component {

  // Toggles between the `Share Tracking` button and the actual form to do so based on a `buttonClicked` boolean in state.

  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false
    }

    // I'm binding _onButtonClick to this specific component.

    this._onButtonClick = this._onButtonClick.bind(this);
  }

  render() {
    if (!this.state.buttonClicked) {
      return (
        this._renderButton()
        )
    }

    return (
      this._renderForm()
      )
  }

  _onButtonClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  _renderButton() {
    return(
      <div id="shareTrackingContainer">
        <ShareTrackingButton onDisabledButtonClick={this._onButtonClick} />
      </div>
      )
  }

  _renderForm() {
    return (
      <div id="shareTrackingContainer">
        <ShareTrackingForm onCloseButtonClick={this._onButtonClick}/>
      </div>

      )
  }

};

module.exports = ShareTracking;
