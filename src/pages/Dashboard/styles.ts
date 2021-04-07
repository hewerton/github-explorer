import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

import media from '../../styles/media';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 40px;
  max-width: 450px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}

  input {
    line-height: 66px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 5px 0px 0px;
    border: 2px solid #fff;
    border-bottom: none;
    font-size: 16px;

    &::placeholder {
      color: #a8a8b3;
    }

    ${media.tablet`
      flex: 1;
      border-radius: 5px 0px 0px 5px;
      border-right: 0;
      border-bottom: 2px solid #fff;
    `}

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.hasError &&
      media.tablet`
        border-color: #c53030;
    `}
  }

  button {
    width: 100%;
    height: 70px;
    background-color: #04d361;
    border-radius: 0px 0px 5px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }

    ${media.tablet`
      width: 210px;
      border-radius: 0px 5px 5px 0px;
    `}
  }
`;

export const FormError = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
`;

export const RepositoryList = styled.div`
  margin-top: 40px;
  max-width: 715px;
`;

export const RepositoryItem = styled(Link)`
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

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: none;

    ${media.tablet`
      display: inline;
    `}
  }

  div {
    margin-left: 16px;
    flex: 1;

    strong {
      font-size: 24px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
    }
  }
  svg {
    margin-left: auto;
    color: #c9c9d4;
  }
`;
