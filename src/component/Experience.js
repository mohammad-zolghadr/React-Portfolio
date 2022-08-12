import React, { Component } from 'react';
import s from 'styled-components';

import Item from './CardItem';

import imgSpeechRecognation from '../images/speechRecognation.png';
import imgProTodo from '../images/proTodoDashboard.png';
import imgSimpleTodo from '../images/simpleTodo.png';

const Container = s.div`

margin-bottom : 100px;
  &>h2{
    font-size : 1.5rem;
    margin-bottom : 20px;
  }
`;

const ItemsWrapper = s.div`
display : flex;
align-items:center;
justify-content : center;
flex-wrap :wrap;
`;

class Experience extends Component {
  render() {
    return (
      <>
        <Container>
          <h2>Projects</h2>
          <ItemsWrapper>
            <Item
              src={imgSpeechRecognation}
              alt="Speech Recognation Project"
              title="Speech Recognation"
              text="You can speak in persian or english and this application can detect your voice and with AI it can guess your birthday!"
              techs={['html', 'css', 'js']}
            />
            <Item
              src={imgProTodo}
              alt="Professional Todo App Project"
              title="Professional Todo App"
              text="You can speak in persian or english and this application can detect your voice and with AI it can guess your birthday!"
              techs={['html', 'css', 'js', 'react']}
            />
            <Item
              src={imgSimpleTodo}
              alt="Simple Todo App Project"
              title="Simple Todo App"
              text="You can speak in persian or english and this application can detect your voice and with AI it can guess your birthday!"
              techs={['html', 'css', 'js']}
            />
          </ItemsWrapper>
        </Container>
      </>
    );
  }
}

export default Experience;
