import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';
import { PostHeadInfo, PostHeadInfoProps } from './PostHeadInfo';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 1024px) {
    height: 340px;
    margin-top: 52px;
  }

  @media (max-width: 428px) {
    height: 280px;
    margin-top: 42px;
  }

  @media (max-width: 320px) {
    height: 240px;
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-left: 220px;
  filter: brightness(0.3);

  @media (max-width: 1024px) {
    margin-left: 0;
    height: 340px;
  }

  @media (max-width: 428px) {
    height: 280px;
  }

  @media (max-width: 320px) {
    height: 240px;
  }
`;

export const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};
