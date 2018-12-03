import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from '@material-ui/core';
import Team from './components/team'
import Header from './components/header'
import Signup from './components/signup'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './App.css';


const styles  ={
  sec: {
    marginBottom: 128
  }
}
class App extends Component {

  constructor(props){
    super(props);
    this.state = {response: ""}
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ response: res.blah}))
    .catch(err => console.log(err))
  }

  callApi = async() => {
    const response = await fetch('/api/test');
    const body = await response.json()
    return body
  }


  render() {
    return (
      <React.Fragment>
      <section className={this.props.classes.sec} id ="one">
        <Header/>
      </section>
      

      <section id="two" className={this.props.classes.sec}>
        <Signup/>
      </section>


      <section id="three">
        <Team/>
      </section>
    </React.Fragment>
    );
  }
}



export default withStyles(styles)(App);
