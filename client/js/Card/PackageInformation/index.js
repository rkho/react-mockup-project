import React from 'react';

import AddressCell from './AddressCell';

class PackageInformation extends React.Component {

  componentWillMount() {
    this.setState({
      image: this.props.image,
      sender: this.props.sender,
      recipient: this.props.recipient
    })
  }

  render() {
    return (
      <div id="shippingInfoContainer">
        <img src={this.state.image} id="itemImage" />
        <AddressCell information={this.state.sender} direction={"FROM"} />
        <AddressCell information={this.state.recipient} direction={"TO"} />
      </div>
      )
  }

};

module.exports = PackageInformation;
