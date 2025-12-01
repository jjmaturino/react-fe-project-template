import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';


const resetCSS = `
  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /* 10. Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }
`;

export const GlobalStyles =  createGlobalStyle`
  ${resetCSS}

  html,
  body,
  #root, /* for create-react-app */
  #__next /* for Next.js */ {
    height: 100%;
}

  /* DESIGN TOKENS */
  html {
    --color-white: ${COLORS.white};
    --color-offblack: ${COLORS.offblack};
    
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-200: ${COLORS.gray[200]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-400: ${COLORS.gray[400]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-600: ${COLORS.gray[600]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-800: ${COLORS.gray[800]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-gray-1000: ${COLORS.gray[1000]};
    
    --color-primary-300: ${COLORS.primary[300]};
    --color-primary-500: ${COLORS.primary[500]};
    --color-primary-700: ${COLORS.primary[700]};
    
    --color-secondary-300: ${COLORS.secondary[300]};
    --color-secondary-500: ${COLORS.secondary[500]};
    --color-secondary-700: ${COLORS.secondary[700]};
    
    --color-accent-300: ${COLORS.accent[300]};
    --color-accent-500: ${COLORS.accent[500]};
    --color-accent-700: ${COLORS.accent[700]};
  }

  

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    background-color: var(--color-white);
    color: var(--color-gray-900);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: var(--color-accent-300);
  }

`
