import React, { Component } from 'react';

import s from 'styled-components';
import Header from './Header.js';

const MyDiv = s.div`
    transition:0.3s;
    cursor:pointer;

    display : flex;
    flex-direction : column;
    position:fixed;
    top : 30px;
    right : 20px;
    z-index : 15;

    &:hover{
      opacity:0.5;
    }

    @media(min-width:768px){
      display:none;
    }
      div{
        margin : 2px;
        border-radius : 10px;
        width: 30px;
        height : 5px;
        background-color: ${(props) =>
          props.open ? 'var(--bg-color)' : 'var(--primary-color)'};
        transition:all 0.3s;
        transform-origin:2px;
        &:nth-child(1){ 
          transform : ${(props) => (props.open ? 'rotate(45deg)' : '')};
        }
        &:nth-child(2){ 
          transform : ${(props) => (props.open ? 'translateX(-50px); opacity:0' : '')};
        }
        &:nth-child(3){ 
          transform : ${(props) => (props.open ? 'rotate(-45deg)' : '')};
        }
      }
    `;

class BurgerMenu extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  openMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <MyDiv open={this.state.open} onClick={this.openMenu}>
          <div></div>
          <div></div>
          <div></div>
        </MyDiv>
        <Header open={this.state.open} />
      </>
    );
  }
}

export default BurgerMenu;
