import React from 'react'
import { Grid, IconButton, Icon, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import propTypes from 'prop-types'
import classnames from 'classnames'


const styles = theme => ({
    gridBody: {
        height: 'auto',
        backgroundColor: red[700]
    },
    gridFooter: {
        height: 'auto',
        backgroundColor: red[900],
        textAlign:"center"
    },
    button: {
        margin: 0,
        padding:0
    },
    icon: {
        [theme.breakpoints.down('md')]:{
            fontSize:'1rem'
        },
        [theme.breakpoints.up('md')]:{
            fontSize:'1rem'
        }
      },
    gridBodyTitleText: {
        color: '#fff',
        fontFamily: 'proxima-nova, sans-serif',
        fontSize: '1.25rem',
        marginLeft: theme.spacing.unit * 3,
        marginBottom: 10,
        [theme.breakpoints.down('md')]:{
        fontSize: '1rem',
        marginLeft: theme.spacing.unit * 3,
        marginBottom: 10
        }
    },
    gridBodyText: {
        fontFamily: 'proxima-nova, sans-serif',
        margin:0,
        fontSize: '1rem',
        [theme.breakpoints.down('md')]:{
        fontSize: '0.85rem'
        },
        display:'inline-block',
        padding:0,
        marginLeft:4
    },
    listStyle: {
        listStyleType: 'none',
        margin:0,
        marginBottom: 5
    },
    listContainer: {
        margin:0,
        padding:0,
        marginLeft:theme.spacing.unit * 3,

    }
})

const footer = (props) => {
    const { classes } = props

    return (
        <Grid container alignItems="center" justify="center">
        <Grid item xs={12} className={classes.gridBody}>
            <Grid container alignItems="center" justify="flex-start">
                <Grid item style={{marginTop:40,marginBottom:40}}>
                    <Typography variant="title" className={classes.gridBodyTitleText}>CONTACT US</Typography>
                    
                    <ul className={classes.listContainer}>
                        <li className={classes.listStyle}>
                            <a href="https://www.instagram.com/knockout_365/" target="blank_" style={{textDecoration:'none'}}>
                                <IconButton className={classes.button} aria-label="Delete" style={{padding:0,display:'inline-block'}}>
                                                <Icon className={classnames(classes.icon, 'fab fa-instagram')} />
                                </IconButton>
                            </a>
                            <p className={classes.gridBodyText}>
                                Instagram
                            </p>
                        </li>

                        <li className={classes.listStyle}>
                            <a href="https://www.facebook.com/Knockout-Combat-365-231036537628914/" target="blank_" style={{textDecoration:'none'}} >
                                <IconButton className={classes.button} aria-label="Delete">
                                        <Icon className={classnames(classes.icon, 'fab fa-facebook')} />
                                </IconButton>
                            </a>
                            <p className={classes.gridBodyText}>
                                Facebook
                            </p>
                        </li>

                        <li className={classes.listStyle}>
                            <IconButton className={classes.button} aria-label="Delete" aria-hidden="true">
                                    <Icon className={classnames(classes.icon, 'fa fa-phone fa-rotate-90')} />
                            </IconButton>
                            <p className={classes.gridBodyText}>
                                +91 9769713381
                            </p>
                        </li>
                    </ul>
                
                    {/* <Typography variant="p" className={classes.gridBodyText}>Contact Us</Typography>
                    <Typography variant="p" className={classes.gridBodyText}>Contact Us</Typography>
                    <Typography variant="p" className={classes.gridBodyText}>Contact Us</Typography> */}
                </Grid>
            </Grid> 
        </Grid>
        <Grid item xs={12} className={classes.gridFooter}>
            <Grid container alignItems="center" justify="center" style={{height:'100%'}}>
                <Grid item style={{marginTop:10,marginBottom:10}}>
                    <Typography component="p">
                    <Icon style={{verticalAlign:"middle",fontSize:'0.875rem',marginRight:4}} className={classnames(classes.icon, 'far fa-copyright')} />
                    2019, Knockout Combat 365, Inc
                    </Typography>
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

