import React, { Component } from 'react';

import Burger from './component/BurgerMenu';
import Introduce from './component/Introduce';
import Experience from './component/Experience';

import s from 'styled-components';

const MainContainer = s.main`
  width : 90%;
  margin : auto;

  @media(min-width:768px){
    max-width : 95%;
}

@media(min-width:1200px){
    max-width : 80%;
}

`;

class App extends Component {
  render() {
    return (
      <>
        <Burger />
        <MainContainer>
          <Introduce />
          <Experience />
        </MainContainer>
      </>
    );
  }
}

export default App;
