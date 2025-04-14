import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            accent: string;
            background: {
                dark: string;
                darker: string;
                light: string;
            };
            text: {
                primary: string;
                secondary: string;
                gold: string;
                dark: string;
            };
            success: string;
            error: string;
            warning: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        typography: {
            fontFamily: {
                primary: string;
                secondary: string;
            };
            fontSize: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
                huge: string;
            };
            fontWeight: {
                regular: number;
                medium: number;
                semibold: number;
                bold: number;
            };
            letterSpacing: {
                tight: string;
                normal: string;
                wide: string;
                wider: string;
                widest: string;
            };
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        shadows: {
            sm: string;
            md: string;
            lg: string;
            gold: string;
        };
        transitions: {
            fast: string;
            normal: string;
            slow: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
};