import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

type TableOfContentsProps = {
  contents: string;
};

const TOC = styled.div`
  position: fixed;
  top: 120px;
  left: calc(50% + 680px);
  transform: translateX(-50%);

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 8px;
  }

  ul li a {
    font-size: 18px;
    line-height: 2em;
    color: #402e32;
  }

  ul ul {
    border-left: 2px solid #dfe0df;
    margin-left: 20px;
    padding-left: 20px;
  }

  ul ul li {
    margin-bottom: 0;
  }

  ul ul li a {
    font-size: 16px;
  }

  ul ul ul {
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
}) => {
  return <TOC dangerouslySetInnerHTML={{ __html: contents }}></TOC>;
};
