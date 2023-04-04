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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 18px;
  width: 1200px;
  margin: 0 auto;
  padding-left: 220px;
`;

const PostCategory = styled.div`
  margin: 80px auto 70px;
  padding-left: 220px;
  text-align: center;
`;

const PostCategoryText = styled.div`
  font-size: 20px;
  line-height: 50px;
  font-weight: 800;
  color: #c25450;
  border-bottom: 1px solid #ff8982;
  padding: 0 60px;
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
    <>
      <PostCategory>
        <PostCategoryText>
          {selectedCategory === 'All' ? '전체 게시글' : selectedCategory}
        </PostCategoryText>
      </PostCategory>
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
    </>
  );
};
