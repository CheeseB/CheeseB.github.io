import styled from '@emotion/styled';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CheeseBallLottieVertical = () => {
  const lottieContainer: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieContainer.current === null) return;

    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('/static/lottie-main-vertical.json'),
    });
  });

  return <Wrapper ref={lottieContainer}></Wrapper>;
};

export default CheeseBallLottieVertical;
