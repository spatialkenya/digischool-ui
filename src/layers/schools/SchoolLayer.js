import React from 'react';
import PropTypes from 'prop-types';
import {JaneLayer, Source, MapLayer} from 'jane-maps';
import SidebarComponent from './SidebarComponent';
import {sources, schoolAll, schoolNotReceived} from './config';
import mapboxgl from 'mapbox-gl';

class SchoolJaneLayer extends React.Component {
  static contextTypes = {
    map: PropTypes.object
  };
  constructor(props, context) {

    super(props, context);

    this.state = {
      checkboxes: {
        schools_all: true,
        schools_received: true,
        schools_not_received: true
      }
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange(name) {
    if (name === 'schools_all') {
      const checkboxes = {
        ...this.state.checkboxes,
        [name]: !this.state.checkboxes[name],
        schools_received:!this.state.checkboxes[name],
        schools_not_received:!this.state.checkboxes[name]
      };
      this.setState({checkboxes});
    } else if (name === "schools_received") {
      const checkboxes = {
        ...this.state.checkboxes,
        [name]: !this.state.checkboxes[name],
        schools_all: this.state.checkboxes[name],
        schools_not_received: this.state.checkboxes[name]
      };
      this.setState({checkboxes});

    } else if (name === "schools_not_received") {
      const checkboxes = {
        ...this.state.checkboxes,
        [name]: !this.state.checkboxes[name],
        schools_received: this.state.checkboxes[name],
        schools_all: this.state.checkboxes[name]
      };
      this.setState({checkboxes});
    }

  }
  onLayerClick(features, map) {
    features.forEach(feature => {
      const detail_url = `${process.env.PUBLIC_URL}/schools/${feature.properties.id}`;
      const detail_link = '<a className="school-link" href="' + detail_url + '">View School Details</a>';
      const content = '<div class="panel panel-default"><div class="panel-heading"><i class="fa fa-info-circle" aria-hidden="true" style="padding-right: 5px;"></i>' + feature.properties.name + ' PRIMARY' + '</div><div class="panel-body">' + detail_link + '</div>'
      new mapboxgl.Popup().setLngLat(feature.geometry.coordinates).setHTML(content).addTo(map);
    });
  }
  renderSchools_all() {
    if (!this.state.checkboxes.schools_received) {
      return null;
    }

    return [ < Source id = "schools" type = "geojson" data = {
        sources.schoolsource_all.data
      }
      cluster clusterMaxZoom = {
        9
      } />, < MapLayer id = 'cluster_count' type = 'symbol' source = 'schools' {
        ...schoolAll.cluster_count
      } />, < MapLayer id = 'unclustered' type = 'symbol' source = 'schools' onClick = {
        this.onLayerClick
      }
      {
        ...schoolAll.unclustered
      } />, < MapLayer id = "schools_all" source = "schools" {
        ...schoolAll.school_all
      } />
    ].map((child, index) => ({
      ...child,
      key: index
    }));
  }
  renderSchoolsNotReceived() {
    if (!this.state.checkboxes.schools_not_received) {
      return null;
    }
    return [ < Source id = "schools_not" type = "geojson" data = {
        sources.schoolsource_all.data
      } />, < MapLayer id = "schools_not" source = "schools_not" {
        ...schoolNotReceived
      }
      onClick = {
        this.onLayerClick
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
        {this.renderSchools_all()}
        {this.renderSchoolsNotReceived()}
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
