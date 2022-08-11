import React, { Component } from 'react';

import s from 'styled-components';

import mozoImage from '../images/mozo.png';
import icoHtml from '../images/html-ico.png';
import icoCss from '../images/css-ico.png';
import icoJs from '../images/js-ico.png';
import icoReact from '../images/react-ico.png';
import icoBootstrap from '../images/bootstrap-ico.png';
import icoGit from '../images/git-ico.png';
import icoFigma from '../images/figma-ico.png';

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
        max-width : 95%;
        flex-direction : row;
        height : 400px;
        justify-content : space-evenly;
    }
    
    @media(min-width:1200px){
        max-width : 80%;
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
              <img src={mozoImage} alt="Mozo Image" />
            </div>
            <div className="circle"></div>
            <div className="circle" style={{ animationDelay: '1s' }}></div>
          </ImageUi>
          <DescUi>
            <h1>Mohammad Zolghadr</h1>
            <h2>Front-end Developer</h2>
            <div>
              <Tech src={icoHtml} alt="html icon" />
              <Tech src={icoCss} alt="css icon" />
              <Tech src={icoJs} alt="javascript icon" />
              <Tech src={icoReact} alt="react.js icon" />
              <Tech src={icoBootstrap} alt="bootstrap icon" />
              <Tech src={icoGit} alt="git icon" />
              <Tech src={icoFigma} alt="figma icon" />
            </div>
          </DescUi>
          <ButtonHire>Hire Me</ButtonHire>
        </Wrapper>
      </>
    );
  }
}

export default Introduce;
