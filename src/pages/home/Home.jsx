import React from 'react';
import {Link} from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Select from 'react-select';
import './Home.css';
import {withRouter} from 'react-router-dom'
import fetch from 'isomorphic-fetch';

const Home = withRouter(({history}) => {

  function onSelectChange(newCounty) {
    history.push(`${process.env.PUBLIC_URL}/county/${newCounty}`)
  };
  function getCounties(input) {
    if (!input) {
      return Promise.resolve({options: []});
    }

    return fetch(`https://erick-otenyo.carto.com/api/v2/sql?q=SELECT cartodb_id,county FROM kenya_counties where county ilike '${input}%25'`).then((response) => response.json()).then((json) => {
      return {options: json.rows};
    });
  }
  return (
    <div>
      <Topbar subhead={"Welcome"}/>
      <div className="explorer-landing">
        <section className="header-area">
          <div className="container">
            <div className="row">
              <div className="section-bg col-lg-10 col-lg-offset-1 text-center">
                <h1 className="section-heading">
                  DigiSchool Visualization and Analytics
                </h1>
                <p className="subtitle">Kenya Digital Literacy Programme - Collaborative Monitoring</p>
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
                  <div className="box county-link">
                    <Select.Async name="form-field-name" simpleValue placeholder="View County Analytics" valueKey="cartodb_id" labelKey="county" loadOptions={getCounties} onChange={onSelectChange}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
})

export default Home;
