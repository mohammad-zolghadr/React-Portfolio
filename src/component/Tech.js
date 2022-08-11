import React, { Component } from 'react';

import s from 'styled-components';

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
        width : 65%;
    }

    &:hover{
        transform:scale(1.3 , 1.3);
    }

`;

class Tech extends Component {
  render() {
    return (
      <>
        <DivUi>
          <img src={this.props.src} alt={this.props.alt} />
        </DivUi>
      </>
    );
  }
}

export default Tech;
