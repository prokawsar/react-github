import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import Jobs from './Components/Jobs'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">

                  <Route exact path="/react-github/" component={SearchBar} />
                  {/* <SearchBar /> */}

                  <Route exact path="/react-github/jobs/" component={Jobs} />
              </div>
            </div>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
