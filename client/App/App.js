import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../css/App.css';

import AddEvent from './containers/AddEvent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddEvent />
      </div>
    );
  }
}

export default connect()(App);
