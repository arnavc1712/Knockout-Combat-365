import React, {Component} from 'react'
import { Grid, Avatar, Card, Typography, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


const styles = {
    root: {
        flexGrow: 1
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 120,
      height: 120,
      boxShadow: '0px 0px 12px '+ red[600]
    },
    card: {
        maxWidth: 345,
      },
    media: {
        height: 140,
    },
    content: {
        fontFamily: 'proxima-nova, sans-serif'
    }
  };


function contact(props) {
        const { classes } = props
        return (
            <Grid container justify="center" alignItems="center">
            <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <Grid container justify="center" alignItems="center">
                              <Grid item>
                                <Avatar alt="Remy Sharp" src={require('../assets/images/jiya.jpg')} className={classes.bigAvatar} />
                              </Grid>
                              <Grid item>
                                <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.content}>
                                    Lizard
                                </Typography>
                            <Typography component="p" align="center" className={classes.content}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
            </Card>
            </Grid>
        )
}

contact.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(contact);