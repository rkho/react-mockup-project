var React = require('react');
var classNames = require('classnames');

var Row = React.createClass({

  componentWillMount: function() {
    var trackingNotes = this.props.tracking.notes;

    if (this.props.tracking.tracking) {
      trackingNotes += '\n' + this.props.tracking.carrier + ' ' + this.props.tracking.tracking;
    }

    this.setState({
      carrier: this.props.tracking.carrier,
      location: this.props.tracking.location,
      notes: this.props.tracking.notes,
      trackingNumber: this.props.tracking.tracking,
      type: this.props.tracking.type
    })
  },

  render: function() {

    var classes = classNames({
      'circle': true,
      'home pickup': (this.state.type === 'pickup'),
      'home': (this.state.type === 'preparation'),
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
  },

  _renderNotes: function() {

    if (this.state.carrier) {
      return (
        <p className="trackingNotes">{this.state.notes}<br />via {this.state.carrier} <a href="">{this.state.trackingNumber}</a></p>
        )
    }

    return (
      <p className="trackingNotes">{this.state.notes}</p>
      )
  }

});

module.exports = Row;
