import React, { Component } from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Antiselfie from './Antiselfie'
import Artist from './Artist'
import Underway from './Underway'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid={true}>
          <Header />
          <Row>
            <Route exact path="/" component={Home}/>
            <Route path="/antiselfie" component={Antiselfie} />
            <Route path="/artist" component={Artist}/>
            <Route path="/underway" component={Underway}/>                    
          </Row>
          <Footer />
        </Grid>
      </Router>   
    )
  }
}

export default App;
