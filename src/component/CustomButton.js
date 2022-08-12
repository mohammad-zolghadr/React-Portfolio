import React, { Component } from 'react';
import s from 'styled-components';

const MyButton = s.button`
    border-radius : 50px;
    padding : 8px 10px;
    font-weight:bold;
    font-size : 0.7rem;
    margin : 2px;
    transition : 0.3s;
    cursor : pointer;
    border : 2px solid var(--primary-color);

    background-color :  ${(props) =>
      props.type === 'cta' ? 'var(--primary-color)' : 'var(--bg-color)'};
    color : ${(props) =>
      props.type === 'cta' ? 'var(--bg-color)' : 'var(--primary-color)'};
    
      &:hover{
        opacity : 0.5;
      }

`;

class CustomButton extends Component {
  render() {
    const { text, type } = this.props;
    return (
      <>
        <MyButton type={type}>{text}</MyButton>
      </>
    );
  }
}

export default CustomButton;
