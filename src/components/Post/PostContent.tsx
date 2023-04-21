import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 860px;
  margin: 0 auto;
  padding: 100px 0 100px 60px;
  word-break: break-all;

  line-height: 1.8;
  font-size: 18px;
  font-weight: 400;

  * {
    color: #402e32;
  }

  strong {
    font-weight: 600;
  }

  mark {
    font-weight: 600;
    background-color: #ffeccc;
  }

  small {
    font-style: italic;
    color: grey;
    font-size: inherit;
  }

  del {
    color: grey;
  }

  p {
    padding: 2px 0;
    margin: 16px 0;
  }

  img {
    border-radius: 10px;
  }

  a.anchor.before {
    display: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 800;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
    line-height: 1.5em;
    padding-bottom: 24px;
    position: relative;
  }

  h2:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 6px;
    width: 60px;
    border-radius: 8px;
    background-color: #fec479;
  }

  h2:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    width: 100%;
    background-color: #fec479;
  }

  * + h2 {
    margin-top: 70px;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  * + h3 {
    margin-top: 60px;
  }

  h4 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  * + h4 {
    margin-top: 50px;
  }

  h1 + *,
  h2 + *,
  h3 + *,
  h4 + * {
    margin-top: 0;
  }

  blockquote {
    margin: 16px 0;
    padding: 5px 15px;
    border-left: 4px solid #fec479;
    background-color: #fff8f0;
  }

  blockquote p {
    margin: 0;
  }

  table {
    margin: 16px 0;
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
  }

  th {
    text-align: left;
    font-weight: 600;
    background: #fff8ee;
    border-top: 1px solid #dfe0df;
    border-bottom: 1px solid #dfe0df;
  }

  td,
  th {
    padding: 0.8em 0.6em;
    vertical-align: middle;
  }

  td {
    border-bottom: 1px solid #dfe0df;
    background: #fff;
  }

  ol,
  ul {
    padding: 16px 0;
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

  li p {
    margin: 0;
    padding: 0;
    display: inline;
    font-weight: 600;
    vertical-align: middle;
  }

  ol {
    counter-reset: list-counter;
  }

  ol li {
    padding-left: 44px;
    text-indent: -44px;
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
    text-indent: 0;
  }

  ol li li::before,
  ul ol li::before {
    width: 0.3em;
    height: 0.3em;
    padding: 0.3em;
    font-size: 1em;
    border: none;
    background: none;
    color: #fec479;
  }

  ul li {
    padding-left: 32px;
    text-indent: -32px;
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
    text-indent: 0;
  }

  ul li li::before,
  ol ul li::before {
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

  .gatsby-highlight {
    position: relative;
    margin: 16px 0;
  }

  .code-header + .gatsby-highlight {
    margin-top: 0;
  }

  .code-header + .gatsby-highlight::after {
    content: attr(data-language);
    position: absolute;
    top: -36px;
    right: 18px;
    color: #cfd2d1;
    font-size: 12px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  pre[class*='language-'] {
    margin: 0;
    padding: 20px;
    border-radius: 10px;
    max-height: 600px;
    overflow: scroll;
    font-size: 16px;
  }

  .code-header + .gatsby-highlight pre[class*='language-'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  pre[class*='language-']::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  pre[class*='language-']::-webkit-scrollbar-thumb {
    background-color: #434041;
    border-radius: 4px;
  }

  pre[class*='language-']::-webkit-scrollbar-corner {
    display: none;
  }

  code[class*='language-'] span.token.interpolation,
  code[class*='language-'] span.token.parameter {
    color: #ccc;
  }

  .code-header {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #434041;
    border-radius: 8px 8px 0 0;
    margin-top: 16px;
  }

  .code-header .btn {
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 0 4px;
  }

  .code-header .btn.red {
    background-color: #f5655b;
  }

  .code-header .btn.yellow {
    background-color: #f6bd3b;
  }

  .code-header .btn.green {
    background-color: #43c645;
  }

  @media (max-width: 1512px) {
    width: 920px;
    padding-left: 220px;
  }

  @media (max-width: 1024px) {
    width: 700px;
    font-size: 16px;
    padding: 100px 0;

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 18px;
    }

    pre[class*='language-'] {
      font-size: 14px;
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
      margin: 12px 0;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 30px;
      padding-bottom: 14px;
    }

    h2:before {
      width: 30px;
    }

    * + h2 {
      margin-top: 50px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 14px;
    }

    * + h3 {
      margin-top: 40px;
    }

    h4 {
      font-size: 14px;
      margin-bottom: 14px;
    }

    * + h4 {
      margin-top: 30px;
    }

    h1 + *,
    h2 + *,
    h3 + *,
    h4 + * {
      margin-top: 0;
    }

    blockquote {
      margin: 12px 0;
      border-left: 2px solid #fec479;
    }

    table {
      margin: 12px 0;
    }

    ol,
    ul {
      padding: 12px 0;
    }

    li {
      margin: 8px 0;
    }

    ol li {
      padding-left: 34px;
      text-indent: -34px;
    }

    ul li {
      padding-left: 24px;
      text-indent: -24px;
    }

    ol li::before,
    ul li::before {
      margin-right: 8px;
    }

    hr {
      margin: 30px 0;
    }

    .gatsby-highlight {
      margin: 12px 0;
    }

    .code-header + .gatsby-highlight {
      margin-top: 0;
    }

    .code-header + .gatsby-highlight::after {
      top: -28px;
      right: 14px;
      font-size: 10px;
    }

    pre[class*='language-'] {
      padding: 14px;
      max-height: 400px;
      font-size: 10px;
    }

    pre[class*='language-']::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    .code-header {
      margin-top: 12px;
      padding: 12px;
    }

    .code-header .btn {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 320px) {
    padding: 60px 18px;
    font-size: 10px;

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 12px;
    }

    pre[class*='language-'] {
      font-size: 8px;
    }
  }
`;

export const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  // const htmlString = useHtmlCodeParser(html);

  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};
