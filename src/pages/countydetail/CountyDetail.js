import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import CountyMap from './CountyMap';

class Details extends React.Component {
  render() {
    return (
      <div className="box-wrapper-1">
        <div className="clearfix">
          <div className="box-wrapper-2">
            <div className="box-wrapper-3">
              <div className="box-head-wrapper">
                <span className="box-head">County Details</span>
              </div>
            </div >
            <div className="panels-wrapper">
              <div className="row equal">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Schools Summary</div>
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

class GoIP extends React.Component {
  render() {
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
                    <h4>
                      Call Issues
                    </h4>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div>
                        <p>Pivot analysis Table here</p>
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
                  <span className="box-head">Diva - G4s Analysis |
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
                    <h4>
                      G4s
                    </h4>
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
                    <h4>
                      WEEE data
                    </h4>
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
export default class CountyDetail extends React.Component {
  render() {
    const county = this.props.county
    return (
      <div>
        <Heading countyName={county.properties.county}/>
        <div className="col-md-6">
          <Details county={county}/>
          <GoIP county={county.goip}/>
          <G4S county={county.g4s}/>
        </div>
        <div className="col-md-6">
          <CountyMap county={county}/>
          <WEEE county={county.weee}/>
        </div>

      </div>
    );
  }
}
