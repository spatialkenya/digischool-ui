import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Topbar.css';

export default class Topbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand"></Link>
          <div className="navbar-title">DigiSchool Kenya
            <span className="title">
               {" | " + this.props.subhead}
            </span>
          </div>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right ">
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/analytics`}>Analytics</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Topbar.propTypes = {
  subhead: PropTypes.string
};
