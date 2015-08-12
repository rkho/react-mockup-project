var React = require('react');

var Header = require('./header')

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <div className="card">
        </div>
      </div>
      )
  }
});

React.render(<App />, document.getElementById('app'));

module.exports = App;
