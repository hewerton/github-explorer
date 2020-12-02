import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const {
    params: { repository },
  } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <h1>Repository</h1>
      <p>{repository}</p>
    </>
  );
};

export default Repository;
