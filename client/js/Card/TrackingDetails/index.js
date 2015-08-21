import React from 'react';

import TrackingDetailsRow from './TrackingDetailsRow';

class TrackingDetails extends React.Component {

  componentWillMount() {
    // Placing data into an array, in reverse order
    var trackingArray = [];

    for (var key in this.props.tracking) {
      trackingArray.unshift(this.props.tracking[key]);
    }

    this.setState({
      delivery: this.props.delivery,
      tracking: trackingArray
    })
  }

  // For each piece of tracking information store it in a TrackingDetailsRow
  // Each individual component needs to have a `key` assigned to it so React
  // can differentiate between them
  render() {
    return (
      <div id="tracking">
        <p className="trackingHeader">Your package is on its way!</p>
        <p className="trackingSubheader">Estimated arrival date is {this.state.delivery}</p>
        <tbody>
          {this.state.tracking.map(function(elem, i) {
            return (
              <TrackingDetailsRow tracking={elem} key={i} />
              )
          })}
        </tbody>
      </div>

      )
  }

};

module.exports = TrackingDetails;
