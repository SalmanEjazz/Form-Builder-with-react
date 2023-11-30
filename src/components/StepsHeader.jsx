import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StepsHeader = () => {
  return (
    <>
    <AppBar className='steps-header'>
        <Toolbar>
        <IconButton>
            <ArrowBackIcon/>
        </IconButton>
        <Typography component="h2" variant="h5" className='head'>
APQP Ghulam Ali
        </Typography>
        
        </Toolbar>
    </AppBar>
    </>
  )
}

export default StepsHeader;