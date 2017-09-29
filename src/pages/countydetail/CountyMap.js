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

export default class CountyMap extends React.Component {
  render() {
    const county = this.props.county
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
            </Jane>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
