import React from 'react';
import useLoading from 'hooks/useLoading';
import LoadingAnimation from 'components/Common/LoadingAnimation';

const Resume = () => {
  const loading = useLoading();

  return (
    <>
      {loading && <LoadingAnimation />}
      이력서 페이지!
    </>
  );
};

export default Resume;
