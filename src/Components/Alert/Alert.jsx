import React, { Component } from 'react';

class Alert extends Component {

  render() {
    return (
        <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
            <strong>Probando!</strong> Esta es una Alerta
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

    );
  }

}

export default Alert;