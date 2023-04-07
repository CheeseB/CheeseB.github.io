import styled from '@emotion/styled';
import { SideBarContext } from 'contexts/SideBarContext';
import React, { FunctionComponent, useContext } from 'react';

const HeaderBar = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 48px;
  background-color: #fff8ee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.5s ease;

  @media (min-width: 1024px) {
    top: -52px;
    box-shadow: none;
  }

  @media (max-width: 744px) {
    padding: 0 36px;
  }

  @media (max-width: 428px) {
    height: 42px;
    padding: 0 28px;
  }

  @media (max-width: 320px) {
    padding: 0 18px;
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

  @media (max-width: 428px) {
    width: 24px;
    height: 24px;
  }
`;

const HeaderTitleText = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 800;
  color: #504538;
  position: relative;
  top: -2px;

  @media (max-width: 428px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 428px) {
    width: 24px;
    height: 24px;
  }
`;

export const Header: FunctionComponent = () => {
  const { isOpen, setOpen } = useContext(SideBarContext)!;
  const toggleNavigationBar = () => setOpen(prev => !prev);

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
