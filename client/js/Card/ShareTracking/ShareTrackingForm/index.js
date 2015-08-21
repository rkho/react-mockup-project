import React from 'react';

class ShareTrackingForm extends React.Component {

  render() {
    return (
        <div id="formContainer">
          <a onClick={this.props.onCloseButtonClick}><i className="fa fa-times close"></i></a>
          <p className="formShareText">SHARE TRACKING</p>
          <p className="name recipientInfo">RECIPIENT INFORMATION</p>
          <p className="name phoneFieldName">Phone Number</p>
          <input className="formInput" placeholder="(415) 555-0123" />
          <p className="orText">- OR -</p>
          <p className="name emailFieldName">Email Address</p>
          <input className="formInput" placeholder="name@example.com" />
          <button className="button enabled" onClick={this.props.onDisabledButtonClick}>
            <p className="shareButtonText enabled">SHARE TRACKING</p>
          </button>
          <a href="" className="shareUrl">https://track.shyp.com/qiuehv</a>
        </div>
      )
  }

};

module.exports = ShareTrackingForm;
