import { createTheme } from '@mui/material/styles'

import palette from '../styles/palette.module.scss'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
}
const tableTheme = (isDarkMode = false) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            primary: {
              main: palette.secondary,
            },
            secondary: {
              main: palette.secondary,
            },
          }
        : {
            primary: {
              main: palette.primary,
            },
            secondary: {
              main: palette.secondary,
            },
          }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { variant: 'contained' },
                style: {
                  color: isDarkMode ? 'white' : 'black',
                  '&:hover': {
                    backgroundColor: isDarkMode ? palette.primary : '',
                  },
                  '&.MuiButtonBase-root': {
                    backgroundColor: isDarkMode ? palette.primary : '',
                  },
                },
              },
            ],
            borderRadius: 10,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            '&.MuiMenu-list': {
              padding: 0,
              margin: 0,
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            transition: '0.3s',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            '&.MuiMenu-paper': {
              borderRadius: 10,
            },
          },
        },
      },
    },
  })
}

export default tableTheme
