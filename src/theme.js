import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: '#865D36',   
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#93785B',
        },

        background: {
            default: '#F7F3EF',  
            paper: '#FFFFFF',
        },

        text: {
            primary: '#3E362E',
            secondary: '#6F6256',
        },

        divider: '#A69080',

        neutral: {
            main: '#A69080',
        },
    },
    typography: {
        fontFamily: '"Merriweather", serif',

        h1: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
        },
        h5: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
        },
        h6: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
        },

        body1: {
            fontFamily: '"Merriweather", serif',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        body2: {
            fontFamily: '"Merriweather", serif',
            fontWeight: 300,
            lineHeight: 1.6,
        },

        button: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
            },
        },
    },
});

export default theme;