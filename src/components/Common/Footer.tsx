import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: end;
  margin: 0 auto;
  color: #b7a99a;
  width: 980px;
  height: 50px;
  font-size: 12px;
  line-height: 30px;
  margin-top: 100px;
  border-top: 1px solid rgba(183, 169, 154, 0.3);
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: calc(100% - 20px);
  }

  @media (max-height: 926px) {
    margin-top: 60px;
  }
`;

export const Footer: FunctionComponent = () => {
  return <FooterWrapper>© CheeseB, Powered By Gatsby.</FooterWrapper>;
};
