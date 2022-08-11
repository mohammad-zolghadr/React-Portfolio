import React, { Component } from 'react';

import Burger from './component/BurgerMenu';
import Introduce from './component/Introduce';

class App extends Component {
  render() {
    return (
      <>
        <Burger />
        <Introduce />
      </>
    );
  }
}

export default App;
