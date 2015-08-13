var React = require('react');
var $ = require('jQuery');

var Header = require('./header');
var Card = require('./Card');

var App = React.createClass({

  // App renders the Header shown as well as a container that encapsulates our Card component.
  // We're also going to make an AJAX request here and pass the data down to child components as props.
    // For the purposes of this challenge, I'm just utilizing Firebase's REST API to make a single request to some stubbed data.
    // TODO: Center the spinning animation

  getInitialState: function() {
    return {
      data: undefined,
      loaded: false
    }
  },

  componentDidMount: function() {
    if (!this.state.data) {
      $.get('https://shypcc.firebaseio.com/shipments/1.json', function(result) {
        this.setState({
          data: result,
          loaded: true
        })
      }.bind(this))
    }
  },

  render: function() {
    if (!this.state.loaded) {
      return (
        <div>
          <Header />
          <div id="container">
            <i className="fa fa-spinner fa-spin fa-5x loading" />
          </div>
        </div>
        )
    }
    return (
      <div>
        <Header />
        <div id="container">
          <Card data={this.state.data} />
        </div>
      </div>
      )
  }
});

React.render(<App />, document.getElementById('app'));

module.exports = App;
