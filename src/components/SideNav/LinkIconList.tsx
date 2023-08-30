import styled from '@emotion/styled';
import { LinkIcon } from './LinkIcon';

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const LinkIconList = () => {
  return (
    <Wrapper>
      <LinkIcon
        link="https://github.com/CheeseB"
        image="/icon/github.svg"
      ></LinkIcon>
      <LinkIcon
        link="https://www.instagram.com/cheeseb_all/"
        image="/icon/instagram.svg"
      ></LinkIcon>
      <LinkIcon
        link="https://cheeseb.github.io/rss"
        image="/icon/rss.svg"
      ></LinkIcon>
      {/* <LinkIcon
        link="mailto:2489ckckck@naver.com"
        image="/icon/email.svg"
      ></LinkIcon> */}
    </Wrapper>
  );
};
