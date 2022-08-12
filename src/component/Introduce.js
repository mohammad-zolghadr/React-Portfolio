import React, { Component } from 'react';

import s from 'styled-components';

import mozoImage from '../images/mozo.png';

import Tech from './Tech';

const Wrapper = s.div`

    width : 100%;
    height : 700px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin:auto;
    margin-top:100px;

    @media(min-width:768px){
        flex-direction : row;
        height : 400px;
        justify-content : space-evenly;
    }
`;

const ImageUi = s.div`
    background-color : var(--primary-color);
    min-width : 250px;
    height : 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 50%;
    position : relative;
    box-shadow : 0 0 10px var(--primary-color);
    margin : 10px;
    

    .circle{
        display:block;
        background-color : var(--primary-color);
        border-radius : 50%;
        width:250px ;
        height:250px ;
        position : absolute;
        opacity : 0.3;
        animation: scaleIn 2s infinite cubic-bezier(.36, .11, .89, .32);

        @keyframes scaleIn{
            from{
                transform : scale(0.5 , 0.5)
                opacity :0.5;
            }
            to{
                transform : scale(1.5 , 1.5);
                opacity : 0;
            }
        }
    }

    img{
        width : 170%;
        position : absolute;
        right : -75px;
        bottom : 20px;
        border-radius : 50%;
        z-index : 5;
    }

`;

const DescUi = s.div`{
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 20px;

    h1{
        font-size : 1.5rem;
        color : var(--main-text-color);
        margin-top:10px;
    }

    h2{
        font-size : 1rem;
        color : var(--second-text-color);
        margin-top:10px;
    }

    div{
        display : flex;
        margin-top:10px;
        align-items:center;
        flex-wrap : wrap;
    }
    
    @media(min-width:768px){
        align-items : start;
    }
    
}`;

const ButtonHire = s.button`
    background-color : var(--secondary-color) ;
    width : 200px;
    color : #fff;
    padding : 10px 10px;
    font-weight : bold;
    font-size : 1rem;
    box-shadow : 0 0 10px var(--secondary-color);
    border-radius : 50px;
    margin : 10px;
    transition : 0.3s;
    cursor : pointer;

    &:hover{
        opacity : 0.7;
        transform : translateY(-5px);
    }

`;

class Introduce extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <ImageUi>
            <div>
              <img src={mozoImage} alt="Mohammad Zolghadr" />
            </div>
            <div className="circle"></div>
            <div className="circle" style={{ animationDelay: '1s' }}></div>
          </ImageUi>
          <DescUi>
            <h1>Mohammad Zolghadr</h1>
            <h2>Front-end Developer</h2>
            <div>
              <Tech data={'html'} />
              <Tech data={'css'} />
              <Tech data={'js'} />
              <Tech data={'react'} />
              <Tech data={'bootstrap'} />
              <Tech data={'git'} />
              <Tech data={'figma'} />
            </div>
          </DescUi>
          <ButtonHire>Hire Me</ButtonHire>
        </Wrapper>
      </>
    );
  }
}

export default Introduce;
