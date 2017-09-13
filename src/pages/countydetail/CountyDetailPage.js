import React from 'react';
import Topbar from '../topbar/Topbar';
import CountyDetail from './CountyDetail';
import './CountyDetail.css';
import 'isomorphic-fetch';

export default class CountyDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county: null,
    };
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.countyId !== this.props.match.params.countyId) {
      this.loadData();
    }
  }
  loadData() {
    fetch(`https://erick-otenyo.carto.com/api/v2/sql?q=SELECT * FROM%20kenya_counties WHERE cartodb_id=${this.props.match.params.countyId}&format=geojson`).then(response => {
      if (response.ok) {
        response.json().then(county => {
          this.setState({county: county.features[0]});
        });
      } else {
        response.json().then(error => {
          alert(`Failed to fetch county: ${error.message}`);
        });
      }
    }).catch(err => {
      alert(`Error in fetching data from server: ${err.message}`);
    });
  }
  render() {
    let content;
    if (!this.state.county) {
      content = <div>Loading...</div>;
    } else {
      const county = this.state.county;
      content = <div>
        <CountyDetail county={county}/>
      </div>;
    }
    return (
      <div><Topbar subhead="County Details"/>
          <div className="detail-page">
            {content}
          </div>
      </div>
    );
  }
}
