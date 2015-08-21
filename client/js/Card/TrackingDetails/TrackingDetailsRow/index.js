import React from 'react';
import classNames from 'classnames';

class TrackingDetailsRow extends React.Component {

  componentWillMount() {
    this.setState({
      carrier: this.props.tracking.carrier,
      location: this.props.tracking.location,
      notes: this.props.tracking.notes,
      trackingNumber: this.props.tracking.tracking,
      type: this.props.tracking.type
    })
  }

  render() {
    // The classNames module is used to set the appropriate SVG element used in each tracking scan.

    // While `pickup` and `home` share the same `pin` SVG, the `pickup` class will not continue the vertical line drawn after the element.

    var classes = classNames({
      'circle': true,
      'pickup': (this.state.type === 'pickup'),
      'home': (this.state.type === 'pickup' || this.state.type === 'preparation'),
      'packaged': (this.state.type === 'packaged'),
      'pin': (this.state.type === 'shipped' || this.state.type === 'arrival' || this.state.type === 'departure'),
      'outForDelivery': (this.state.type === 'outForDelivery'),
      'delivered': (this.state.type === 'delivered')
    })

    return (
      <div className="rowContainer">
        <div className={classes} />
        <div className="rowDetails">
          <p className="trackingLocation">{this.state.location}</p>
          {this._renderNotes()}
        </div>
      </div>
      )
  }

  _renderNotes() {
    if (this.state.carrier) {
      return (
        <p className="trackingNotes">{this.state.notes}<br />via {this.state.carrier} <a href="">{this.state.trackingNumber}</a></p>
        )
    }

    return (
      <p className="trackingNotes">{this.state.notes}</p>
      )
  }

};

module.exports = TrackingDetailsRow;
