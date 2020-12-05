import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
    colors: {
        main: '#00FC87',
        secondary: 'white',
        error: '#ff3838',
        blue: '#01b3e4',
    },
    typography: {
        heading: {
            fontFamily: 'lato',
            fontSize: '2.75rem',
            color: 'white',
            margin: '1rem 0 0.5rem 0',
            fontWeight: 700,
        },
        paragraph: {
            fontFamily: 'lato',
            fontSize: '1rem',
            color: 'white',
            margin: '0',
            fontWeight: 300,
        },
        largeLabel: {
            fontFamily: 'oswald',
            fontSize: '1.65rem',
            fontWeight: 300,
            color: '#00FC87',
            margin: '0',
        },
        smallLabel: {
            fontFamily: 'oswald',
            fontSize: '1rem',
            color: 'white',
            fontWeight: 300,
            margin: '0',
        },
    },
};

export default myTheme;
