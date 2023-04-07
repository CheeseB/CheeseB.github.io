import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 1380px;
  margin: 0 auto;
  padding: 120px 0 120px 220px;
  word-break: break-all;

  // Markdown Style
  line-height: 2;
  font-size: 20px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
    margin: 34px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 60px;
  }

  * + h1 {
    margin-top: 80px;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 50px;
  }

  * + h2 {
    margin-top: 70px;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h3 {
    font-size: 24px;
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
    margin-left: 26px;
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
    margin: 80px 0;
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
    border-radius: 16px;
    font-size: 18px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  @media (max-width: 1440px) {
    width: 980px;
  }

  // Markdown Responsive Design
  @media (max-width: 1024px) {
    width: 700px;
    font-size: 18px;
    padding: 120px 0;

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
      font-size: 26px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 22px;
    }

    hr {
      margin: 60px 0;
    }

    pre[class*='language-'] {
      font-size: 16px;
    }
  }

  @media (max-width: 744px) {
    width: 100%;
    padding: 120px 36px;
  }

  @media (max-width: 428px) {
    padding: 80px 28px;
    font-size: 12px;

    p {
      margin: 16px 0;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 40px;
    }

    * + h1 {
      margin-top: 60px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 30px;
    }

    * + h2 {
      margin-top: 50px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 20px;
    }

    * + h3 {
      margin-top: 40px;
    }

    blockquote {
      margin: 16px 0;
      border-left: 2px solid lightgray;
    }

    ol,
    ul {
      padding: 16px 0;
    }

    hr {
      margin: 40px 0;
    }

    pre[class*='language-'] {
      margin: 16px 0;
      padding: 18px;
      font-size: 10px;
    }
  }

  @media (max-width: 320px) {
    padding: 80px 18px;
    font-size: 10px;

    h1 {
      font-size: 16px;
    }

    h2 {
      font-size: 14px;
    }

    h3 {
      font-size: 12px;
    }

    hr {
      margin: 30px 0;
    }
  }
`;

export const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};
