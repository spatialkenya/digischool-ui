import React from 'react';
import {Link} from 'react-router-dom';
import Topbar from '../topbar/Topbar';

import './Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Topbar subhead={"Welcome"}/>
        <div className="explorer-landing">
          <section className="header-area">
            <div className="container">
              <div className="row">
                <div className="section-bg col-lg-10 col-lg-offset-1 text-center">
                  <h1 className="section-heading">
                    DigiSchool Project Explorer
                  </h1>
                  <p className="subtitle">Comprehensive Digischool-Kenya Project Datasets</p>
                  <p className="learn-more">
                    <Link to={`${process.env.PUBLIC_URL}/about`}>Learn More</Link>
                  </p>
                  <div className="splash-button-section">
                    <div className="box all-link">
                      <Link className="btn btn-default" to={`${process.env.PUBLIC_URL}/schools/explorer`}>
                        <div className="vertical-align">Go to Map</div>
                      </Link>
                    </div>
                    <div className="box or-text">
                      <div className="vertical-align">or</div>
                    </div>
                    <div className="box all-link">
                      <Link className="btn btn-default" to={`${process.env.PUBLIC_URL}/analytics`}>
                        <div className="vertical-align">View analytics</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
