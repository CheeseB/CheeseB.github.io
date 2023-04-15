import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  margin: 0 auto;
  padding: 100px 0 100px 220px;
  word-break: break-all;

  line-height: 1.8;
  font-size: 18px;
  font-weight: 400;

  * {
    color: #402e32;
  }

  strong {
    font-weight: 600;
    background-color: #ffeccc;
  }

  del {
    color: grey;
  }

  p {
    padding: 2px 0;
    margin: 20px 0;
  }

  img {
    border-radius: 10px;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 40px;
  }

  * + h1 {
    margin-top: 70px;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 30px;
  }

  * + h2 {
    margin-top: 60px;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  * + h3 {
    margin-top: 50px;
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

  blockquote {
    margin: 20px 0;
    padding: 5px 15px;
    border-left: 4px solid #fec479;
    background-color: #fff8f0;
  }

  blockquote p {
    margin: 0;
  }

  ol,
  ul {
    padding: 20px 0;
    list-style: none;
  }

  ol ul,
  ol ol,
  ul ol,
  ul ul {
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  li li {
    margin-left: 26px;
  }

  li p {
    margin: 0;
  }

  ol {
    counter-reset: list-counter;
  }

  ol li::before {
    content: counter(list-counter);
    counter-increment: list-counter;
    width: 0.5em;
    height: 0.5em;
    padding: 0.5em;
    font-size: 0.9em;
    margin-right: 12px;
    border-radius: 50%;
    border: 4px solid #ffeccc;
    background-color: #fec479;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  ol li li::before {
    width: 0.3em;
    height: 0.3em;
    padding: 0.3em;
    font-size: 1em;
    border: none;
    background: none;
    color: #fec479;
  }

  ul li::before {
    content: '';
    width: 0.2em;
    height: 0.2em;
    padding: 0.2em;
    margin-right: 12px;
    border-radius: 50%;
    border: 4px solid #ffeccc;
    background-color: #fec479;
    display: inline-block;
    vertical-align: middle;
  }

  ul li li::before {
    width: 0.15em;
    height: 0.15em;
    padding: 0.15em;
    border: 3px solid #fec479;
    background-color: #fff;
  }

  ul li li li::before {
    border: none;
    background-color: #fec479;
  }

  hr {
    border-width: 0 0 4px;
    border-style: solid;
    border-image: url('/icon/dot.svg') 0 0 100% repeat;
    width: 100%;
    margin: 60px 0;
  }

  a {
    color: #ff8982;
    text-decoration: underline;
  }

  pre[class*='language-'] {
    margin: 20px 0;
    padding: 20px;
    border-radius: 16px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  @media (max-width: 1440px) {
    width: 920px;
  }

  @media (max-width: 1024px) {
    width: 700px;
    font-size: 16px;
    padding: 100px 0;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 20px;
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
      margin: 14px 0;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    * + h1 {
      margin-top: 50px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 24px;
    }

    * + h2 {
      margin-top: 40px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 18px;
    }

    * + h3 {
      margin-top: 30px;
    }

    blockquote {
      margin: 14px 0;
      border-left: 2px solid lightgray;
    }

    ol,
    ul {
      padding: 14px 0;
    }

    li {
      margin: 8px 0;
    }

    li li {
      margin-left: 20px;
    }

    ol li::before,
    ul li::before {
      margin-right: 8px;
    }

    hr {
      margin: 30px 0;
    }

    pre[class*='language-'] {
      margin: 14px 0;
      padding: 14px;
    }
  }

  @media (max-width: 320px) {
    padding: 60px 18px;
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
  }
`;

export const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};
