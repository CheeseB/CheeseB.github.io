import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { ProfileImage } from 'components/SideNav/ProfileImage';
import { LinkIconList } from './LinkIconList';
import { Link } from 'gatsby';
import { SideBarContext } from 'contexts/SideBarContext';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
  onClick?: () => void;
};

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

const TitleText = styled(({ ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
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

export const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  const { isOpen, setOpen } = useContext(SideBarContext)!;
  const closeNavigationBar = () => setOpen!(false);

  return (
    <Wrapper>
      <ProfileImage profileImage={profileImage} />
      <TitleText to="/" onClick={closeNavigationBar}>
        개발자맛 치즈볼
      </TitleText>
      <AuthorText>CheeseB</AuthorText>
      <LinkIconList></LinkIconList>
    </Wrapper>
  );
};
