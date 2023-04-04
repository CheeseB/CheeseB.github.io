import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding-left: 220px;

  @media (max-width: 1440px) {
    width: 1028px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 48px;
  }

  @media (max-width: 744px) {
    padding: 0 36px;
  }

  @media (max-width: 428px) {
    padding: 0 28px;
  }

  @media (max-width: 320px) {
    padding: 0 18px;
  }
`;

const MainGIF = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/main.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: 744px) {
    background-image: url('/main-vertical.gif');
  }
`;

export const MainCheeseBall = () => {
  return (
    <Wrapper>
      <MainGIF></MainGIF>
    </Wrapper>
  );
};
