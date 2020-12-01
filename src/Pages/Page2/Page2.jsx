import React, { Component } from 'react';

class Page2 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Hola {this.props.name} desde página 2</p>
      </div>
    );
  }
}

export default Page2;
