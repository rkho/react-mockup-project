var React = require('react');

var ShareTracking = require('./ShareTracking');
var ShippingInfo = require('./ShippingInfo');
var Tracking = require('./Tracking');

var Card = React.createClass({

  // Card encapsulates the center, well, card, containing a package's information
  componentWillMount: function() {
    this.setState({
      data: this.props.data
    })
  },

  render: function() {
    return (
        <div id="card">
          <ShippingInfo image={this.state.data.image} sender={this.state.data.sender} recipient={this.state.data.recipient} />
          <ShareTracking />
          <Tracking delivery={this.state.data.delivery} tracking={this.state.data.tracking} />
        </div>
      )
  }
});

module.exports = Card;
