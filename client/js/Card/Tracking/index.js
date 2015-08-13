var React = require('react');

var Tracking = React.createClass({

  // Tracking will encapsulate all of the information regarding a package's travels.
  // If a package is scanned, Tracking will pick it up.

  // TODO: Each piece of tracking information is encapsulated within its own Tracking Info component
  // Each TrackingInfo component should contain the location, scanning notes, and icon
    // TODO: Add icon assets for tracking
    // TODO: Join the icons by a vertical line
  // ListView? Header + Footer w/o joining properties?

  render: function() {
    return (
      <div id="tracking">
        <h1>Tracking</h1>
      </div>
      )
  }
});

module.exports = Tracking;
