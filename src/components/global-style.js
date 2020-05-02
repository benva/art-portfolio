import { createGlobalStyle } from 'styled-components';

export const smallPhone = '350px';
export const phone = '540px';
export const tablet = '768px';
export const desktop = '1024px';
export const largeDesktop = '1440px';

const GlobalStyle = createGlobalStyle`
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
`;
export default GlobalStyle;
