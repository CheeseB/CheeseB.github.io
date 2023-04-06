import styled from '@emotion/styled';
import React, { createRef, FunctionComponent, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'CheeseB/CheeseB.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const UtterancesWrapper = styled.div`
  .utterances {
    max-width: 1340px;
  }

  .utterances-frame {
    position: relative;
  }

  @media (max-width: 1440px) {
    .utterances {
      max-width: 928px;
    }
  }

  @media (max-width: 1024px) {
    .utterances {
      max-width: 544px;
    }
  }

  @media (max-width: 744px) {
    .utterances {
      max-width: 100%;
      padding: 0 36px;
    }
  }

  @media (max-width: 428px) {
    .utterances {
      padding: 0 28px;
    }
  }

  @media (max-width: 320px) {
    .utterances {
      padding: 0 18px;
    }
  }
`;

export const CommentWidget: FunctionComponent = () => {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');
    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};
