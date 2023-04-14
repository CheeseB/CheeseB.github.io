import styled from '@emotion/styled';
import React from 'react';

const WavesContainer = styled.div`
  .waves {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-of-type(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  @media (max-width: 744px) {
    .waves {
      height: 40px;
    }
  }

  @media (max-width: 428px) {
    .waves {
      height: 24px;
    }
  }
`;

export const Waves = () => {
  return (
    <WavesContainer>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255, 255, 255, 0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255, 255, 255, 0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </WavesContainer>
  );
};
