import styled from '@emotion/styled';
import { CategoryList } from 'components/SideNav/CategoryList';
import { Introduction } from 'components/SideNav/Introduction';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent, useState, createContext } from 'react';

type HeaderProps = {
  profileImage: IGatsbyImageData;
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const NavigationBar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff8ee;
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1);
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    left: -220px;
  }
`;

export const SideNavigation: FunctionComponent<HeaderProps> = ({
  profileImage,
  selectedCategory,
  categoryList,
}) => {
  return (
    <NavigationBar>
      <Introduction profileImage={profileImage} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
    </NavigationBar>
  );
};
