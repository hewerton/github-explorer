import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/github_explorer_logo.svg';
import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const {
    params: { repository },
  } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </S.Header>
      <S.RepositoryDetails>
        <S.RepositoryInfo>
          <img
            src="https://avatars3.githubusercontent.com/u/29063458?s=460&u=c03b921843b147fe9d3ef6bb95da512aa4d74d75&v=4"
            alt="Lidani"
          />
          <div>
            <strong>tiagolouchtenberg/repo</strong>
            <p>Descrição do repo</p>
          </div>
        </S.RepositoryInfo>

        <S.RepositoryNumbers>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </S.RepositoryNumbers>
      </S.RepositoryDetails>
      <S.IssueList>
        <S.IssueItem to="">
          <div>
            <strong>asdfasdfadfs</strong>
            <p>asdfasdfasdasdf</p>
          </div>
          <FiChevronRight />
        </S.IssueItem>
        <S.IssueItem to="">
          <div>
            <strong>asdfasdfadfs</strong>
            <p>asdfasdfasdasdf</p>
          </div>
          <FiChevronRight />
        </S.IssueItem>
        <S.IssueItem to="">
          <div>
            <strong>asdfasdfadfs</strong>
            <p>asdfasdfasdasdf</p>
          </div>
          <FiChevronRight />
        </S.IssueItem>
      </S.IssueList>
    </>
  );
};

export default Repository;
