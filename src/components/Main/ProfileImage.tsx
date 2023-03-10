import styled from '@emotion/styled';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 830px) {
    width: 80px;
    height: 80px;
  }
`;

export const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  profileImage,
}) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
};
