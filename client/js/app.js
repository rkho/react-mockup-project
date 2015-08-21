import React from 'react';

import Header from './Header';
import Card from './Card';

class App extends React.Component {

  // App renders the components that make up our entire webapp.

  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      loaded: false,
      endpoint: 'https://shypcc.firebaseio.com/shipments/1.json'
    }
  }

  // During its componentWillMount lifecycle, App will make an Ajax request for data.

  // I'm only using Firebase's REST API because I'm only
  // making one specific GET request to stubbed data, and
  // the results of that call are being trickled down to the rest of my component as props.

  componentWillMount() {
    fetch(this.state.endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          loaded: true
        })
      })
  }

  // If our API call hasn't yet completed, show a spinning animation.
  // Otherwise, show the page with our content.
  render() {
    if (!this.state.loaded) {
      return (
        this._renderLoading()
        )
    }
    return (
      this._renderPage()
      )
  }

  _renderLoading() {
    return (
      <div>
        <Header />
        <div id="container">
          <i className="fa fa-spinner fa-spin fa-5x loading" />
        </div>
      </div>
      )
  }

  _renderPage() {
    return (
      <div>
        <Header />
        <div id="container">
          <Card data={this.state.data} />
        </div>
      </div>
      )
  }

};

React.render(<App />, document.getElementById('app'));

module.exports = App;
