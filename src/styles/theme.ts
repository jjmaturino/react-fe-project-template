// src/styles/theme.ts
export const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    background: '#f9fafb',
    text: '#1f2937',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    error: '#ef4444',
    success: '#10b981',
  },

  typography: {
    sizes: {
      xsm: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      mdlg: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    weights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
};

export type Theme = typeof theme;
