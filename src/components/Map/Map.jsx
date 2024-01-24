import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';

import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import './Map.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {

  // const coordinates = { lat: 22.58181, lng: 88.45213 };
  const isDesktop = useMediaQuery('(min-width:600px)');
  //console.log(isMobile)

  

  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA9QG2QcX7fVzWKU0BTagWUq7MmeBQyPtk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={ (child) => setChildClicked(child) }
      >
        {places?.map((place, i) => (
          <div
            className='markerContainer'
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
           >
            {
              !(isDesktop) ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} className='paper'>
                    <Typography className='typography' variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img className='pointer'
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                      alt={place.name}
                    />
                    <Rating size="small" value={Number(place.rating)} readonly />
                  </Paper>
                )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}


export default Map;
