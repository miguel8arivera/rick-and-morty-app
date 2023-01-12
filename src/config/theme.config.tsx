import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { FC } from 'react';
import { ThemeProps } from '../types/index';

enum ThemePalette {
  BG = '#b1ff52',
  LIME = '#0EECE4',
  FONT = 'jetBrains Mono, monospace',
}

export const ThemeConfig: FC<ThemeProps> = function ({ children }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: ThemePalette.BG,
      },
      primary: {
        main: ThemePalette.LIME,
      },
    },
    typography: {
      fontFamily: ThemePalette.FONT,
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: '0.5em',
            margin: '0.5em',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
