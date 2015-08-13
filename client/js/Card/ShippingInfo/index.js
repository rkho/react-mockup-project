var React = require('react');

var AddressCell = require('./AddressCell');

var ShippingInfo = React.createClass({

  // Info should contain three things:
  // An image of the item
  // A FROM address
  // A TO address
  componentWillMount: function() {
    this.setState({
      image: this.props.image,
      sender: this.props.sender,
      recipient: this.props.recipient
    })
  },

  render: function() {
    return (
      <div id="shippingInfoContainer">
        <img src={this.state.image} id="itemImage" />
        <AddressCell information={this.state.sender} direction={"FROM"} />
        <AddressCell information={this.state.recipient} direction={"TO"} />
      </div>
      )
  }
});

module.exports = ShippingInfo;
