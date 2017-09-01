import React from 'react';
import PropTypes from 'prop-types';
import {JaneLayer, Source, MapLayer} from 'jane-maps'

import SidebarComponent from './SidebarComponent';
import {sources, schoolLayers} from './config';

class SchoolJaneLayer extends React.Component {

  constructor() {
    super();

    this.state = {
      checkboxes: {
        schools: true
      }
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange(name) {
    const checkboxes = {
      ...this.state.checkboxes,
      [name]: !this.state.checkboxes[name]
    };

    this.setState({checkboxes});
  }
  onLayerClick(features) {
    features.forEach(feature => {
      alert(feature.properties.status);
    });
  }
  renderSchools() {
    if (!this.state.checkboxes.schools) {
      return null;
    }

    return [ < Source id = "schools" type = "geojson" data = {
        sources.schoolsource.data
      } />, < MapLayer id = "schools_done" onClick={this.onLayerClick} source = "schools" {
        ...schoolLayers.school_done
      } />, < MapLayer id = "schools_not" onClick={this.onLayerClick} source = "schools" {
        ...schoolLayers.school_not
      } />
    ].map((child, index) => ({
      ...child,
      key: index
    }));
  }
  render() {
    return (
      <JaneLayer id="school" name="Schools" icon="university" defaultSelected={this.props.defaultSelected} defaultDisabled={this.props.defaultDisabled} component={< SidebarComponent checkboxes = {
        this.state.checkboxes
      }
      onCheckboxChange = {
        this.onCheckboxChange
      } />}>
        {this.renderSchools()}
      </JaneLayer>
    );
  }
}

SchoolJaneLayer.propTypes = {
  defaultSelected: PropTypes.bool,
  defaultDisabled: PropTypes.bool
};

SchoolJaneLayer.defaultProps = {
  defaultSelected: false,
  defaultDisabled: false
};

export default SchoolJaneLayer;