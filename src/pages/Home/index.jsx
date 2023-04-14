import React from "react";
import { Container, Typography, Button, Box, TextField  } from "@mui/material";
import axios from 'axios'
import { useState} from "react";
export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  /*
  const resetImages = () => {
    setImages([]);
  }
  */
  const handleSearch = () => {
    axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}`)
      .then((response) => {
        setImages(response.data.collection.items)

      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  return (
    <Container maxWidth="lg" style={{marginTop:'140px'}}>
      <Typography variant="h2" gutterBottom>
        Welcome to Info Space!
      </Typography>
      <Typography variant="body1" gutterBottom>
      Get Ready to Travel the Cosmos! Discover the Secrets of the Stars and Galaxies on Our Open Sky Astronomy Site!    
      </Typography>
      <Button variant="contained" color="primary" size="large" style={{ marginTop: "10px" }}>
         start
      </Button>
      <Box style={{marginTop:'20px'}}>
        <Typography variant="h6" color='#161616c1'>
        Explore the cosmos like never before! Learn all about asteroids, these rocky and metallic celestial bodies that
         roam through space, and find out how they form, their characteristics, their orbits and how they can affect our planet Earth.
        </Typography>
        <Typography variant="h6" color='#161616c1' style={{marginTop:'10px'}}>
         Venture into deep space and discover the cutting-edge space organizations that are at the forefront of space exploration. From government agencies like NASA, ESA and Roscosmos, to visionary private companies like SpaceX and Blue Origin, learn how these organizations
         are leading the space race, developing revolutionary technologies, carrying out incredible 
         space missions and pushing the boundaries of human knowledge.
        </Typography>
        <Typography variant="h6" color='#161616c1' style={{marginTop:'10px'}}>
        Our in-depth articles, breathtaking images, and comprehensive educational resources provide an engaging and informative 
        look at the cosmos, bringing the wonders of space to you in an exciting and accessible way.
        </Typography>
      </Box>
      <div>
        <Typography variant='h4' style={{margin:'10px 14px'}}>Planets</Typography>
        <TextField 
          type="text"
          id="outlined-basic" 
          label="search for planets..." 
          variant="outlined" 
          value={searchTerm}
          onChange={handleInputChange} 
        />
        <Button variant='contained' onClick={handleSearch} style={{margin:'10px 20px'}}>search</Button>
        <Container maxWidth='lg' style={{display:'flex', flexWrap:'wrap', marginTop:'20px'}}>
          {images?.map(item => 
            <div key={item.data.nasa_id } style={{margin:'15px', width:'300px'}}>
              <img src={item.links[0].href} height={300} width={300} style={{objectFit:'cover'}}/>
              <Typography variant='h5'>{item.data[0].title}</Typography>
              <Typography variant='body1'>{item.data[0].date_created}</Typography>
              <Typography variant='body1' style={{fontSize:'0.9rem'}}>{item.data[0].description}</Typography>
            </div>  
          )}
        </Container>
      </div>
    </Container> 
  )
}