import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 1020px;
  margin: 100px auto 30px;
  padding-left: 220px;

  @media (max-width: 1440px) {
    width: 920px;
  }

  @media (max-width: 1024px) {
    width: 700px;
    padding-left: 0;
  }

  @media (max-width: 744px) {
    width: 100%;
    padding: 0 36px;
  }

  @media (max-width: 428px) {
    padding: 0 28px;
  }

  @media (max-width: 320px) {
    padding: 0 18px;
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: end;
  color: #b7a99a;
  width: 100%;
  font-size: 12px;
  line-height: 30px;
  border-top: 1px solid rgba(183, 169, 154, 0.3);
  align-self: flex-end;
`;

export const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <FooterWrapper>© CheeseB, Powered By Gatsby.</FooterWrapper>
    </Wrapper>
  );
};
