import React, { FormEvent, useEffect, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import * as S from './styles';
import logoImg from '../../assets/github_explorer_logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repos = localStorage.getItem('@GithubExplorer:repositories');

    if (repos) {
      return JSON.parse(repos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setInputError('');

    if (!newRepo) {
      setInputError('Type the name like this pattern: author/name');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
    } catch (error) {
      setInputError('A error ocurred!');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <S.Title>Explore repositories from GitHub.</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Type the repository's name"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Search</button>
      </S.Form>

      {inputError && <S.FormError>{inputError}</S.FormError>}

      <S.RepositoryList>
        {repositories.map(repository => (
          <S.RepositoryItem
            key={repository.full_name}
            to={`repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </S.RepositoryItem>
        ))}
      </S.RepositoryList>
    </>
  );
};

export default Dashboard;
