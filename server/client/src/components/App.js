import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//-Screens :
import Navbar from '../components/Navbar';
import Landing from '../screens/Landing';
import Dashboard from '../screens/Dashboard';
import SurveyNew from '../screens/SurveyNew';
//.Redux :
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  //. Life cycle methods :
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/survey" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
