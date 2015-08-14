var React = require('react');

class ShareTrackingButton extends React.Component {

  render() {
    return (
        <button className="button disabled" onClick={this.props.onDisabledButtonClick}>
          <p className="shareButtonText disabled">SHARE TRACKING</p>
        </button>
      )
  }

};

module.exports = ShareTrackingButton;
