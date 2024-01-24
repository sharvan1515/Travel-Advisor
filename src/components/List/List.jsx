import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import './List.css';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked }) => {

  const [type, setType] = useState('resturent');
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState([]);
  
  //console.log({childClicked})

  // useEffect(() => {
  //   const refs = Array(places.length).fill().map(() => )
  // }, [places])

  return (
    <div className='container'>
      <Typography variant='h4'>Resturent, Hotrl and Attraction around you</Typography>
      <FormControl className='formControl'>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturent">Resturent</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="attraction">Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='formControl'>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All Rating</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className='list' >
        {
          places ?.map((place, i) => (
            <Grid item key={i} xs={12} >

              <PlaceDetails place={place} />
              
            </Grid>
          )) 
        }
      </Grid>

    </div>
  )
}


export default List;
