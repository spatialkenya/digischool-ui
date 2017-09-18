import React from 'react';
import PropTypes from 'prop-types';
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
                        <i className="fa fa-child" aria-hidden="true"></i> {this.props.school.properties.class_one}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">No of Devices Present</div>
                    <div className="panel-body">
                      <h3>
                        <i className="fa fa-laptop" aria-hidden="true"></i> {this.props.school.properties.present_de}</h3>
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

const IssueRow = (props) => (
  <tr>
    <td>{props.issue.type}</td>
    <td>{props.issue.count}</td>
  </tr>
);

IssueRow.propTypes = {
  issue: PropTypes.object.isRequired
};

const IssueTable = (props) => {
  const issueRows = props.issues.map(issue => <IssueRow key={issue.type} issue={issue}/>);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

IssueTable.propTypes = {
  issues: PropTypes.array.isRequired
};

class Issues extends React.Component {
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

export default class SchoolDetail extends React.Component {
  render() {
    const school = this.props.school
    return (
      <div>
        <Heading countyName={school.properties.county} schoolName={school.properties.name_of_sc}/>
        <div className="col-md-6">
          <Details school={school}/>
          <Issues school={school}/>
        </div>
        <SchoolMap school={school}/>
      </div>
    );
  }
}
