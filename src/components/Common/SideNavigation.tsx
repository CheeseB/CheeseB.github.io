import styled from '@emotion/styled';
import { CategoryList } from 'components/SideNav/CategoryList';
import { Introduction } from 'components/SideNav/Introduction';
import { SideBarContext } from 'contexts/SideBarContext';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useContext,
} from 'react';

type NavigationOpenProps = {
  isOpen: boolean;
};

type OpenableNodeProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
} & NavigationOpenProps;

type NavigationProps = {
  profileImage: IGatsbyImageData;
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const NavigationBar = styled(({ isOpen, ...props }: OpenableNodeProps) => (
  <nav {...props} />
))<NavigationOpenProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  z-index: 5;
  overflow-y: scroll;
  background-color: #fff8ee;
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1);
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: all 0.5s ease;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    left: ${({ isOpen }) => (isOpen ? '0' : '-220px')};
  }
`;

const Background = styled(({ isOpen, ...props }: OpenableNodeProps) => (
  <div {...props} />
))<NavigationOpenProps>`
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const SideNavigation: FunctionComponent<NavigationProps> = ({
  profileImage,
  selectedCategory,
  categoryList,
}) => {
  const { isOpen, setOpen } = useContext(SideBarContext)!;
  const closeNavigationBar = () => setOpen!(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOpen]);
  useEffect(() => setOpen(false), [selectedCategory]);

  return (
    <>
      <NavigationBar isOpen={isOpen}>
        <Introduction profileImage={profileImage} />
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      </NavigationBar>
      <Background isOpen={isOpen} onClick={closeNavigationBar}></Background>
    </>
  );
};
