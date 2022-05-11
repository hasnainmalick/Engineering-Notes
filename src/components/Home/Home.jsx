import React from 'react'
import { Typography, Paper, Container } from '@mui/material'
import CardUser from './CardUser'

const Home = () => {
  return (
    <Container>
      <Paper elevation={3} >
      <Typography variant='h3' align="center" sx={{p:1,m:2}}>Engineering Research Paper</Typography>
      </Paper>
      <CardUser/>
    </Container>
  )
}
export default Home