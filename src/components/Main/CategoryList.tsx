import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 830px;
  margin: 100px auto 0;

  @media (max-width: 830px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 830px) {
    font-size: 15px;
  }
`;

export const CategoryList: FunctionComponent<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};
