import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 980px;
  margin: 0 auto;
  padding: 120px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 2;
  font-size: 22px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
    margin: 34px 0;
  }

  // Adjust Heading Element Style
  h1 {
    font-size: 44px;
    margin-bottom: 60px;
  }

  * + h1 {
    margin-top: 80px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 50px;
  }

  * + h2 {
    margin-top: 70px;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  * + h3 {
    margin-top: 60px;
  }

  h1 + h3,
  h2 + h3 {
    margin-top: 0;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 4px solid lightgray;
    font-weight: 400;
    font-style: italic;
    color: grey;
  }

  // Adjust List Element Style
  ol,
  ul {
    padding: 30px 0;
    margin-left: 20px;
    font-size: 24px;
  }

  ol ul,
  ol ol,
  ul ol,
  ul ul {
    padding: 0;
  }

  li {
    margin: 4px 0;
  }

  li p {
    margin: 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 2px solid lightgray;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #ff8982;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 30px;
    font-size: 20px;
    border-radius: 16px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 1024px) {
    width: 100%;
    padding: 100px 20px;
    font-size: 18px;

    h1,
    h2,
    h3 {
      margin-bottom: 50px;
    }

    * + h1,
    * + h2,
    * + h3 {
      margin-top: 70px;
    }

    h1 {
      font-size: 38px;
    }

    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 24px;
    }

    ol,
    ul {
      font-size: 20px;
    }

    hr {
      margin: 80px 0;
    }
  }
`;

export const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};
