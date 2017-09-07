import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './SidePop.css';

export default class SidePop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SidePop: props.popup
    };
  }
  renderSidePop() {
    if (!this.state.SidePop) {
      return null;
    }
    return (<ParentComponent/>)
  }

  render() {
    return (this.renderSidePop());
  }
}

SidePop.propTypes = {
  popup: PropTypes.bool
};

class ParentComponent extends React.Component {
  render() {
    return (
      <span>
        <div className="selected-features">
          <a href="/" >
            <div className="explorer-list-item">
              <div id="featurename" className="title">Test title here</div>
              <div className="subtitle">Test subtitle here</div>
              <i className="fa fa-chevron-right"></i>
            </div>
          </a>
        </div>
      </span>
    );
  }
}
