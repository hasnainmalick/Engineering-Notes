import { Button, Card, Grid, Box, CardContent, CardHeader, CardActions, Typography } from '@mui/material'

import React, { useState, useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'


const SingleCard = () => {
  const {id}=useParams();
  const navigate = useNavigate();
  
  const [blogs, setBlog] = useState([])
  const getData = async () => {
    const resp = await fetch(`http://localhost:4000/blogs/${id}`);
    const data = await resp.json();
    setBlog(data)
    console.log(data.title)

  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <Box>
      <Grid container>
        <Grid item key={blogs.id} lg={12} sx={{margin:'10px 120px',padding:'10px'}}>
          <Card>
          <CardHeader title={blogs.title} subheader={blogs.writer} />
              <CardContent>
                <Typography variant='body2'>
                  {blogs.content}
                  </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(-1)} variant='contained'>Go back</Button>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid>
        SingleCard
         {blogs.map((blog) => (
          <Grid item key={blog.id} lg={1}>
            <Card>
              <CardHeader title={blog.title} subheader={blog.writer} />
              <CardContent>
                <Typography variant='body2'>
                  {blog.content}
                  </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(-1)} variant='contained'>Go back</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}  
      </Grid> */}
    </Box>
  )}
export default SingleCard