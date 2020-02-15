import 'styled-components';

type Typography = {
    fontFamily: string;
    fontSize: string;
    color: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            main: string;
            secondary: string;
        };
        typography: {
            paragraph: Typography;
            label: Typography;
        };
    }
}
