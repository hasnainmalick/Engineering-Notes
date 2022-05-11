import React from 'react'
import { AppBar, Box , Button, Container, Toolbar, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';

const Footer = () => {
    const useStyles = makeStyles({
        mainFooter:{
            height:'200px',
            backgroundColor: '#9c27b0',
            color:'white',
            display :'flex',
            flexDirection : 'column',
            justifyContent:'center',
            alignItems:'center',
            marginTop: '30px',
            position:'relative',
                    }
    });
    const classes = useStyles();
  return (
    <Box className={classes.mainFooter}>
        {/* <AppBar color='secondary' className={classes.mainFooter}>
            <Toolbar  className={classes.footer}> */}
            <Typography color='inherit'>Copy All Right Reserved to Hasnain MaliCk</Typography>
            <Typography color='inherit'>Developer Hasnain MaliCk</Typography>
            <Button variant='text' sx={{textTransform:'none'}} href='https://www.instagram.com/hasnain__malick' color='inherit'startIcon={<InstagramIcon/>}>hasnain__malick</Button>
            {/* </Toolbar>     </AppBar> */}
    </Box>
  )
}

export default Footer