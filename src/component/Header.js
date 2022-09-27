import React from 'react';

import s from 'styled-components';

const MyHeader = s.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  width:100%;
  position:fixed;
  z-index : 10;
  top:0;
  background-color:var(--bg-color);
  box-shadow:0 5px 10px rgba(0 , 0 ,0 , 0.1);
  

h1{
  font-size: 1.5rem;
  color: var(--main-text-color);
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
  transition : 0.3s;
}

li{
  margin: 0 10px 0;
  transition: 0.3s;
  cursor: pointer;
}

a{
  color: var(--second-text-color);
  font-weight: bold;
}

button{
  font-weight: bold;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 0 20px 20px 20px;
  transition: 0.3s;
}

li:hover , button:hover{
  opacity: 0.5;
}

@media(max-width:768px) {
  ul{
      transform : ${(props) => (props.open ? 'translateX(0)' : 'translateX(-150%)')};
      flex-direction: column;
      justify-content : start;
      align-items : start;
      padding : 60px 80px;
      background-color : var(--primary-color);
      box-shadow : 5px 0 10px rgba(0,0,0,0.2);
      position : fixed;
      top : 0;
      left : 0;
      z-index : 10;
      height : 100vh;
  }

  ul li{
    margin-top : 30px;
  }

  a{
    color : #ffffff;
  }
  button{
    font-size : 1.1rem;
    padding : 0;
    background-color : transparent;
  }

  h1{
      font-size: 1.3rem;
  }

}`;

const Header = ({ open }) => {
  return (
    <>
      <MyHeader open={open}>
        <h1>محمد ذوالقدر</h1>
        <ul>
          <li>
            <a href="https://mohammadzolghadr.ir">خانه</a>
          </li>
          <li>
            <a href="https://mohammadzolghadr.ir">درباره من</a>
          </li>
          <li>
            <a href="https://mohammadzolghadr.ir">دانلود رزومه</a>
          </li>
          <li>
            <button>ارتباط با من</button>
          </li>
        </ul>
      </MyHeader>
    </>
  );
};

export default Header;
