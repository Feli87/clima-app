import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Pages/Home/Home.jsx';
import Page1 from './Pages/Page1/Page1.jsx';
import Page2 from './Pages/Page2/Page2.jsx';
import PageError from './Pages/PageError/PageError.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />

          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/404">
              <PageError />
            </Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
