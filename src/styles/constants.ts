export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(24deg 5% 6%)',
  
  gray: {
    100: 'hsl(0deg 0% 95%)',
    200: 'hsl(0deg 0% 85%)',
    300: 'hsl(0deg 0% 75%)',
    400: 'hsl(0deg 0% 65%)',
    500: 'hsl(0deg 0% 50%)',
    600: 'hsl(0deg 0% 40%)',
    700: 'hsl(0deg 0% 30%)',
    800: 'hsl(0deg 0% 20%)',
    900: 'hsl(0deg 0% 12%)',
    1000: 'hsl(0deg 0% 8%)',
  },
  
  // #d6b43e - Golden yellow
  primary: {
    300: 'hsl(45deg 65% 70%)',
    500: 'hsl(45deg 65% 54%)',
    700: 'hsl(45deg 65% 38%)',
  },
  
  // #96d1aa - Mint green
  secondary: {
    300: 'hsl(143deg 42% 80%)',
    500: 'hsl(143deg 42% 70%)',
    700: 'hsl(143deg 42% 50%)',
  },
  
  // #4f4086 - Purple
  accent: {
    300: 'hsl(256deg 35% 58%)',
    500: 'hsl(256deg 35% 38%)',
    700: 'hsl(256deg 35% 28%)',
  },
};


export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};


