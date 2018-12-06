import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import propTypes from 'prop-types'
import InstagramFeed from './instagramFeed'
import { Typography, Grid } from '@material-ui/core'

const styles = {
    title: {
        fontSize: 32,
        color: 'black',
        marginBottom: 64
    }
}

const mediaContent = (props) => {
    const { classes } = props
    return(
        <React.Fragment>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={12}><Typography variant='title' align='center' className={classes.title}>WHAT'S HOT? Here's some in class action</Typography></Grid>
                <Grid item xs={12}><InstagramFeed/></Grid>
            </Grid>
        </React.Fragment>
    )
}


mediaContent.propTypes = {
    classes: propTypes.object.isRequired
}


export default withStyles(styles)(mediaContent)