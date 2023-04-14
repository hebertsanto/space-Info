import React from "react";
import axios from "axios";
import {useState, useEffect } from 'react'
import { Box, Typography, Container} from '@mui/material'
export const SpaceX = () => {

  const url  = 'https://api.spacexdata.com/v4/company';
  const [company, setCompany] = useState([]);
  
  useEffect(() => {
    axios.get(url)
      .then(response => setCompany(response.data))
      .catch(err => console.log(err))
  }, [])
  return(
    <Container maxWidth='lg' style={{minHeight:'130vh'}}>
      <Box style={{marginTop:'10vh', borderBottom:'1px solid black', paddingBottom:'20px'}}>
        <Typography variant='h4'>sobre a Empresa</Typography> 
        <Typography variant='h5'><b>nome</b> :{company.name}</Typography>
        <Typography variant='h5'><b>empregados</b>: {company.employees}</Typography>
        <Typography variant='h5'><b>fundador</b>: {company.founder}</Typography>
        <Typography variant='h5'><b>Data de fundação</b>:{company.founded}</Typography>
        <Typography variant='h5'><b>valor</b>: {company.valuation}</Typography>
        <Typography variant='h5'><b>Descrição</b>: {company.summary}</Typography>
      </Box>
    </Container>
  )
};
