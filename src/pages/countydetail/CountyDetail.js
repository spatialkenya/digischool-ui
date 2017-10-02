import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import CountyMap from './CountyMap';
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
                <span className="box-head">County Details</span>
              </div>
            </div >
            <div className="panels-wrapper">
              <div className="row equal">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Schools Summary</div>
                    <div className="panel-body">
                      <h5>
                        Total Number of Schools: {this.props.county.schools}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Total number of Devices </div>
                    <div className="panel-body">
                      <h5>No of devices here</h5>
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
    if (prevProps.county_id !== this.props.county_id) {
      this.loadIssues();
    }
  }
  loadIssues() {
    fetch(`https://digischool.mybluemix.net/api/v1/issues/?school__county=${this.props.county_id}`, { headers: { "Authorization":"Token 9f0cd680a086d671d0bf316086a4be3a3dd58968"}}).then(response => {
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
              "Year/Month": $.pivotUtilities.derivers.dateFormat("date", "%y-%m")
            },
            rows: ["error_code"],
            cols: ["Year/Month"]
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
                    <h4>
                      Call Issues
                    </h4>
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
        <Heading countyName={county.properties.name}/>
        <div className="col-md-6">
          <Details county={county.properties}/>
          <GoIP county_id={county.id}/>
          <G4S county={county}/>
        </div>
        <div className="col-md-6">
          <CountyMap county={county}/>
          <WEEE county={county.weee}/>
        </div>

      </div>
    );
  }
}
