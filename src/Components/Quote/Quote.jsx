import React, { Component } from 'react';

class Quote extends Component {

  render() {
    return (
     <div className="row m-1  pb-4">
      <div className="col-6 p-0 pr-1">
        <div className="card">
          <div className="card-header">
            Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-6 p-0">
        <div className="card">
          <div className="card-header">
            Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
     </div>

    );
  }

}

export default Quote;