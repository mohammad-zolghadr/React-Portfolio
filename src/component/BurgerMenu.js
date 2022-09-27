import React, { useState } from 'react';

import s from 'styled-components';
import Header from './Header.js';

const MyDiv = s.div`
    transition:0.3s;
    cursor:pointer;

    display : flex;
    flex-direction : column;
    position:fixed;
    top : 15px;
    left : 20px;
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

const BurgerMenu = () => {
  const [openMenuState, setOpenMenuState] = useState(false);

  const openMenu = () => {
    setOpenMenuState(!openMenuState);
  };

  return (
    <>
      <MyDiv open={openMenuState} onClick={openMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MyDiv>
      <Header open={openMenuState} />
    </>
  );
};

export default BurgerMenu;
