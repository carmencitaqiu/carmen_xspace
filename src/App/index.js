import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from '../List';
import ListDetail from '../ListDetail';

import * as routes from '../constants/routes';

import './style.css';

class App extends Component {
  state = {
    organizationName: 'the-road-to-learn-react',
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {

    return (
      <Router>
        <div className="App">
          {/* <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          /> */}

          <div className="App-main">
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <div className="">
                  <List />
                </div>
              )}
            />
            <Route 
              exact
              path={routes.DETAIL}
              component={() => (
                <div className="">
                  <ListDetail />
                </div>
              )}
            />
          </div>

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
