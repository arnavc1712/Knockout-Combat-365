import React, {Component} from 'react'
import { Parallax, Background } from 'react-parallax';
import { Grid } from '@material-ui/core'

export default function header() {
    return(

            <Parallax
                        blur={{ min: -12, max: 25 }}
                        bgImage={require('../assets/images/boxing-background.jpg')}
                        bgImageAlt="the dog"
                        strength={-200}>
                        <div style={{ height: '400px'}}>
                        
                        </div>
            </Parallax>
    )
}


