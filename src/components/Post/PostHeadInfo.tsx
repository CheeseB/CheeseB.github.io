import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: #ffffff;
  padding: 100px 0 40px;

  @media (max-width: 1440px) {
    width: 928px;
  }

  @media (max-width: 1024px) {
    width: 700px;
    padding: 80px 0 60px;
  }

  @media (max-width: 744px) {
    width: 100%;
    padding: 80px 36px 60px;
  }

  @media (max-width: 428px) {
    padding: 60px 28px 30px;
  }

  @media (max-width: 320px) {
    padding: 50px 18px 20px;
  }
`;

const Category = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 26px;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 428px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 40px;
  line-height: 70px;
  font-weight: 800;
  color: #fff;

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

const Date = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = ({
  title,
  date,
  categories,
}) => {
  return (
    <PostHeadInfoWrapper>
      <Category>{categories.join('/')}</Category>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </PostHeadInfoWrapper>
  );
};