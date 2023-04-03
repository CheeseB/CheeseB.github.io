import styled from '@emotion/styled';
import React from 'react';

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 48px;
  background-color: #fff8ee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HamburgerBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const HamburgerBtnImage = styled.img`
  width: 32px;
  height: 32px;
`;

const HeaderTitleText = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 800;
  color: #504538;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Header = () => {
  const toggleNavigationBar = () => {};

  return (
    <HeaderBar>
      <HamburgerBtn onClick={toggleNavigationBar}>
        <HamburgerBtnImage src="/icon/hamburger-button.svg" alt="-" />
      </HamburgerBtn>
      <HeaderTitleText>개발자맛 치즈볼</HeaderTitleText>
      <ProfileImage src="/profile-image-small.png"></ProfileImage>
    </HeaderBar>
  );
};
