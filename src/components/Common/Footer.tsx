import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 36px 30px 256px;

  @media (max-width: 1024px) {
    padding: 100px 36px 30px;
  }

  @media (max-width: 428px) {
    padding: 100px 28px 30px;
  }

  @media (max-width: 320px) {
    padding: 100px 18px 30px;
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
