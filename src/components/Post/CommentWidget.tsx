import styled from '@emotion/styled';
import React, { FunctionComponent, useEffect } from 'react';

const GiscusWrapper = styled.div`
  .giscus {
    max-width: 1020px;
    margin: 0 auto;
    padding-left: 220px;
  }

  @media (max-width: 1440px) {
    .giscus {
      max-width: 920px;
    }
  }

  @media (max-width: 1024px) {
    .giscus {
      max-width: 700px;
      padding-left: 0;
    }
  }

  @media (max-width: 744px) {
    .giscus {
      max-width: 100%;
      padding: 0 36px;
    }
  }

  @media (max-width: 428px) {
    .giscus {
      padding: 0 28px;
    }
  }

  @media (max-width: 320px) {
    .giscus {
      padding: 0 18px;
    }
  }
`;

type GiscusAttributesType = {
  'data-repo': string;
  'data-repo-id': string;
  'data-category': string;
  'data-category-id': string;
  'data-mapping': string;
  'data-strict': string;
  'data-reactions-enabled': string;
  'data-emit-metadata': string;
  'data-input-position': string;
  'data-theme': string;
  'data-loading': string;
  'data-lang': string;
  src: string;
  crossorigin: string;
  async: string;
};

export const CommentWidget: FunctionComponent = () => {
  useEffect(() => {
    const attributes: GiscusAttributesType = {
      'data-repo': 'CheeseB/CheeseB.github.io',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnkyOTQ5NzE5MTc=',
      'data-category': 'Blog Comments',
      'data-category-id': 'DIC_kwDOEZTqDc4CVlTC',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'light',
      'data-loading': 'lazy',
      'data-lang': 'ko',
      src: 'https://giscus.app/client.js',
      crossorigin: 'anonymous',
      async: 'true',
    };

    const script = document.createElement('script');
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    const container = document.getElementById('giscus-container');
    if (container) container.appendChild(script);

    return () => {
      if (container) container.removeChild(script);
    };
  }, []);

  return (
    <GiscusWrapper>
      <div id="giscus-container" />
    </GiscusWrapper>
  );
};
