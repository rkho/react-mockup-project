var React = require('react');

var AddressCell = React.createClass({

  componentWillMount: function() {
    this.setState({
      city: this.props.information.address.city,
      country: this.props.information.address.country,
      direction: this.props.direction,
      name: this.props.information.name,
      state: this.props.information.address.state,
      street: this.props.information.address.street,
      zip: this.props.information.address.zip
    })
  },

  render: function() {
    return (
      <div className="addressCell">
        <p className="direction">{this.state.direction}</p>
        <p className="name">{this.state.name}</p>
        <p className="address">
          {this.state.street}<br />
          {this.state.city}, {this.state.state}<br />
          {this.state.zip}
          </p>
      </div>
      )
  }
});

module.exports = AddressCell;
