import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import CheeseBallLottie from './CheeseBallLottie';
import CheeseBallLottieVertical from './CheeseBallLottieVertical';

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding-left: 220px;

  @media (max-width: 1440px) {
    width: 1028px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 48px;
  }

  @media (max-width: 744px) {
    padding: 0 36px;
  }

  @media (max-width: 428px) {
    padding: 0 28px;
  }

  @media (max-width: 320px) {
    padding: 0 18px;
  }
`;

const ScrollText = styled.div`
  position: absolute;
  bottom: 84px;
  font-size: 24px;
  color: #fec479;
  line-height: 34px;
  left: calc(50% + 110px);
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    left: 50%;
  }

  @media (max-width: 428px) {
    font-size: 16px;
    line-height: 24px;
    bottom: 56px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 20px;
    bottom: 40px;
  }
`;

const ScrollArrow = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: calc(50% + 110px);
  transform: translateX(-50%);

  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;

  @-webkit-keyframes bounce {
    0% {
      bottom: 38px;
    }
    50% {
      bottom: 30px;
    }
    100% {
      bottom: 38px;
    }
  }

  @keyframes bounce {
    0% {
      bottom: 38px;
    }
    50% {
      bottom: 30px;
    }
    100% {
      bottom: 38px;
    }
  }

  @media (max-width: 1024px) {
    left: 50%;
  }

  @media (max-width: 428px) {
    width: 32px;
    height: 32px;

    @-webkit-keyframes bounce {
      0% {
        bottom: 28px;
      }
      50% {
        bottom: 20px;
      }
      100% {
        bottom: 28px;
      }
    }

    @keyframes bounce {
      0% {
        bottom: 28px;
      }
      50% {
        bottom: 20px;
      }
      100% {
        bottom: 28px;
      }
    }
  }

  @media (max-width: 320px) {
    width: 28px;
    height: 28px;

    @-webkit-keyframes bounce {
      0% {
        bottom: 20px;
      }
      50% {
        bottom: 12px;
      }
      100% {
        bottom: 20px;
      }
    }

    @keyframes bounce {
      0% {
        bottom: 20px;
      }
      50% {
        bottom: 12px;
      }
      100% {
        bottom: 20px;
      }
    }
  }
`;

export const MainAnimation = () => {
  const isBrowser = typeof window !== 'undefined';
  const isMobile = isBrowser ? window.innerWidth < 428 : false;
  const [isVertical, setIsVertical] = useState(isMobile);
  const handleResize = () => {
    if (isBrowser)
      window.innerWidth < 428 ? setIsVertical(true) : setIsVertical(false);
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return;
  });

  return (
    <Wrapper>
      {isVertical ? <CheeseBallLottieVertical /> : <CheeseBallLottie />}
      <ScrollText>Scroll</ScrollText>
      <ScrollArrow src="/icon/down.svg"></ScrollArrow>
    </Wrapper>
  );
};
