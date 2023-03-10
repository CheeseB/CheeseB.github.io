import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';
import { ProfileImage } from './ProfileImage';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 830px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 830px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 830px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 830px) {
    font-size: 25px;
  }
`;

export const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Nice to Meet You, </SubTitle>
          <Title>I'm Junior Frontend Developer CheeseB.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};
