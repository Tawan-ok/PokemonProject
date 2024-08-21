import { createTheme } from '@mui/material/styles'

import palette from '../styles/palette.module.scss'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
}

// Create a theme instance.
const theme = (isDarkMode = false) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            primary: {
              main: palette.primary,
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
                props: { variant: 'dashed' },
                style: {
                  color: isDarkMode ? 'white' : 'black',
                },
              },
            ],
            borderRadius: 10,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '& .MuiSwitch-switchBase': {
              color: palette.secondary,
              '&.Mui-checked': {
                color: palette.secondary,
              },
              '&.Mui-checked + .MuiSwitch-track': {
                backgroundColor: palette.secondary,
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: 0,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.lightGrey,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.secondary,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDarkMode ? palette.lightGrey : 'black',
            '&.Mui-focused': {
              color: palette.secondary,
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: isDarkMode ? palette.lightGrey : palette.primary,
            '&.Mui-checked': {
              color: isDarkMode ? palette.secondary : palette.primary,
            },
            '&.MuiCheckbox-indeterminate': {
              color: isDarkMode ? palette.secondary : palette.primary,
            },
          },
        },
      },
    },
  })
}

export default theme
