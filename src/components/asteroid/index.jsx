import axios from 'axios'
import React, { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Typography, Paper} from "@mui/material";

export const Asterioid = () => {

  const apikey = '1Ieg90NNCpRMq8Cpx8MaexQqGYNyfp1thOAK34gw';
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apikey}`;

  const [data, setData] = useState([])

 
  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data.near_earth_objects['2015-09-07']))
      .catch((error) => console.log(error))
  }, [])
  
  return (
    <>
      <Container maxWidth='lg' style={{ marginTop: '10vh' }}>
        <Typography variant='h4'>
        these are the asteroids that nasa classified on 2015-09-07
        </Typography>
        <div>
          <div style={{ marginTop :'20px', marginBottom:'50px'}}>
            <Typography variant='h6'>check them out in the table below</Typography>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Min diametro/km</TableCell>
                  <TableCell>Max diametro/km</TableCell>
                  <TableCell>magnetude</TableCell>
                  <TableCell>Distance/km</TableCell>
                  <TableCell>Distance/astronomical</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map(item =>
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.estimated_diameter.feet.estimated_diameter_min}</TableCell>
                    <TableCell>{item.estimated_diameter.feet.estimated_diameter_max}</TableCell>
                    <TableCell>{item.absolute_magnitude_h}</TableCell>
                    <TableCell>{item.close_approach_data[0].miss_distance.kilometers}</TableCell>
                    <TableCell>{item.close_approach_data[0].miss_distance.astronomical}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </>
  )
}