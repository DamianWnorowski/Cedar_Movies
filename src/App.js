import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history'
import './App.css';
import * as constants from  './constants.js';
import Home from './home.js';
import Nav from './nav.js';
import Footer from './footer.js';
import MediaTable from './mediaTable.js';
import MovieDetails from './movieDetails.js';
import Browse from './browse.js';
import Profile from './profile.js';
import CelebrityDetails from './celebrityDetails.js'
import { Grid, Image, Container,  List, Header,Divider,  Segment} from 'semantic-ui-react'



class App extends Component {

  
  render() {
    return (
      <Router>
        <div style={{}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:movieId" component={MovieDetails} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/profile" component={Profile}/>
            <Route exact path='/celebrity' component={CelebrityDetails} />
          </Switch>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
