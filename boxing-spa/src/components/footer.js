import React from 'react'
import { Grid, IconButton, Icon } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import propTypes from 'prop-types'


const styles = {
    gridBody: {
        height: 200,
        backgroundColor: red[700]
    },
    gridFooter: {
        height: 50,
        backgroundColor: red[900]
    }
}

const footer = (props) => {
    const { classes } = props

    return (
        <Grid container alignItems="center" justify="center">
        <Grid item xs={12} className={classes.gridBody}></Grid>
        <Grid item xs={12} className={classes.gridFooter}>

        </Grid>
        </Grid>
    )
}

footer.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(footer)

