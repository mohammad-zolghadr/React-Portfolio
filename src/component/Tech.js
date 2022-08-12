import React, { Component } from 'react';

import s from 'styled-components';

import icoHtml from '../images/html-ico.png';
import icoCss from '../images/css-ico.png';
import icoJs from '../images/js-ico.png';
import icoReact from '../images/react-ico.png';
import icoBootstrap from '../images/bootstrap-ico.png';
import icoGit from '../images/git-ico.png';
import icoFigma from '../images/figma-ico.png';

const imageData = [
  { data: 'html', url: icoHtml, alt: 'html icon' },
  { data: 'css', url: icoCss, alt: 'css icon' },
  { data: 'js', url: icoJs, alt: 'javascript icon' },
  { data: 'react', url: icoReact, alt: 'react.js icon' },
  { data: 'bootstrap', url: icoBootstrap, alt: 'bootstrap icon' },
  { data: 'git', url: icoGit, alt: 'git icon' },
  { data: 'figma', url: icoFigma, alt: 'figma icon' },
];

const DivUi = s.div`

    display : flex;
    justify-content : center;
    align-items : center;
    background-color: var(--bg-color);
    width: 40px;
    height : 40px;
    margin: 5px;
    border-radius : 50%;
    box-shadow : 0 0 5px rgba(0, 0, 0 , 0.7);
    transition:0.3s;

    img{
        width : 25px;
    }

    &:hover{
        transform:scale(1.3 , 1.3);
    }

`;

class Tech extends Component {
  render() {
    const { data } = this.props;

    const tempUrl = imageData.find((e) => {
      return e.data === data ? e.url : '';
    });

    return (
      <>
        <DivUi>
          <img src={tempUrl['url']} alt={tempUrl['alt']} />
        </DivUi>
      </>
    );
  }
}

export default Tech;
