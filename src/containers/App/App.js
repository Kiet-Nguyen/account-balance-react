import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import InputFields from '../../components/InputFields/InputFields';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <InputFields />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
