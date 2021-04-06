import { css, FlattenSimpleInterpolation } from 'styled-components';

interface MediaQueriesSizes {
  [key: string]: number;
}

interface MediaQueries {
  [key: string]: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
}

const sizes: MediaQueriesSizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {} as MediaQueries);
