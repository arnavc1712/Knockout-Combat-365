import React from 'react'
import { Parallax } from 'react-parallax';

export default function header() {
    return(

            <Parallax
                        blur={{ min: -15, max: -15 }}
                        bgImage={require('../assets/images/boxing-background.jpg')}
                        bgImageAlt="the dog"
                        strength={-200}>
                        <div style={{ height: '450px'}}>
                        
                        </div>
            </Parallax>
    )
}


