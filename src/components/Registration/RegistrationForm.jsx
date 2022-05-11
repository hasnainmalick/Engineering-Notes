import React, { useReducer, useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'

const RegistrationForm = () => {

  let initialValue = {
    name: '',
    tite: '',
    email: '',
    phone: '',
    bio: ''
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UpdateInput':{
        return {
            ...state,
            [action.key]:action.value
        }}
          default:
        return state;
      }
    }
    function handleSubmit(e){
      e.preventDefault();
      alert('name : ' + state.name + ' title : ' + state.title + ' Email : ' + state.email)
    }
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
    <Container>
      <Typography variant='h3'sx={{textAlign:'center', margin:'8px'}}>Registration Form</Typography>
      <form noValidate autoComplete='off'>
        <TextField value={state.name} onChange={(e)=> dispatch({type:'UpdateInput', value:e.target.value, key:'name'})} label='Enter Name' fullWidth variant='outlined' color='secondary' margin="dense" />
        <TextField value={state.title} onChange={(e)=> dispatch({type:'UpdateInput', value:e.target.value, key:'title'})} label='Enter Title' fullWidth variant='outlined' color='secondary' margin="dense" />
        <TextField value={state.email} onChange={(e)=> dispatch({type:'UpdateInput', value:e.target.value, key:'email'})} label='Enter Email-Address' fullWidth variant='outlined' color='secondary' margin="dense" />
        <TextField value={state.phone} onChange={(e)=> dispatch({type:'UpdateInput', value:e.target.value, key:'phone'})} label='Enter Phone No.' fullWidth variant='outlined' color='secondary' margin="dense" />
        <TextField value={state.bio} onChange={(e)=> dispatch({type:'UpdateInput', value:e.target.value, key:'bio'})} label='Enter Short Bio about yourself' multiline rows={5} fullWidth variant='outlined' color='secondary' margin="dense" />
        <Button fullWidth variant='contained' color='secondary' onClick={handleSubmit} margin="dense">Submit</Button>

      </form>
    </Container>
  )
}

export default RegistrationForm