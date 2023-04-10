import styled from '@emotion/styled';
import React, { FunctionComponent, useContext } from 'react';
import { LinkIconList } from './LinkIconList';
import { Link } from 'gatsby';
import { SideBarContext } from 'contexts/SideBarContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 338px;
  border-bottom: 1px solid rgba(183, 169, 154, 0.3);

  @media (max-width: 428px) {
    height: 266px;
  }
`;

const ProfileImage = styled.img`
  width: 112px;
  height: 112px;
  margin-bottom: 12px;
  border-radius: 50%;

  @media (max-width: 428px) {
    width: 80px;
    height: 80px;
  }
`;

const TitleText = styled(Link)`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #504538;
  margin-bottom: 4px;

  @media (max-width: 428px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const AuthorText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #a87564;
  margin-bottom: 16px;

  @media (max-width: 428px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Introduction: FunctionComponent = () => {
  const { setOpen } = useContext(SideBarContext) || {};
  const closeNavigationBar = () => {
    setOpen && setOpen(false);
  };

  return (
    <Wrapper>
      <ProfileImage src="/profile-image.png" alt="CheeseBall" />
      <TitleText to="/" onClick={closeNavigationBar}>
        개발자맛 치즈볼
      </TitleText>
      <AuthorText>CheeseB</AuthorText>
      <LinkIconList></LinkIconList>
    </Wrapper>
  );
};
