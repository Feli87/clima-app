import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
      <div className="container-fluid">
      <br></br>
      <br></br>
      <br></br>
        <p>Hola {this.props.name} desde página 1</p>
      </div>
    );
  }
}

export default Page1;
