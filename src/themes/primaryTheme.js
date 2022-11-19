import { createTheme } from '@mui/material/styles'

export const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#4611bf',
        },
        secondary: {
            main: '#165a92',
        },
        background: {
            default: '#c1b6a9',
            paper: '#ded3d3',
        },
        error: {
            main: '#b13027',
        },
        warning: {
            main: '#ff8a80',
        },
        info: {
            main: '#7530c9',
        },
    },
};

const theme = createTheme(themeOptions)
export default theme