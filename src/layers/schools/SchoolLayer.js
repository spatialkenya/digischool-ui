import React from 'react';
import PropTypes from 'prop-types';
import {JaneLayer, Source, MapLayer} from 'jane-maps';
import SidebarComponent from './SidebarComponent';
import {sources, schoolLayers} from './config';
import mapboxgl from 'mapbox-gl';

class SchoolJaneLayer extends React.Component {
  static contextTypes = {
    map: PropTypes.object
  };
  constructor(props, context) {

    super(props, context);

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
  onLayerClick(features,map) {
    features.forEach(feature => {
      const detail_url = `${process.env.PUBLIC_URL}/schools/${feature.properties.cartodb_id}`;
      const detail_link = '<a className="school-link" href="' + detail_url + '">View School Details</a>';
      const content = '<div class="panel panel-default"><div class="panel-heading"><i class="fa fa-info-circle" aria-hidden="true" style="padding-right: 5px;"></i>' + feature.properties.name_of_sc +' PRIMARY'+ '</div><div class="panel-body">' + detail_link + '</div>'
      new mapboxgl.Popup().setLngLat(feature.geometry.coordinates).setHTML(content).addTo(map);
    });
  }
  renderSchools() {
    if (!this.state.checkboxes.schools) {
      return null;
    }

    return [ < Source id = "schools" type = "geojson" data = {
        sources.schoolsource.data
      }
      cluster clusterMaxZoom = {
        9
      } />, < MapLayer id = 'cluster_count' type = 'symbol' source = 'schools' {
        ...schoolLayers.cluster_count
      } />, < MapLayer id = 'unclustered' type = 'symbol' source = 'schools' onClick = {
        this.onLayerClick
      }
      {
        ...schoolLayers.unclustered
      } />, < MapLayer id = "schools_done" source = "schools" {
        ...schoolLayers.school_done
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
