var React = require('react');
var classNames = require('classnames');

var Row = React.createClass({

  componentWillMount: function() {
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
      'pickup': (this.state.type === 'pickup'),
      'preparation': (this.state.type === 'preparation'),
      'packaged': (this.state.type === 'packaged'),
      'shipped': (this.state.type === 'shipped'),
      'arrival': (this.state.type === 'arrival'),
      'departure': (this.state.type === 'departure'),
      'outForDelivery': (this.state.type === 'outForDelivery'),
      'delivered': (this.state.type === 'delivered')
    })

    return (
      <div className="rowContainer">
        <div className={classes} />
        <div className="rowDetails">
          <p className="trackingLocation">{this.state.location}</p>
          <p className="trackingNotes">{this.state.notes}</p>
        </div>
      </div>
      )
  }
});

module.exports = Row;
