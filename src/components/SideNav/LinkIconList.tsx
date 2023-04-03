import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const IconCircle = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkIconList = () => {
  return (
    <Wrapper>
      <IconCircle href="https://github.com/CheeseB" target="_blank">
        <img src="/icon/github.svg" alt="icon" />
      </IconCircle>
      <IconCircle
        href="https://www.instagram.com/malang_cheeseb/"
        target="_blank"
      >
        <img src="/icon/instagram.svg" alt="icon" />
      </IconCircle>
      <IconCircle href="mailto:2489ckckck@naver.com" target="_blank">
        <img src="/icon/email.svg" alt="icon" />
      </IconCircle>
    </Wrapper>
  );
};
