import React from "react";

import * as S from "./styles";
import logoImg from "../../assets/github_explorer_logo.svg";
import { FiChevronRight } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <S.Title>Explore repositórios no GitHub.</S.Title>

      <S.Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>
      <S.RepositoryList>
        <S.RepositoryItem>
          <img
            src="https://avatars2.githubusercontent.com/u/1130376?s=460&u=27993fe64634b798746d9aef22ac0e06a5a826e0&v=4"
            alt="Hewerton Oliveira"
          />
          <div>
            <strong>hewerton/soundacity</strong>
            <p>
              Android app that struture a player for musics. The playback isn`t
              working.
            </p>
          </div>
          <FiChevronRight />
        </S.RepositoryItem>
        <S.RepositoryItem>
          <img
            src="https://avatars2.githubusercontent.com/u/1130376?s=460&u=27993fe64634b798746d9aef22ac0e06a5a826e0&v=4"
            alt="Hewerton Oliveira"
          />
          <div>
            <strong>hewerton/soundacity</strong>
            <p>
              Android app that struture a player for musics. The playback isn`t
              working.
            </p>
          </div>
          <FiChevronRight />
        </S.RepositoryItem>
        <S.RepositoryItem>
          <img
            src="https://avatars2.githubusercontent.com/u/1130376?s=460&u=27993fe64634b798746d9aef22ac0e06a5a826e0&v=4"
            alt="Hewerton Oliveira"
          />
          <div>
            <strong>hewerton/soundacity</strong>
            <p>
              Android app that struture a player for musics. The playback isn`t
              working.
            </p>
          </div>
          <FiChevronRight />
        </S.RepositoryItem>
        <S.RepositoryItem>
          <img
            src="https://avatars2.githubusercontent.com/u/1130376?s=460&u=27993fe64634b798746d9aef22ac0e06a5a826e0&v=4"
            alt="Hewerton Oliveira"
          />
          <div>
            <strong>hewerton/soundacity</strong>
            <p>
              Android app that struture a player for musics. The playback isn`t
              working.
            </p>
          </div>
          <FiChevronRight />
        </S.RepositoryItem>
      </S.RepositoryList>
    </>
  );
};

export default Dashboard;
