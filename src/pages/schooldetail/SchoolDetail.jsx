import React from 'react';
import Heading from './Heading';
import SchoolMap from './SchoolMap';

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
  render() {
    return (
      <div className="row  box-wrapper-1">
        <div className="col-md-12">
          <div className="call-issues-details clearfix">
            <div className="box-wrapper-2">
              <div className="box-wrapper-3">
                <div className="box-head-wrapper">
                  <span className="box-head">Device Problems Reported</span>
                </div>
              </div>
              <div className="panels-wrapper">
                <div className="panel with-nav-tabs panel-default">
                  <div className="panel-heading">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#tab1default" className="closed" data-toggle="tab">Closed</a>
                      </li>
                      <li>
                        <a href="#tab2default" className="resolved" data-toggle="tab">Resolved</a>
                      </li>
                      <li>
                        <a href="#tab3default" className="escalated" data-toggle="tab">Escalated</a>
                      </li>
                    </ul>
                  </div>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div className="tab-pane fade in active" id="tab1default">number of closed issues</div>
                      <div className="tab-pane fade" id="tab2default">Number of resolved issues</div>
                      <div className="tab-pane fade" id="tab3default">Number of escalated issues</div>
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
          <GOIP school={school}/>
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
