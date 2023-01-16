import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { FC } from 'react';
import { ThemeProps } from '../types/index';

enum ThemePalette {
  BG = '#b1ff52',
  LIME = '#0EECE4',
  FONT_GLOBAL = 'jetBrains Mono, monospace',
  ERROR_MAIN = '#f44336',
  BG_ERROR_MAIN = 'rgda(244,67,54,0.1)',
  SUCCESS_MAIN = '#66bb6a',
  BG_SUCCESS_MAIN = 'rgba(102,187,106,0.1)',
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
      fontFamily: ThemePalette.FONT_GLOBAL,
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
      MuiAlert: {
        defaultProps: {
          style: {
            borderRadius: '0.8em',
            fontSize: '1.2em',
          },
        },
        styleOverrides: {
          standardError: {
            border: `1px solid ${ThemePalette.ERROR_MAIN}`,
            backgroundColor: ThemePalette.BG_ERROR_MAIN,
          },
          standardSuccess: {
            border: `1px solid ${ThemePalette.SUCCESS_MAIN}`,
            backgroundColor: ThemePalette.BG_SUCCESS_MAIN,
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
