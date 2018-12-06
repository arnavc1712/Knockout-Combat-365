import React, { Component } from 'react';
import Team from './components/team'
import Header from './components/header'
import Signup from './components/signup'
import Footer from './components/footer'
import MediaContent from './components/mediaContent'
import { withStyles } from '@material-ui/core/styles'
import { Divider } from  '@material-ui/core'


const styles = theme => ({
  secOne: {
    marginBottom: 128,
    [theme.breakpoints.down('md')]:{
      marginBottom:64
    },
  },
  sec: {
    marginBottom: 64,
    [theme.breakpoints.down('md')]:{
      marginBottom:32
    },
  },
  divider: {
    marginTop: 128,
    marginLeft:128,
    marginRight:128,
    [theme.breakpoints.down('md')]:{
        marginTop: 64,
        marginLeft:32,
        marginRight:32
    }
}
})


class App extends Component {

  constructor(props){
    super(props);
    this.state = {instagramApiData: []}
  }

  render() {
    return (
      <React.Fragment>
      <section className={this.props.classes.secOne} id ="one">
        <Header/>
      </section>
      

      <section id="two" className={this.props.classes.sec}>
        <Signup/>
        <Divider className={this.props.classes.divider}/>
      </section>


      <section id="three" className={this.props.classes.sec}>
        <MediaContent/>
        <Divider className={this.props.classes.divider}/>
      </section>

      <section id="four" className={this.props.classes.sec}>
      <Team/>
      </section>

      <section id="five">
      <Footer/>
      </section>
    </React.Fragment>
    );
  }
}



export default withStyles(styles)(App);
