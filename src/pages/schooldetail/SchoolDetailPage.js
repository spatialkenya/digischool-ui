import React from 'react';
import Topbar from '../topbar/Topbar';
import SchoolDetail from './SchoolDetail';
import './SchoolDetail.css';
import 'isomorphic-fetch';

export default class SchoolDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      loading: true
    };
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.schoolId !== this.props.match.params.schoolId) {
      this.loadData();
    }
  }
  loadData() {
    fetch(`https://erick-otenyo.carto.com/api/v2/sql?q=SELECT * FROM%20kenya_open_data_initiative_kodi_primary_schools WHERE cartodb_id=${this.props.match.params.schoolId}&format=geojson`).then(response => {
      if (response.ok) {
        response.json().then(school => {
          this.setState({school: school.features[0], loading: false});
        });
      } else {
        response.json().then(error => {
          alert(`Failed to fetch issue: ${error.message}`);
        });
      }
    }).catch(err => {
      alert(`Error in fetching data from server: ${err.message}`);
    });
  }
  render() {
    let content;
    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else {
      const school = this.state.school;
      content = <div>
        <SchoolDetail school={school}/>
      </div>;
    }
    return (
      <div><Topbar subhead="School Details"/>
        <div className="fullscreen">
          <div className="school-page">
            {content}
          </div>
        </div>
      </div>
    );
  }
}
