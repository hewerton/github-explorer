import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/github_explorer_logo.svg';
import * as S from './styles';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface RepositoryDetails {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface IssueDetails {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const {
    params: { repository },
  } = useRouteMatch<RepositoryParams>();

  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>(() => {
    const storagedRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepos) {
      const repos: RepositoryDetails[] = JSON.parse(storagedRepos);
      const foundRepo = repos.filter(repo => repo.full_name === repository);

      if (foundRepo.length) {
        return foundRepo[0];
      }
    }

    return {} as RepositoryDetails;
  });

  const [repoError, setRepoError] = useState(true);

  const [issuesDetails, setIssuesDetails] = useState<IssueDetails[]>([]);

  useEffect(() => {
    async function getRepoDetails(): Promise<void> {
      try {
        if (!repoDetails.full_name) {
          const resRepoDetails = await api.get<RepositoryDetails>(
            `repos/${repository}`,
          );

          setRepoDetails(resRepoDetails.data);
        }

        const resIssuesDetails = await api.get<IssueDetails[]>(
          `repos/${repository}/issues`,
        );

        setRepoError(false);
        setIssuesDetails(resIssuesDetails.data);
      } catch (e) {
        setRepoError(true);
      }
    }

    getRepoDetails();
  }, [repoDetails, repository]);

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </S.Header>
      {!repoError && (
        <S.RepositoryDetails>
          <S.RepositoryInfo>
            <img
              src={repoDetails.owner.avatar_url}
              alt={repoDetails.owner.login}
            />
            <div>
              <strong>{repoDetails.full_name}</strong>
              <p>{repoDetails.description}</p>
            </div>
          </S.RepositoryInfo>

          <S.RepositoryNumbers>
            <li>
              <strong>{repoDetails.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repoDetails.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repoDetails.open_issues_count}</strong>
              <span>Open issues</span>
            </li>
          </S.RepositoryNumbers>
        </S.RepositoryDetails>
      )}
      <S.IssueList>
        {!repoError &&
          issuesDetails.map(issue => (
            <S.IssueItem key={issue.id} href={issue.html_url} target="blank">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight />
            </S.IssueItem>
          ))}
      </S.IssueList>
    </>
  );
};

export default Repository;
