import React from 'react';
import styled from 'styled-components';
import { Header } from '../../layout/header/header';
import { Navigator } from '../../layout/navigator/navigator';
import fvImg from '../../images/IMG_1254.JPG';

const Home = styled.article`
  display: flex;
  height: 100%;
  overflow: hidden;

  >div {
    flex: 1;
    overflow: auto;
  }
`;

export const Home2 = () => {

  return (
    <Home>
      <Navigator />
      <div>
        <Header />
        <div></div>
        <div>
          <img src={fvImg} alt="" />
        </div>
      </div>
    </Home>
  )
};
