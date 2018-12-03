import React, {Component} from 'react'
import { Grid , Typography} from '@material-ui/core';
import Contact from './contact'



export default function team() {
  return(
      <React.Fragment>
        <Typography variant="headline" align="center" style={{marginBottom:20}}>Meet the Team</Typography>
        <Grid container direction="row" justify="space-around" alignItems="center" spacing={8}>
            <Grid item xs={12} sm={4}>
                <Contact/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Contact/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Contact/>
            </Grid>
        </Grid>
      </React.Fragment>
  )

}

