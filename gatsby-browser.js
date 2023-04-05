import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import SideBarProvider from './src/contexts/SideBarProvider';

export const wrapRootElement = ({ element }) => {
  return <SideBarProvider>{element}</SideBarProvider>;
};
