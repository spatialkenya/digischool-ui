import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-sticky navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">Digischool</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right smooth-scroll">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
