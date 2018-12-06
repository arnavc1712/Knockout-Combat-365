import React from 'react'
import { Grid, IconButton, Icon, Tooltip } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import propTypes from 'prop-types'
import classnames from 'classnames'


const styles = theme => ({
    gridBody: {
        height: 200,
        backgroundColor: red[700]
    },
    gridFooter: {
        height: 50,
        backgroundColor: red[900],
        textAlign:"center"
    },
    button: {
        margin: 0
    },
    icon: {
        [theme.breakpoints.down('md')]:{
            fontSize:'1.25rem'
        }
      }
})

const footer = (props) => {
    const { classes } = props

    return (
        <Grid container alignItems="center" justify="center">
        <Grid item xs={12} className={classes.gridBody}></Grid>
        <Grid item xs={12} className={classes.gridFooter}>
            <Grid container alignItems="center" justify="center">
                <Grid item>
                    <Tooltip title="Instagram" placement="top">
                        <a href="https://www.instagram.com/knockout_365/" target="blank_" style={{textDecoration:'none'}}>
                            <IconButton className={classes.button} aria-label="Delete">
                                    <Icon className={classnames(classes.icon, 'fab fa-instagram')} />
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <Tooltip title="Facebook" placement="top">
                        <a href="https://www.facebook.com/Knockout-Combat-365-231036537628914/" target="blank_" style={{textDecoration:'none'}}>
                            <IconButton className={classes.button} aria-label="Delete">
                                    <Icon className={classnames(classes.icon, 'fab fa-facebook')} />
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            
        </Grid>
        </Grid>
    )
}

footer.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(footer)

