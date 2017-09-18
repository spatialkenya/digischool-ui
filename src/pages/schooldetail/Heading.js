import React from 'react';
import PropTypes from 'prop-types';

class Back extends React.Component {
  render() {
    return (
      <div className="button-container col-md-3 col-md-push-9">
        <div className="back-button">
          <button type="button" className="button-back" onClick={this.context.router.goBack}>
            <div>
              <div>
                <span className="fa fa-chevron-left"></span>
                <span className="back-text"> BACK </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    )
  }
}

Back.contextTypes = {
  router: PropTypes.object.isRequired
};

export default class Heading extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <Back/>
          <div className="col-md-9 col-md-pull-3">
            <h3>{this.props.schoolName} PRIMARY</h3>
            <h5>{this.props.countyName} COUNTY</h5>
            <ol className="breadcrumb">
              <li>Schools</li>
              <li>{this.props.countyName}</li>
              <li>
                <span className="badge">{this.props.schoolName}l</span>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
