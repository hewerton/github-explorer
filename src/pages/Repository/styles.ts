import styled from 'styled-components';
import media from '../../styles/media';

export const Header = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #3d3d4d;
    }

    svg {
      margin-right: 8px;
      display: none;

      ${media.tablet`
        display: inline;
      `}
    }
  }
`;

export const RepositoryDetails = styled.section`
  margin-top: 40px;
`;

export const RepositoryInfo = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 16px;

    ${media.tablet`
      margin-bottom: 0px;
    `}
  }

  div {
    ${media.tablet`
      margin-left: 24px;
    `}

    strong {
      line-height: 42px;
      font-size: 36px;
      font-weight: bold;
      color: #3d3d4d;
    }

    p {
      line-height: 23px;
      font-size: 20px;
      margin-top: 8px;
      color: #737380;
    }
  }
`;

export const RepositoryNumbers = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
  `}

  li {
    text-align: center;

    ${media.tablet`
      text-align: left;
    `}

    & + li {
      margin-top: 20px;

      ${media.tablet`
        margin-top: 0px;
        margin-left: 80px;
      `}
    }
    strong {
      display: block;
      line-height: 42px;
      font-size: 36px;
      font-weight: bold;
      color: #3d3d4d;
    }
    span {
      margin-top: 4px;
      line-height: 23px;
      font-size: 20px;
      color: #6c6c80;
    }
  }
`;

export const IssueList = styled.div`
  margin-top: 40px;
  max-width: 715px;
`;

export const IssueItem = styled.a`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  //display: block;
  text-decoration: none;

  display: flex;
  align-items: center;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  & + a {
    margin-top: 16px;
  }

  div {
    flex: 1;

    strong {
      line-height: 28px;
      font-size: 24px;
      color: #3d3d4d;
    }

    p {
      margin-top: 8px;
      line-height: 21px;
      font-size: 18px;
      color: #a8a8b3;
    }
  }
  svg {
    margin-left: auto;
    color: #c9c9d4;
  }
`;
