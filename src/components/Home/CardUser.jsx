import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate, Link, Routes, Route, useParams, Outlet } from 'react-router-dom'
import CardFunction from './CardFunction';

function CardUser() {
  return (
    <Box>
      <CardFunction />
      <Outlet/>
    </Box>
  )
}

export default CardUser