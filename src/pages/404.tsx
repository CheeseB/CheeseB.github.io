import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import { GlobalStyle } from 'components/Common/GlobalStyle';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ErrorPageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 70px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 46px;
  }

  @media (max-width: 428px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const GoToMainButton = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  color: #c25450;
  text-decoration: underline;
  line-height: 34px;
  cursor: pointer;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 80px;
  }

  @media (max-width: 428px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 60px;
  }
`;

const NotFoundImage = styled(GatsbyImage)`
  width: 500px;
  height: 500px;

  @media (max-width: 1024px) {
    width: 380px;
    height: 380px;
  }

  @media (max-width: 428px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 320px) {
    width: 220px;
    height: 220px;
  }
`;

const NotFoundPage: FunctionComponent<ErrorPageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundText>페이지를 찾을 수 없습니다.</NotFoundText>
      <GoToMainButton to="/">홈으로 돌아가기</GoToMainButton>
      <NotFoundImage image={gatsbyImageData} alt="404 not found" />
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;

export const getPostList = graphql`
  query getPostList {
    file(name: { eq: "error" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 500)
      }
    }
  }
`;
