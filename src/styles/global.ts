import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    body {
        font-family: 'Montserrat', Roboto, sans-serif;
        color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.background.darker};
    };

	button {
        border: none;
        background: none;

        cursor: pointer;
    };

    input {
        border: none;
        background: none;

        cursor: auto;

        &:focus {
            outline: none;
        };
    };
        
    a {
        color: inherit;
        text-decoration: none;
    };
`;