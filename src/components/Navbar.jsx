import React from 'react'
import { AppBar ,Toolbar, Typography } from '@mui/material'
import {  BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Home from './Home/Home';
import RegistrationForm from './Registration/RegistrationForm';
import SingleCard from './Home/SingleCard';
import MainAbout from './About/MainAbout';

const useStyles=makeStyles(()=> ({
  link: {
    textDecoration: 'none',
    color: 'white',
    
  },
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign:"center"
  },

  Nav:{
    display:'flex',
    justifyContent:'center',
    
  },
  typo:{

  }
}))
const Navbar = () => {
  const classes=useStyles();
  // const navigate=useNavigate()
  return (
    <Router>
      <div>
    <AppBar position='static' color='secondary' className={classes.appBar}>
      <Toolbar>
        <div className={classes.Nav}>
            <Link to='/' className={classes.link}>
              <Typography variant='h5' mx={3}>Home</Typography>
            </Link>
            <Link to='/about' className={classes.link}>
              <Typography variant='h5' mx={3}>About</Typography>
            </Link>
            <Link to='/registration' className={classes.link}>
              <Typography variant='h5' mx={3}>Registration Form</Typography>
              </Link>
              </div>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='blogs/:id' element={<SingleCard/>}/> 
      <Route path='about' element={<MainAbout/>}/>   
      <Route path='registration' element={<RegistrationForm/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default Navbar