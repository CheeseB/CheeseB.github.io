import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto 50px;
  padding-left: 220px;

  @media (max-width: 1440px) {
    width: 920px;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 96px);
    padding-left: 0;
  }

  @media (max-width: 744px) {
    width: calc(100% - 72px);
  }

  @media (max-width: 428px) {
    width: calc(100% - 56px);
  }

  @media (max-width: 320px) {
    width: calc(100% - 36px);
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
