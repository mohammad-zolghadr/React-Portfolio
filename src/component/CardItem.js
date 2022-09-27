import React from 'react';

import s from 'styled-components';

import Tech from './Tech';
import CustomButton from './CustomButton';

const Wrapper = s.div`
    display : flex;
    align-items:center;
    justify-content : center;
    flex-direction : column;

    background-color : var(--bg-color);
    box-shadow : 0 0 5px rgba(0,0,0,0.3);
    flex-basis:280px;
    overflow : hidden;
    border-radius : 25px;
    margin : 20px;

    img{
        width : 100%;
        height : 150px;
        object-fit : cover;
    }
`;

const DivData = s.div`
    display : flex;
    align-items:center;
    justify-content : center;
    flex-direction : column;
    background-color : var(--bg-color);
    padding : 10px;

    h2{
        color : var(--main-text-color);
        font-size : 1rem;
        margin : 10px;
    }

    p{
        color : var(--pale-text-color);
        text-align : justify;
        line-height : 130%;
        font-size : 0.9rem;
        margin: 10px;
        }

        div{
          display : flex;
          justify-content : center;
          align-items:center;
        }
`;

const DivTech = s.div`
        display : flex;
        aign-items : center;
        justify-content : center;
        flex-wrap : wrap;

        img{
          width:25px;
          height:25px;
        }
`;

const CardItem = ({ src, alt, title, text, techs }) => {
  return (
    <>
      <Wrapper>
        <img src={src} alt={alt} />
        <DivData>
          <h2>{title}</h2>
          <DivTech>
            {techs.map((e) => {
              return e && <Tech key={e} data={e} />;
            })}
          </DivTech>
          <p>{text}</p>
          <div>
            <CustomButton text="مشاهده دمو" type="cta" />
            <CustomButton text="گیت هاب" type="" />
          </div>
        </DivData>
      </Wrapper>
    </>
  );
};

export default CardItem;
