import React, { Component } from 'react';

import s from 'styled-components';

const MyHeader = s.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

h1{
  font-size: 2rem;
  color: var(--main-text-color);
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
  transition : 0.3s;
}

li{
  margin: 0 10px 0;
  transition: 0.3s;
  cursor: pointer;
}

a{
  color: var(--second-text-color);
  font-weight: bold;
}

button{
  font-weight: bold;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 20px 0 20px 20px;
  transition: 0.3s;
}

li:hover , button:hover{
  opacity: 0.5;
}

@media(max-width:768px) {
  ul{
      transform : ${(props) => (props.open ? 'translateX(0)' : 'translateX(150%)')};
      flex-direction: column;
      justify-content : start;
      align-items : start;
      padding : 60px 40px;
      background-color : var(--primary-color);
      position : fixed;
      top : 0;
      right : 0;
      z-index : 10;
      height : 100vh;
  }

  ul li{
    margin-top : 30px;
  }

  a{
    color : #ffffff;
  }
  button{
    font-size : 1.1rem;
    padding : 0;
    background-color : transparent;
  }

  h1{
      font-size: 1.3rem;
  }

}`;

class Header extends Component {
  render() {
    return (
      <>
        <MyHeader open={this.props.open}>
          <h1>MozoPlus</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Download Resume</a>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </MyHeader>
      </>
    );
  }
}

export default Header;