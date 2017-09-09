export const mapboxGLOptions = {

  mapbox_accessToken: 'pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q',
  // mapStyle: 'mapbox://styles/mapbox/streets-v9',
  center: [
    36.8219, -1.2921 //center the map to Nairobi
  ],
  zoom: 7,
  minZoom: 5,
  maxZoom: null,
  pitch: 0,
  hash: false,
  navigationControlPosition: 'bottom-right'
};

export const searchConfig = {
  mapzen_api_key: 'mapzen-ZyMEp5H',
  bounds: {
    minLon: 33.90958023071289,
    maxLon: 41.89101028442383,
    minLat: -4.674901008605957,
    maxLat: 5.482579231262207
  }
};
