export const schoolLayers = {
  school_done: {
    type: 'circle',
    filter: ['all', ['==', 'status', 'done', ], ],
    paint: {
      'circle-radius': 10,
      'circle-color': 'green'
    },
  },
  school_not:{
    type:'circle',
    filter:['all',['==','status','not_yet',],],
    paint:{
      'circle-radius':10,
      'circle-color':'red'
    },
  }
};

export const sources = {
  schoolsource: {
    data: {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {
          'name': 'Test School',
          'status':'done'
        },
        geometry: {
          type: 'Point',
          coordinates: [36.8219, -1.2921]
        }
      },{
        type: 'Feature',
        properties: {
          'name': 'Test School',
          'status':'not_yet'
        },
        geometry: {
          type: 'Point',
          coordinates: [36.844687,-1.298711]
        }
      },]
    },
  },
};
