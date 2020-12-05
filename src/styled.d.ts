import 'styled-components';

type Typography = {
    fontFamily: string;
    fontSize: string;
    color: string;
    margin?: string;
    fontWeight?: number;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            main: string;
            secondary: string;
            error: string;
            blue: string;
        };
        typography: {
            heading: Typography;
            paragraph: Typography;
            largeLabel: Typography;
            smallLabel: Typography;
        };
    }
}
