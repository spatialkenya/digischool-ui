import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Jane, JaneLayer, MapLayer, Source} from 'jane-maps';
import {mapboxGLOptions} from '../../map.config';
import bbox from 'geojson-bbox';
import 'jane-maps/dist/styles.css';

mapboxGLOptions.mapStyle = 'mapbox://styles/mapbox/streets-v9';

const CountyMapComponent = () => (
  <div style={{
    padding: '15px'
  }}>County Layer</div>
);

const SchoolComponent = () => (
  <div style={{
    padding: '15px'
  }}>County Layer</div>
);

export default class CountyMap extends React.Component {
  render() {
    const county = this.props.county
    const school_data = `https://erick-otenyo.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20digischool where county='${county.properties.name}'&format=geojson`
    return (
      <MuiThemeProvider>
        <div style={{
          marginTop: '15px'
        }}>
          <div className="modalmap" style={{
            position: 'relative',
            height: '450px',
            marginBottom: '20px'
          }}>
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <JaneLayer id="County" name='County' icon="flag" component={< CountyMapComponent />}>
                <Source id="county" type="geojson" data={county}/>
                <MapLayer id="countylayer" source="county" type="line" paint={{
                  "line-color": "#454647",
                  "line-width": 2
                }} layout={{
                  "line-join": "round",
                  "line-cap": "round"
                }} fitFeatureBounds={bbox(county)}/>
              </JaneLayer>
              <JaneLayer id="schools" name='Schools' icon="university" component={< SchoolComponent />}>
                <Source id="schools" type="geojson" data={school_data}/>
                <MapLayer id="schoollayer" source="schools" type="circle" paint={{
                  "circle-color": {
                      property: 'present_devices',
                      stops: [
                        [
                          0, '#f1f075'
                        ],
                        [1, '#e55e5e']
                      ]
                  },
                  "circle-radius": 5,
                  "circle-stroke-width": 1,
                  "circle-stroke-color": "#fff"
                }}/>
              </JaneLayer>
            </Jane>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
