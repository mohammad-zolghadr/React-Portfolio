import React from 'react';
import s from 'styled-components';

import Item from './CardItem';

import imgSpeechRecognation from '../assets/images/speechRecognation.png';

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

const Experience = () => {
  return (
    <>
      <Container>
        <h2>پروژه ها</h2>
        <ItemsWrapper>
          <Item
            src={imgSpeechRecognation}
            alt="Speech Recognation Project"
            title="Speech Recognation"
            text="توی این پروژه جاوااسکریپتی میتونی انگلیسی یا فارسی صحبت کنی و این برنامه که با جاوااسکریپت خام ساخته شده، صدای شما رو تشخیص میده و تاریخ تولدت رو به صورت روز و ماه و سال مینویسیه و محاسبه میکنه"
            techs={['html', 'css', 'js', 'git']}
          />
        </ItemsWrapper>
      </Container>
    </>
  );
};

export default Experience;
