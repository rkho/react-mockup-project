var React = require('react');

var ShareTracking = require('./ShareTracking');
var PackageInformation = require('./PackageInformation');
var TrackingDetails = require('./TrackingDetails');

class Card extends React.Component {

  componentWillMount() {
    this.setState({
      data: this.props.data
    })
  }

  render () {
    return (
        <div id="card">
          <PackageInformation image={this.state.data.image} sender={this.state.data.sender} recipient={this.state.data.recipient} />
          <ShareTracking />
          <TrackingDetails delivery={this.state.data.delivery} tracking={this.state.data.tracking} />
        </div>
      )
  }

};

module.exports = Card;
