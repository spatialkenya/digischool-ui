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
                    <div className="panel-heading">Some Detail Heading</div>
                    <div className="panel-body">
                      <h3>
                        Some details here
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Details again !</div>
                    <div className="panel-body">
                      <h3>Yet another detail placeholder</h3>
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
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>
                      GOIP Call Centre
                      <span className="label label-default">
                        JKUAT
                      </span>
                    </h4>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Issues here</p>
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
        <Heading countyName={school.properties.province} schoolName={school.properties.name_of_sc}/>
        <div className="col-md-6">
          <Details school={school}/>
          <Issues school={school.issues}/>
        </div>
        <SchoolMap school={school}/>
      </div>
    );
  }
}
