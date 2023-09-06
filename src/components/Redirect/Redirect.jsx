import React, { Component } from 'react';

class Redirect extends Component {
  constructor(props) {
    super(props);
    window.location = props.url;
  }

  render() {
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;
