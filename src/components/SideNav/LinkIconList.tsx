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
        link="https://www.instagram.com/o_cheeseb_o/"
        image="/icon/instagram.svg"
      ></LinkIcon>
      <LinkIcon
        link="https://cheeseb.github.io/rss"
        image="/icon/rss.svg"
      ></LinkIcon>
    </Wrapper>
  );
};
