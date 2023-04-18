import React from 'react'
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container 
        maxWidth='lg'
    >
    <Box 
      maxWidth='xs' 
      m={3} 
      sx={{backgroundColor:'cyan'}}
      >
        <Typography variant='h1'>
          Hello World
        </Typography>
    </Box>
  </Container>
  )
}

export default Home