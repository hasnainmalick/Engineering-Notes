import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, CardHeader, CardActions, Button, Grid, Typography } from '@mui/material'
import {  Link,  } from 'react-router-dom'
function CardFunction() {
  const [blogs, setBlog] = useState([])
  // state for when our data is fetching
  const [isPending, setIsPending] = useState(true)
  const getData = async () => {
    const resp = await fetch('http://localhost:4000/blogs');
    const data = await resp.json();
    setBlog(data)
    setIsPending(false)
  }
  useEffect(() => {
    getData();
  }, [])
  const [rmBtn,setrmBtn]=useState(false);
  function togglebtn(){
    setrmBtn(prevState => ! prevState)
  }
  return (
    <div>
      <Grid container spacing={2}>
        {isPending && <div>Loading...</div>}
        {blogs.map(blog => (
          <Grid item key={blog.id} lg={4}>
            <Card>
              <Link style={{ textDecoration: 'none' }} to={`blogs/${blog.id}`}>
                <CardHeader title={blog.title} subheader={blog.writer} />
                <CardContent>
                  <Typography variant='body2'>
                    {/* conditionaly rendering */}
                    {rmBtn ? blog.content : blog.content.substr(0,200)}             
                    
                    <Link style={{ textDecoration: 'none' }} to={`blogs/${blog.id}`}>
                    {/* Read more btn */}
                      <Button size="small" variant='text' color='secondary' onClick={togglebtn}>Read More</Button>
                    </Link>
                  </Typography>
                </CardContent>
              </Link>
              <CardActions>
                <Button size="small" variant='contained' color='secondary'>Share</Button>

              </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CardFunction