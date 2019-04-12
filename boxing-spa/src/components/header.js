import React from 'react'
import { Parallax } from 'react-parallax';
import { Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    title: {
        fontSize: 80,
        fontFamily: 'bebas-neue-bold',
        [theme.breakpoints.down('md')]:{
            paddingLeft:10,
            paddingRight:10,
            fontSize:50
        },
        color: "#fff"

    }
})

class Header extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return(

            <Parallax
                        blur={{ min: -15, max: -15 }}
                        bgImage={require('../assets/images/homepage.png')}
                        bgImageAlt="the dog"
                        strength={-200}>
                        <div style={{ height: '500px',width:'100%',maxWidth: '100%'}}>
                            <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="left"
                            justify="center"
                            >
                                <Grid item xs={12} style={{height:"100%",marginTop:20,marginLeft:20}}>
                                <img src={ require('../assets/images/logo.png') } />
                                </Grid>
                            </Grid>
                        </div>
            </Parallax>
    )
    }
}

export default withStyles(styles)(Header)


