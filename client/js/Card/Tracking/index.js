var React = require('react');
var _ = require('underscore')

var Row = require('./Row');

var Tracking = React.createClass({

  // Tracking will encapsulate all of the information regarding a package's travels.
  // If a package is scanned, Tracking will pick it up.

  // TODO: Each piece of tracking information is encapsulated within its own Tracking Info component
  // Each TrackingInfo component should contain the location, scanning notes, and icon
    // TODO: Add icon assets for tracking
    // TODO: Join the icons by a vertical line
  // ListView? Header + Footer w/o joining properties?

  // TODO: Try and make trackingHeader flex with text in the center when shrunk.

  componentWillMount: function() {
    // Placing data into an array, in reverse order
    var trackingArray = [];

    _.each(this.props.tracking, function(elem) {
      trackingArray.unshift(elem);
    })

    this.setState({
      delivery: this.props.delivery,
      tracking: trackingArray
    })
  },

  render: function() {
    return (
      <div id="tracking">
        <p className="trackingHeader">Your package is on its way!</p>
        <p className="trackingSubheader">Estimated arrival date is {this.state.delivery}</p>
        <tbody>
          {this.state.tracking.map(function(elem, i) {
            return (
              <Row tracking={elem} key={i} />
              )
          })}
        </tbody>
      </div>

      )
  }
});

module.exports = Tracking;
