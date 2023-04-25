import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

    const user = useSelector( state => state.user)

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
          Please Login
        </Typography>
    </Box>
    <Button variant='contained' href='/login'>Login</Button>
    <Button variant='contained' href='/register'>Register</Button>
  </Container>
  )
}

export default Home