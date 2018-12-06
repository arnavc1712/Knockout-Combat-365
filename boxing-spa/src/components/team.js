import React, {Component} from 'react'
import { Grid , Typography} from '@material-ui/core';
import Contact from './contact'
import { withStyles } from '@material-ui/core/styles'
import propTypes from 'prop-types'


const styles = theme => ({
    title: {
        marginBottom:64,
        fontFamily:'bebas-neue-bold',
        fontSize:40,
        [theme.breakpoints.down('md')]:{
            fontSize:32,
            marginBottom: 60
        }
    }
})



function team(props) {
    const { classes } = props
  return(
      <React.Fragment>
        <Typography variant="headline" align="center" className={classes.title}>Meet the Team</Typography>
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


team.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(team)
