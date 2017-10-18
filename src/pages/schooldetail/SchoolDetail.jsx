import React from 'react';
import Heading from './Heading';
import SchoolMap from './SchoolMap';
import $ from 'jquery';
import pivottable from 'pivottable';

class Details extends React.Component {
  render() {
    return (
      <div className="box-wrapper-1">
        <div className="clearfix">
          <div className="box-wrapper-2">
            <div className="box-wrapper-3">
              <div className="box-head-wrapper">
                <span className="box-head">School Details</span>
              </div>
            </div >
            <div className="panels-wrapper">
              <div className="row equal">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Class One Enrollment</div>
                    <div className="panel-body">
                      <h3>
                        <i className="fa fa-child" aria-hidden="true"></i> {this.props.school.properties.class_one_enrollment}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">No of Devices Present</div>
                    <div className="panel-body">
                      <h3>
                        <i className="fa fa-laptop" aria-hidden="true"></i> {this.props.school.properties.present_devices}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class GOIP extends React.Component {
  constructor(props){
    super(props)
    this.state={
      issues:null
    }
  }

  componentDidMount() {
    this.loadIssues();
}
  componentDidUpdate(prevProps) {
    if (prevProps.school_id !== this.props.school_id) {
      this.loadIssues();
    }
  }
  loadIssues() {
    fetch(`https://digischool.mybluemix.net/api/v1/issues/?school=${this.props.school_id}`).then(response => {
      if (response.ok) {
        response.json().then(issues => {
          console.log(issues);
          this.setState({issues: issues});
        });
      } else {
        response.json().then(error => {
          alert(`Failed to fetch issues: ${error.message}`);
        });
      }
    }).catch(err => {
      alert(`Error in fetching data from server: ${err.message}`);
    });
  }

  render() {
    // const issues_count = issues.length
    let content;
    if(!this.state.issues){
      content = <div>Loading Issues...</div>;
    }
    if (this.state.issues) {
        $("#output").pivotUI(
          this.state.issues,{
            derivedAttributes: {
              "Year": $.pivotUtilities.derivers.dateFormat("date", "%y")
            },
            rows: ["error_code"],
            cols: ["Year"]
          });
    }

    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Diva - Device Issues Analysis |
                    <span className="label label-default">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      Data from GOIP Call Centre
                    </span>
                  </span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>
                      GOIP - Call Centre
                    </h5>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        {content}
                        <div id="output"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class G4S extends React.Component {
  render() {
    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Diva - G4S Analysis |
                    <span className="label label-default">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      Data from G4S
                    </span>
                  </span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>
                      G4S - Devices Delivery
                    </h5>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Analysis Table here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class COM21 extends React.Component {
  render() {
    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Diva - COM 21 Analysis |
                    <span className="label label-default">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      Data from COM 21
                    </span>
                  </span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>
                      COM 21 - Installation, Teacher training
                    </h5>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Analysis Table here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class WEEE extends React.Component {
  render() {
    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Diva - WEEE Analysis |
                    <span className="label label-default">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      Data from  WEEE
                    </span>
                  </span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>
                      WEEE - e-waste Management
                    </h5>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Analysis Table here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class TPL extends React.Component {
  render() {
    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Diva - TPL Analysis |
                    <span className="label label-default">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                      Data from  TPL
                    </span>
                  </span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5>
                      TPL - Installation, Teacher training

                    </h5>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Analysis Table here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class SchoolDetail extends React.Component {
  render() {
    const school = this.props.school
    return (
      <div>
        <Heading countyName={school.properties.county} schoolName={school.properties.name}/>
        <div className="col-md-6">
          <Details school={school}/>
          <GOIP school_id={school.properties.id}/>
            <G4S school={school}/>
            <TPL school={school}/>
        </div>
        <div className="col-md-6">
          <SchoolMap school={school}/>
          <WEEE school={school}/>
          <COM21 school={school}/>
        </div>
      </div>
    );
  }
}
