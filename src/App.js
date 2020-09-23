import React, { Component } from 'react';
import UserView from './components/UsersView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <UsersView />
        </div>
      </Router>
    );
  }
}

export default App;
