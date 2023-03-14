import styled from '@emotion/styled';
import React, { FunctionComponent, ReactNode } from 'react';
import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';
import { Helmet } from 'react-helmet-async';

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Template: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta
          name="google-site-verification"
          content="QxP8HV3avuS-TynhxJcJZBJnyXaInJHSmpLvXF9PiWU"
        />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};
