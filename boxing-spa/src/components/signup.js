import React from 'react'
import { Typography, Divider, Grid, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'; 
import propTypes from 'prop-types'



const styles = theme => ({
    title: {
        fontSize: 32
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 64,
        border: '2px solid #e53935',
        fontWeight: 700,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 16,
        paddingBottom: 16,
        color: '#e53935',
        '&:hover': {
            backgroundColor: '#e53935',
            border: '2px solid transparent',
            color: 'white'
        },
        '&:focus':{
            backgroundColor: '#e53935',
            border: '2px solid transparent',
            color: 'white'
        },
        '&:active':{
            backgroundColor: '#e53935',
            border: '2px solid transparent',
            color: 'white'
        }

    },
    input: {
        display:'none'
    }
    
})


const signUp = function(props) {
    const { classes } = props
    return(
        <React.Fragment>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography variant="title" align="center" className={classes.title}>
                        START YOUR FREE CLASS TODAY!
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Sign up Now
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


signUp.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(signUp)
