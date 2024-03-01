import styled from '@emotion/styled';
import React from 'react';
import '@fontsource/jetbrains-mono/800.css';
import TypewriterComponent from 'typewriter-effect';

const Wrapper = styled.div`
  position: relative;
  width: 1028px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding-left: 220px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 48px;
  }

  @media (max-width: 744px) {
    padding: 0 36px;
  }

  @media (max-width: 428px) {
    width: 70%;
    padding: 0;
  }
`;

const MainAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;

const TypingText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 44px;
  font-weight: 700;
  height: 120px;
  color: #fec479;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 30px;
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

export const MainCheeseBall = () => {
  return (
    <Wrapper>
      <MainAnimation>
        <img src="/animation.webp" width={200} height={200} />
        <TypingText>
          <TypewriterComponent
            options={{
              strings: ['Hello CheeseB World!'],
              autoStart: true,
              loop: true,
            }}
          />
        </TypingText>
      </MainAnimation>
      <ScrollText>Scroll</ScrollText>
      <ScrollArrow src="/icon/down.svg"></ScrollArrow>
    </Wrapper>
  );
};
