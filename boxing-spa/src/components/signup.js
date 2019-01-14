import React from 'react'
import {Typography, Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'; 
import propTypes from 'prop-types'
import { red } from '@material-ui/core/colors'
import InfoDialog from './infoDialog'



const styles = theme => ({
    title: {
        fontSize: 48,
        fontFamily: 'bebas-neue-bold',
        [theme.breakpoints.down('md')]:{
            paddingLeft:10,
            paddingRight:10,
            fontSize:40
        }

    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 64,
        fontFamily: 'proxima-nova, sans-serif',
        border: '2px solid ' + red[600],
        fontWeight: 700,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 16,
        paddingBottom: 16,
        color: red[700],
        '&:hover': {
            backgroundColor: red[600],
            border: '2px solid transparent',
            color: 'white'
        },
        '&:focus':{
            backgroundColor: red[600],
            border: '2px solid transparent',
            color: 'white'
        },
        '&:active':{
            backgroundColor: red[600],
            border: '2px solid transparent',
            color: 'white'
        },
        [theme.breakpoints.down('md')]:{
            fontSize:12
        }

    },
    input: {
        display:'none'
    }
    
})


class signUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    render() {
        return(
            <React.Fragment>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography variant="title" align="center" className={this.props.classes.title}>
                            START YOUR FREE CLASS TODAY!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary" className={this.props.classes.button} onClick={this.handleClickOpen}>
                            Sign up Now
                        </Button>
                        <InfoDialog open={this.state.open} close={this.handleClose}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}


signUp.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(signUp)
