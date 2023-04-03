import styled from '@emotion/styled';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 112px;
  height: 112px;
  margin-bottom: 12px;
  border-radius: 50%;
`;

export const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  profileImage,
}) => {
  return <ProfileImageWrapper image={profileImage} alt="CheeseBall" />;
};
