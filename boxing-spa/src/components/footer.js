import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import propTypes from 'prop-types'


const styles = {
    grid: {
        height: 300,
        backgroundColor: "#e53935"
    }
}

const footer = (props) => {
    const { classes } = props

    return (
        <Grid container alignItems="center" justify="center" className={classes.grid}>
        </Grid>
    )
}

footer.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(footer)

