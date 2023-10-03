import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      :root {
        font-size: 10px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        border: none;
        outline: none;
        cursor: pointer;
      }

    


`;
