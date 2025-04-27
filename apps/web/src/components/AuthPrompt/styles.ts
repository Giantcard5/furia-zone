import styled from 'styled-components';

import Link from 'next/link';

const PromptContainer = styled.div`
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PromptTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.75rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
`;

const PromptText = styled.p`
    color: ${({ theme }) =>     theme.colors.text.secondary};
    margin-bottom: 1.5rem;
    max-width: 400px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const AuthButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-family: 'Space Mono', monospace;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
`;

const LoginButton = styled(AuthButton)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    
    &:hover {
        background-color: #E5C158;
    }
`;

const RegisterButton = styled(AuthButton)`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
        
    &:hover {
        background-color: rgba(212, 175, 55, 0.1);
    }
`;

export {
    PromptContainer,
    PromptTitle,
    PromptText,
    ButtonsContainer,
    AuthButton,
    LoginButton,
    RegisterButton
};