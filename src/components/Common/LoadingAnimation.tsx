import styled from '@emotion/styled';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LottieContainer = styled.div`
  width: 100px;

  @media (max-width: 428px) {
    width: 60px;
  }
`;

const LoadingAnimation = () => {
  const lottieContainer: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieContainer.current === null) return;

    const lottie = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('/static/lottie.json'),
    });
    lottie.setSpeed(1.8);
  });

  return (
    <Wrapper>
      <LottieContainer ref={lottieContainer}></LottieContainer>
    </Wrapper>
  );
};

export default LoadingAnimation;
