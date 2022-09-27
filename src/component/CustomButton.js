import React from 'react';
import s from 'styled-components';

const MyButton = s.button`
    border-radius : 50px;
    padding : 8px 15px;
    font-weight:bold;
    font-size : 0.7rem;
    margin : 5px;
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

const CustomButton = ({ text, type }) => {
  return (
    <>
      <MyButton type={type}>{text}</MyButton>
    </>
  );
};

export default CustomButton;
