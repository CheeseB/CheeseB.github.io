import styled from '@emotion/styled';
import React, { FunctionComponent, useEffect, useState } from 'react';

type TableOfContentsProps = {
  contents: string;
};

type ShowTableProps = {
  showTable: boolean;
};

const TOC = styled.div<ShowTableProps>`
  position: fixed;
  width: 260px;
  top: 120px;
  left: calc(82%);
  padding: 10px;
  border-left: 2px solid #dfe0df;
  opacity: ${({ showTable }) => (showTable ? '100' : '0')};
  transition: opacity 0.2s ease;

  p,
  li {
    padding: 2px 0;
    color: grey;
  }

  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
    font-size: 16px;
    color: grey;
    line-height: 1.8em;
    padding-left: 8px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #fff8ee;
  }

  ul {
    list-style: none;
  }

  ul ul {
    margin-left: 20px;
    padding-left: 12px;
  }

  ul ul li a {
    font-size: 14px;
    color: #979797;
  }

  ul ul ul {
    display: none;
  }

  @media (max-width: 1512px) {
    display: none;
  }
`;

export const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
}) => {
  const [showTable, setShowTable] = useState(false);
  const handleScroll = () => {
    window.scrollY >= 400 ? setShowTable(true) : setShowTable(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TOC
      showTable={showTable}
      dangerouslySetInnerHTML={{ __html: contents }}
    ></TOC>
  );
};
