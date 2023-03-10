import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { PostItem } from './PostItem';
import { PostListItemType } from 'types/PostItem.types';
import {
  useInfiniteScroll,
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 830px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

export const PostList: FunctionComponent<PostListProps> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};
