var React = require('react');

class Header extends React.Component {

  render() {
    return (
      <header>
        <div id="header">
          <a href=""><img src={'./img/logo.png'} id="logo" /></a>
        </div>
      </header>
      )
  }

};

module.exports = Header;
