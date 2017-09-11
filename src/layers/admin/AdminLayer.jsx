import React from 'react';
import PropTypes from 'prop-types';
import {JaneLayer, Source, MapLayer} from 'jane-maps';
import SidebarComponent from './SidebarComponent';
import {sources, countyLayer} from './config';

class AdminLayer extends React.Component {

  constructor() {
    super();

    this.state = {
      checkboxes: {
        counties: true
      },
      selectCounty:null,
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  onCheckboxChange(name) {
    const checkboxes = {
      ...this.state.checkboxes,
      [name]: !this.state.checkboxes[name]
    };

    this.setState({checkboxes});
  }
  updateValue (newCounty) {
  		console.log('State changed to ' + newCounty);
  		console.log(this.props.children);
  		this.setState({
  			selectCounty: newCounty
  		});
  	}

  renderCounties() {
    if (!this.state.checkboxes.counties) {
      return null;
    }

    return [ <Source id = "counties" type = "geojson" data = {
        sources.countysource.data
      }
      />, < MapLayer id = 'counties'  source = 'counties' {
        ...countyLayer.counties
      } />
    ].map((child, index) => ({
      ...child,
      key: index
    }));
  }
  render() {
    return (
      <JaneLayer id="county" name="Counties" icon="flag" defaultSelected={this.props.defaultSelected} defaultDisabled={this.props.defaultDisabled} component={< SidebarComponent checkboxes = {
        this.state.checkboxes
      }
      onCheckboxChange = {
        this.onCheckboxChange
      } onSelectChange={this.updateValue} />}>
        {this.renderCounties()}
      </JaneLayer>
    );
  }
}

AdminLayer.propTypes = {
  defaultSelected: PropTypes.bool,
  defaultDisabled: PropTypes.bool,

};

AdminLayer.defaultProps = {
  defaultSelected: false,
  defaultDisabled: false
};

export default AdminLayer;
